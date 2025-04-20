// Solidity - Easy

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    // State variable to store the number
    uint256 private storedNumber;

    // Function to store a number
    function set(uint256 _number) public {
        storedNumber = _number;
    }

    // Function to retrieve the stored number
    function get() public view returns (uint256) {
        return storedNumber;
    }
}
