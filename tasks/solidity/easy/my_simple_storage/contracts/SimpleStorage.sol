// Solidity - Easy

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint storedData;
    
    //TODO: Implement function to set the number
    function set(uint x) public {
        storedData = x;
    }

    //TODO: Implement function to get the number
    function get() public view returns (uint) {
        return storedData;
    }
}