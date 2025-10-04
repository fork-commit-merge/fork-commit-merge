-- Lua - Easy

local function celsiusToFahrenheit(celsius)
    return celsius * 9/5 + 32
end

local function fahrenheitToCelsius(fahrenheit)
    return (fahrenheit - 32) * 5/9
end

-- TODO: Implement rest of the Temperature Converter
print("Choose type of conversion: (1) Fahrenheit to Celsius or (2) Celsius to Fahrenheit")
local choice = io.read()

if choice == "1" then
    io.write("Enter temperature in Fahrenheit: ")
    local input = io.read()
    local value = tonumber(input)
    if value then
        local result = fahrenheitToCelsius(value)
        print("The temperature is " .. string.format("%.2f", result) .. " degrees Celsius.")
    else
        print("Invalid input. Please enter a numeric value.")
    end

elseif choice == "2" then
    io.write("Enter temperature in Celsius: ")
    local input = io.read()
    local value = tonumber(input)
    if value then
        local result = celsiusToFahrenheit(value)
        print("The temperature is " .. string.format("%.2f", result) .. " degrees Fahrenheit.")
    else
        print("Invalid input. Please enter a numeric value.")
    end

else
    print("Invalid choice. Please restart the program and choose 1 or 2.")
end
