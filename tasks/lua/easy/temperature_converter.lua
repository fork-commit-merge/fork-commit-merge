-- Lua - Easy

local function celsiusToFahrenheit(celsius)
    return celsius * 9 / 5 + 32
end

local function fahrenheitToCelsius(fahrenheit)
    return (fahrenheit - 32) * 5 / 9
end

print("Choose type of conversion: (1) Fahrenheit to Celsius or (2) Celsius to Fahrenheit")
local conversionType = io.read()

if conversionType == "1" then
    print("Enter temperature in Fahrenheit: ")
elseif conversionType == "2" then
    print("Enter temperature in Celsius: ")
else
    print("Invalid conversion choice.")
    os.exit()
end

local temperature = tonumber(io.read())

if temperature == nil then
    print("Invalid input. Please enter a numeric value.")
    os.exit()
end

if conversionType == "1" then
    local convertedTemperature = fahrenheitToCelsius(temperature)
    print("The temperature is " .. convertedTemperature .. " degrees Celsius.")
else
    local convertedTemperature = celsiusToFahrenheit(temperature)
    print("The temperature is " .. convertedTemperature .. " degrees Fahrenheit.")
end