" Smalltalk - Easy "

| n factorial |
n := 5.
factorial := 1.
1 to: n do: [:i | factorial := factorial * i].
Transcript show: 'Factorial of ', n printString, ': ', factorial printString; cr.
