" Smalltalk - Easy "

Object subclass: #Factorial
	instanceVariableNames: 'number'
	classVariableNames: ''
	pooledDictionaries: ''
	category: 'Easy-Problems'!

!Factorial methodsFor: 'calculation'!

calculate: n
	"Calculate factorial of n"
	(n < 0) ifTrue: [ ^'Error: Negative number' ].
	(n = 0 | n = 1) ifTrue: [ ^1 ].
	^n * (self calculate: n - 1)
!
