// Solidity - Easy

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private _number;

    // Set the number
    function setNumber(uint256 newNumber) external {
        _number = newNumber;
    }

    // Get the number
    function getNumber() external view returns (uint256) {
        return _number;
    }
}

