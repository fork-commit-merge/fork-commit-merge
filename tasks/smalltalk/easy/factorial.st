" Smalltalk - Easy "

" TODO: Implement the Factorial class "

Object subclass: #FactorialCalculator
	iinstanceVariableNames: ''
	classVariableNames: ''
	poolDictionaries: ''
	category: 'Example'!

!FactorialCalculator methodsFor: 'calculation' stamp: 'user 1/1/2024 00:00:00'!
factorial: n
	"Calculate factorial of n"
	(n = 0) | (n = 1) ifTrue: [^ 1].
	^ n * (self factorial: n - 1)
!
