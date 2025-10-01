------------------------------- MODULE counter -------------------------------

EXTENDS Naturals

VARIABLES count

MaxCount == 100


Init ==
    count = 0


  Increment ==
    count' = count + 1


  Decrement ==
    /\ count > 0
    /\ count' = count - 1

Next ==
    Increment \/ Decrement

Spec ==
    Init /\ [][Next]_count

=============================================================================
