<?php

// PHP - Easy 3

$data = ['Pizza', 'Chicken', 'Beef', 'Rice', 'Bread'];

// TODO: Display data "Beef" from the array
foreach ($data as $food) {
	if (strcmp($food, 'Beef') == 0) {
		print($food);
	}
}
