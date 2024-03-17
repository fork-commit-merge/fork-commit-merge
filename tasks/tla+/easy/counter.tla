------------------------------- MODULE counter -------------------------------

EXTENDS Naturals

VARIABLES count

MaxCount == 100

Init == count := 0

Increment == count := count + 1

Decrement == count := count - 1

Next == IF count < 0 THEN count := 0 ELSE count := count

Spec ==  count >= 0 /\ count <= MaxCount
