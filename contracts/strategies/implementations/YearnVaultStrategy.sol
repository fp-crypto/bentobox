// SPDX-License-Identifier: MIT

pragma solidity 0.6.12;
pragma experimental ABIEncoderV2;

import {BaseStrategy as BentoBaseStrategy} from "../BaseStrategy.sol";
import {
    BaseWrapper as YearnBaseWrapper
} from "@yearn/yearn-vaults/contracts/BaseWrapper.sol";

contract YearnVaultStrategy is YearnBaseWrapper, BentoBaseStrategy {

    constructor(
        address _token,
        address _yRegistry,
        address _bentoBox,
        address _strategyExecutor
    )
        public
        YearnBaseWrapper(_token, _yRegistry)
        BentoBaseStrategy(
            BentoBaseStrategy.BaseStrategyParams(
                _token,
                _bentoBox,
                _strategyExecutor,
                address(0), // no rewards, so factory is not needed
                address(0)  // no rewards, no bridgeToken token
            )
        )
    {}

    function _skim(uint256 amount) internal override {
        super._deposit(address(this), address(this), amount, false);
    }

    function _harvest(uint256 balance)
        internal
        override
        returns (int256 amountAdded)
    {
        amountAdded =
            int256(super.totalVaultBalance(address(this))) -
            int256(balance);
        if (amountAdded > 0) {
            _withdraw(uint256(amountAdded));
        }
    }

    function _withdraw(uint256 amount) internal override {
        super._withdraw(address(this), address(this), amount, true);
    }

    function _exit() internal override {
        _withdraw(type(uint256).max);
    }

    function migrate(uint256 amount, uint256 maxMigrationLoss)
        external
        onlyOwner
        returns (uint256)
    {
        return super._migrate(address(this), amount, maxMigrationLoss);
    }
}
