using System;

class Program
{
    static void Main(string[] args)
    {
        Console.Write("Enter your name: ");
        string name = Console.ReadLine() ?? string.Empty;

        Console.WriteLine($"Hello, {name}!");
    }
}
