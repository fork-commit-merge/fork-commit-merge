" Smalltalk - Easy "

" TODO: Implement the Factorial class "

Factorial class instanceVariableNames: '' classVariableNames: '' poolDictionaries: '' category: 'Smalltalk - Easy'! 

Factorial class >> calculate: aNumber
    | result |
    result := 1.
    2 to: aNumber do: [:i | result := result * i].
    ^ result!
