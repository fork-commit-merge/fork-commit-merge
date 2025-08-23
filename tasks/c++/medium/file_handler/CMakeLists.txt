cmake_minimum_required(VERSION 3.16)
project(MediumProject)

set(CMAKE_CXX_STANDARD 17)

# Додаємо файли проекту
add_executable(MediumProject
        main.cpp
        FileHandler.cpp
        FileHandler.h
)