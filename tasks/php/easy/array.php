<?php

// PHP - Easy 3

$data = ['Pizza', 'Chicken', 'Beef', 'Rice', 'Bread'];

// TODO: Display data "Beef" from the array
foreach ($foods as $food) {
    if (strtolower($food) == "beef") { // case-insensitive comparison
        echo "Beef\n"; // Display "Beef" to the console
    }
}
?>
