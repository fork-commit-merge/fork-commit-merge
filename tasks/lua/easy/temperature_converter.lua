-- Lua - Easy

local function celsiusToFahrenheit(celsius)
    return celsius * 9/5 + 32
end

local function fahrenheitToCelsius(fahrenheit)
    return (fahrenheit - 32) * 5/9
end


--[[
    This function reads the user input as the conversion type to be performed
    
    Arguments:

    Returns: conversionType: number | nil (invalid input)
]]
local function readConversionType()
    io.write("Choose type of conversion: \n\t(1) Fahrenheit to Celsius\n\t(2) Celsius to Fahrenheit\n> ")
    local conversionType = tonumber(io.read("*line"))

    if conversionType == nil or conversionType <= 0 or conversionType > 2 then
        return nil
    end

    return conversionType
end


--[[
    This function reads the user input as the temperature to be converted

    Arguments:
        conversionType: number (The conversion type to be performed)

    Returns: temperature: number | nil (invalid input)
]]
local function readTemperature(conversionType)
    local format = (conversionType == 1 and "Fahrenheit") or (conversionType == 2 and "Celsius") or "[unknown format]"
    
    io.write("Enter temperature in " .. format .. ": ")
    return tonumber(io.read("*line"))
end


--[[
    This function converts the given temperature according to the specified conversion type

    Arguments:
        conversionType: number (The conversion type to be performed)
        temperature: number (The temperature to be converted)

    Returns:
]]
local function convertTemperature(conversionType, temperature)
    local conversionFunction = (
        (conversionType == 1 and fahrenheitToCelsius) or
        (conversionType == 2 and celsiusToFahrenheit) or
        nil
    )
    
    if conversionFunction == nil then
        return nil
    end
    
    return conversionFunction(temperature)
end


-- This function contains the complete logic for the tempersture converter. Returns 0 for success and 1 for errors
local function temperatureConverter()
    local conversionType = readConversionType()

    if conversionType == nil then
        io.write("Invalid conversion type specified\n")
        return 1
    end

    local temperature = readTemperature(conversionType)
    if temperature == nil then
        io.write("Invalid input. Please enter a numeric value.\n")
        return 1
    end
    
    local newTemperature = convertTemperature(conversionType, temperature)
    if newTemperature == nil then
        io.write("An error occured\n")
        return 1
    end
    
    local format = (conversionType == 1 and "Celsius") or (conversionType == 2 and "Fahrenheit") or nil
    io.write("The temperature is ", newTemperature, " degrees " , format, "\n")

    return 0
end

temperatureConverter()
