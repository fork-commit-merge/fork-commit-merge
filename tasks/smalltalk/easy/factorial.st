" Smalltalk - Easy "

" TODO: Implement the Factorial class "

Object subclass: #Factorial
	instanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Factorial'

!Factorial methodsFor: 'calculation'!
factorial: n
	(n <= 1)
		ifTrue: [ ^1 ]
		ifFalse: [ ^n * (Factorial new factorial: n - 1) ]
!
