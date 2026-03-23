" Smalltalk - Easy "

" TODO: Implement the Factorial class "
| n result |

n := 5.
result := 1.

1 to: n do: [:i |
    result := result * i
].

Transcript show: 'Factorial of ', n asString, ': ', result asString; cr.
