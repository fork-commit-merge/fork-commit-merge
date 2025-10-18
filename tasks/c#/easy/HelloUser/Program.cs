namespace HelloUser;

public class Program
{
    static void Main(string[] args)
    {
        Console.WriteLine("Please enter your name: ");
        string userName = Console.ReadLine();
        Console.WriteLine("Hello, " + userName + "!");
    }
}
