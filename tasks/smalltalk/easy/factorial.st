" Smalltalk - Easy "

" TODO: Implement the Factorial class "

Object subclass: #Factorial
	instanceVariableNames: ''
	classVariableNames: ''
	pooledDictionaries: ''
	category: 'Factorial'!

!Factorial methodsFor: 'calculation'!

compute: n
	"Calculate factorial of n using recursion"
	n <= 1 ifTrue: [ ^ 1 ].
	^ n * (self compute: n - 1).

! !

| fact result |
fact := Factorial new.
result := fact compute: 5.
(Transcript show: 'Factorial of 5: '; show: result) cr.
