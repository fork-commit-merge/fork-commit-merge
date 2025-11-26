" Smalltalk - Easy "

Object subclass: #Factorial
    instanceVariableNames: ''
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Math'.

Factorial class>>of: anInteger
    "Calculate factorial of a given integer"
    (anInteger = 0) ifTrue: [^1].
    ^anInteger * (self of: anInteger - 1).

"Example usage: Factorial of: 5"
