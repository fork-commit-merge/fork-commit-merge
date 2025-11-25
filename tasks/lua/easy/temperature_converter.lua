-- Lua - Easy

local function celsiusToFahrenheit(celsius)
    return celsius * 9/5 + 32
end

local function fahrenheitToCelsius(fahrenheit)
    return (fahrenheit - 32) * 5/9
end

-- TODO: Implement rest of the Temperature Converter

-- Main program
print("Choose type of conversion: (1) Fahrenheit to Celsius or (2) Celsius to Fahrenheit")
local choice = io.read()

-- Validate choice
if choice ~= "1" and choice ~= "2" then
        print("Invalid input. Please enter a numeric value.")
        return
    end

-- Get temperature input
print("Enter temperature in " .. (choice == "1" and "Fahrenheit" or "Celsius") .. ":")
local temp_input = io.read()
local temperature = tonumber(temp_input)

-- Validate temperature input
if not temperature then
        print("Invalid input. Please enter a numeric value.")
        return
    end

-- Perform conversion and display result
if choice == "1" then
        local converted = fahrenheitToCelsius(temperature)
        print(string.format("The temperature is %.2f degrees Celsius.", converted))
    else
        local converted = celsiusToFahrenheit(temperature)
        print(string.format("The temperature is %.2f degrees Fahrenheit.", converted))
    end
