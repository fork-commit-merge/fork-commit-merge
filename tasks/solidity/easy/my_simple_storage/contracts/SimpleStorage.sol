// Solidity - Easy

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 _number;
    //TODO: Implement function to set the number

    function store(uint256 number) public {
       _number = number;
    }
    //TODO: Implement function to get the number
    function retrieve() public view returns(uint256) {
        return _number;
    }
}