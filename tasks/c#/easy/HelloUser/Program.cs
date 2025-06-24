// C# - Easy

using System; 
class HelloUser
{
    static void Main(string[] args)
    {
        Console.Write("Enter your name: ");
        
        string name = Console.ReadLine();
        
        Console.WriteLine($"Hello, {name}!");
    }
}