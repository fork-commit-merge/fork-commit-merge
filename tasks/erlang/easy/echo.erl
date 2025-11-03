% Erlang - Easy

-module(echo).
-export([start/0]).

start() ->
    % Implement the echo program
    io:format("Enter a message: "),
    Input = io:get_line(""),
    io:format("Echo: ~s", [Input]).
