-- Lua - Easy

local function celsiusToFahrenheit(celsius)
    return celsius * 9/5 + 32
end

local function fahrenheitToCelsius(fahrenheit)
    return (fahrenheit - 32) * 5/9
end

local function opt(n)
    if n == 1 then return "Fahrenheit" else return "Celsius" end
end

local function func(n, t)
       if n == 1 then return fahrenheitToCelsius(t) else return celsiusToFahrenheit(t) end
end

print("Choose type of conversion: (1) Fahrenheit to Celsius or (2) Celsius to Fahrenheit")
option = io.read("*n")
temp = 0
invalid = "Invalid input. Please enter a numeric value."

if (type(option) == "number") then
    print("Enter temperature in "..opt(option)..":")
    temp = io.read("*n")
    if type(temp) == "number" then
        print("The temperature is "..(func(option, temp)).." degrees "..opt(option) )
    else
        print(invalid)
    end
else
    print(invalid)
end
    
