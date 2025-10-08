" Smalltalk - Easy "

" TODO: Implement the Factorial class "
"factorial.st - Smalltalk program to calculate factorial of a number"

Object subclass: Factorial [
    
    Factorial class >> compute: n [
        (n = 0)
            ifTrue: [^1]
            ifFalse: [^n * (self compute: n - 1)].
    ]
]

| number result |
number := 5.
result := Factorial compute: number.

Transcript show: 'Factorial of ', number printString, ': ', result printString; cr.