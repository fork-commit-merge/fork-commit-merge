" Smalltalk - Easy "

Object subclass: Factorial [
    
    Factorial class >> calculate: n [
        | result |
        result := 1.
        
        1 to: n do: [:i |
            result := result * i
        ].
        
        ^result
    ]
]

Transcript show: 'Factorial of 5: ', (Factorial calculate: 5) asString; cr.