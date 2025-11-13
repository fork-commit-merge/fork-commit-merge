#!/usr/bin/perl
# Perl - Easy

use strict;
use warnings;

# Write a Perl script that accepts a string and prints it in reversed order

print "Enter a string to reverse: ";
my $input = <STDIN>;
chomp $input;

my $reversed = reverse $input;
print "Reversed string: $reversed\n";
# TODO: Write a Perl script that accepts a string and prints it in reversed order
