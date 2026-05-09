" Smalltalk - Easy "

" Implement the Factorial class "

Factorial := Object subclass: #Factorial.

Factorial class instanceVariableNames: ''.

!Factorial class!
factorialOf: n
    n = 0 ifTrue: [ ^ 1 ].
    ^ n * (self factorialOf: n - 1)
!

!Factorial!
compute: n
    ^ self class factorialOf: n
!

" Run test "
| f |
f := Factorial new.
('Factorial of 5: ' , (f compute: 5) asString) displayNl.