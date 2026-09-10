-- Lua - Easy

local function celsiusToFahrenheit(celsius)
    return celsius * 9/5 + 32
end

local function fahrenheitToCelsius(fahrenheit)
    return (fahrenheit - 32) * 5/9
end

-- TODO: Implement rest of the Temperature Converter
local function celsiusToKelvin(celsius)
    return celsius + 273.15
end

local function kelvinToCelsius(kelvin)
    return kelvin - 273.15
end

local function fahrenheitToKelvin(fahrenheit)
    return (fahrenheit - 32) * 5/9 + 273.15
end

local function kelvinToFahrenheit(kelvin)
    return (kelvin - 273.15) * 9/5 + 32
end