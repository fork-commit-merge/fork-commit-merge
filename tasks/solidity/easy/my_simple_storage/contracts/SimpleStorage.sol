// Solidity - Easy

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 private _number;

    // Function to set the number
    function setNumber(uint256 newNumber) public {
        _number = newNumber;
    }

    // Function to get the number
    function getNumber() public view returns (uint256) {
        return _number;
    }
}
