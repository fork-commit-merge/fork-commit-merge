<?php

// PHP - Easy 3

$data = ['Pizza', 'Chicken', 'Beef', 'Rice', 'Bread'];

// TODO: Display data "Beef" from the array


foreach ($data as $item) {
    if ($item === 'Beef') {
        echo $item;
        break; // Stop the loop once "Beef" is found
    }
}

?>