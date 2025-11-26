" Smalltalk - Easy "

Object subclass: #Factorial
    instanceVariableNames: ''
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Factorial'!

!Factorial methodsFor: 'calculation'!
calculate: n
    "Calculate factorial of n recursively"
    n <= 1
        ifTrue: [ ^ 1 ]
        ifFalse: [ ^ n * (Factorial new calculate: n - 1) ]
! !

"Print factorial of 5"
Factorial new calculate: 5
