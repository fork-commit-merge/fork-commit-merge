<?php

$data = ['Pizza', 'Chicken', 'Beef', 'Rice', 'Bread'];

foreach ($data as $item) {
    if ($item === 'Beef') {
        echo "Found Beef!" . PHP_EOL;
        break; // Stop searching once "Beef" is found
    }
}

?>
