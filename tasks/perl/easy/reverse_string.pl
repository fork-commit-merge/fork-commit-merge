#!/usr/bin/perl
# Perl - Easy

use strict;
use warnings;

print "Enter a string to reverse: ";
my $input = <STDIN>;
chomp($input);

my $reversed = reverse($input);
print "Reversed string: $reversed\n";
