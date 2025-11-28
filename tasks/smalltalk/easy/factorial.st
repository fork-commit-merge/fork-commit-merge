" Smalltalk - Easy "


Number extend: [
    factorial [
        "Calculate the factorial of the receiver"
        self <= 1 ifTrue: [ ^ 1 ].
        ^ self * (self - 1) factorial
    ]
].

"Test the factorial function"
n := 5.
result := n factorial.
Transcript show: 'Factorial of ', n asString, ': ', result asString; cr.
