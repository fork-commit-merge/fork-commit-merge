-- Lua - Easy

local function celsiusToFahrenheit(celsius)
    return celsius * 9/5 + 32
end

local function fahrenheitToCelsius(fahrenheit)
    return (fahrenheit - 32) * 5/9
end

print("Temperature Converter")
print("1. Celsius to Fahrenheit")
print("2. Fahrenheit to Celsius")
print("Enter your choice (1 or 2):")
local choice = io.read()

if choice == "1" then
    print("Enter temperature in Celsius:")
    local celsius = tonumber(io.read())
    local fahrenheit = celsiusToFahrenheit(celsius)
    print(string.format("%.2f°C = %.2f°F", celsius, fahrenheit))
elseif choice == "2" then
    print("Enter temperature in Fahrenheit:")
    local fahrenheit = tonumber(io.read())
    local celsius = fahrenheitToCelsius(fahrenheit)
    print(string.format("%.2f°F = %.2f°C", fahrenheit, celsius))
else
    print("Invalid choice!")
end
