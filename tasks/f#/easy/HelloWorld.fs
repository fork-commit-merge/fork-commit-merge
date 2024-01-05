open System

[<EntryPoint>]
let main argv =
    Console.WriteLine("Hello World!")
    0 // Return an integer exit code

// Run the program
[<EntryPoint>]
do
    System.Console.ReadKey() |> ignore
    0 // Return an integer exit code
