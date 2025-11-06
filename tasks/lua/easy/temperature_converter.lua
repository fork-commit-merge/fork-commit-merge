-- Lua - Easy

local function celsiusToFahrenheit(celsius)
    return celsius * 9/5 + 32
end

local function fahrenheitToCelsius(fahrenheit)
    return (fahrenheit - 32) * 5/9
end

-- TODO: Implement rest of the Temperature Converter
print("Temperature Converter")
print("1. Celsius to Fahrenheit")
print("2. Fahrenheit to Celsius")
print("Choose an option (1 or 2):")
local choice = io.read()

print("Enter temperature:")
local temp = tonumber(io.read())

if choice == "1" then
    local result = celsiusToFahrenheit(temp)
    print(string.format("%.2f°C = %.2f°F", temp, result))
elseif choice == "2" then
    local result = fahrenheitToCelsius(temp)
    print(string.format("%.2f°F = %.2f°C", temp, result))
else
    print("Invalid choice!")
end
