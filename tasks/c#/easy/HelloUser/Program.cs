// C# - Easy

// TODO: Implement the C# program requested in the Issue description
using System;

class Program
{
    static void Main()
    {
        Console.Write("Enter your name: ");
        string? name = Console.ReadLine()?.Trim();

        if (string.IsNullOrEmpty(name))
        {
            Console.WriteLine("That's not a valid name!");
        }
        else
        {
            Console.WriteLine($"Hello, {name}!");
        }

        Console.ResetColor();
    }
}
