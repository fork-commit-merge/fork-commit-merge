#!/usr/bin/perl
# Perl - Easy

use strict;
use warnings;

# TODO: Write a Perl script that accepts a string and prints it in reversed order
print "Enter a string: ";
my $input = <STDIN>;
chomp($input);

#Reverse string
my $reversed = reverse $input;

# Print reversed string
    print "Reversed string: $reversed\n";
