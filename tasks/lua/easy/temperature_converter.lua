-- Lua - Easy

local function celsiusToFahrenheit(celsius)
    return celsius * 9/5 + 32
end

local function fahrenheitToCelsius(fahrenheit)
    return (fahrenheit - 32) * 5/9
end

print("Choose type of conversion: (1) Fahrenheit to Celsius or (2) Celsius to Fahrenheit")
local choice = io.read()

if choice == "1" then
    print("Enter temperature in Fahrenheit:")
    local input = io.read()
    local fahrenheit = tonumber(input)

    if not fahrenheit then
        print("Invalid input. Please enter a numeric value.")
        return
    end

    local celsius = fahrenheitToCelsius(fahrenheit)
    print(string.format("The temperature is %.2f degrees Celsius.", celsius))

elseif choice == "2" then
    print("Enter temperature in Celsius:")
    local input = io.read()
    local celsius = tonumber(input)

    if not celsius then
        print("Invalid input. Please enter a numeric value.")
        return
    end

    local fahrenheit = celsiusToFahrenheit(celsius)
    print(string.format("The temperature is %.2f degrees Fahrenheit.", fahrenheit))

else
    print("Invalid choice. Please select 1 or 2.")
end
