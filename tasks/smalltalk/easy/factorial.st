" Smalltalk - Easy "

Object subclass: #Factorial
  instanceVariableNames: ''
  classVariableNames: ''
  poolDictionaries: ''
  category: 'Easy Smalltalk Tasks'!

!Factorial methodsFor: 'calculation'!

calculateFactorial: n
  "Calculate the factorial of n"
  | result |
  result := 1.
  2 to: n do: [:i | result := result * i].
  ^ result
!

calculateAndPrint: n
  | fact |
  fact := self calculateFactorial: n.
  Transcript show: 'Factorial of ', n printString, ': ', fact printString; cr.
!

" Main Execution "
| factorial |
factorial := Factorial new.
factorial calculateAndPrint: 5.
