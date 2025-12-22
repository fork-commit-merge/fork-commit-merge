// Solidity - Easy

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    uint256 _number;
    // TODO: Implement function to set the number

    function set(uint256 _value) public {
        _number = _value;
    }

    // TODO: Implement function to get the number
    function get() public view returns (uint256) {
        return _number;
    }
}
