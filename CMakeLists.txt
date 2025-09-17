cmake_minimum_required(VERSION 4.0)
project(fork_commit_merge)

set(CMAKE_CXX_STANDARD 14)

include_directories(tasks/c++/hard)

add_executable(fork_commit_merge
        tasks/c++/hard/main.cpp
        tasks/c++/hard/mystring.cpp
        tasks/c++/hard/mystring.h)
