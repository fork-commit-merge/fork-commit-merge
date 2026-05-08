" Smalltalk - Easy "
" Implement the Factorial class "

Object subclass: #Factorial
    instanceVariableNames: ''
    classVariableNames: ''
    poolDictionaries: ''
    category: 'Example'.

!Factorial class methods !
calculate: n
    n = 0 ifTrue: [ ^ 1 ].
    ^ n * (self calculate: n - 1)
!

Transcript show: 'Factorial of 5: ', (Factorial calculate: 5) printString; cr.
