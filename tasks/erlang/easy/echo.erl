-module(echo).
-export([start/0]).

start() ->
    io:format("Welcome to the echo program!~n"),
    echo_loop().

echo_loop() ->
    {ok, Input} = io:get_line("Enter text (or 'exit' to quit): "),
    case Input of
        "exit\n" ->
            io:format("Goodbye!~n");
        _ ->
            io:format("You entered: ~s~n", [Input]),
            echo_loop()
    end.
