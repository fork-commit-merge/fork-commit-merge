<?php
$data = ['Pizza', 'Chicken', 'Beef', 'Rice', 'Bread'];

// Find and display "Beef" from the array
foreach ($data as $item) {
    if ($item === 'Beef') {
        echo $item;
        break; // Exit the loop once "Beef" is found
    }
}
?>

