// Solidity - Easy

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 _number;
    
    function set(uint256 number) public {
        _number = number;
    }

    function get() public view returns (uint256) {
        return _number;
    }
}