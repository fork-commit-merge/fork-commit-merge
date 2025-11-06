#!/usr/bin/perl
# Perl - Easy

use strict;
use warnings;

# TODO: Write a Perl script that accepts a string and prints it in reversed order
print "Enter a string: ";
my $input = <STDIN>;
chomp($input);
my $reversed = reverse($input);
print "Reversed string: $reversed\n";
