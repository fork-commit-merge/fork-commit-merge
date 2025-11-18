// C# - Easy

// TODO: Implement the C# program requested in the Issue description
Console.WriteLine("First at all, How's your name?");

var name = "";
var invalidName = false;
do
{
    Console.Write(">_ ");
    name = Console.ReadLine();
    invalidName = string.IsNullOrWhiteSpace(name);
    if (invalidName)
    {
        Console.WriteLine("Please tell me your name, I promise that I don't bite ;)");
    }
} while (invalidName);

Console.WriteLine($"Hello, {name}!");