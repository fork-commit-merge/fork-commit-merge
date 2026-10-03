#!/usr/bin/perl
# Perl - Easy

use strict;
use warnings;

# Prompt for a string, then print it in reversed order.
print "Enter a string: ";
my $input = <STDIN>;
chomp $input;

# reverse() is a list operator, so it is applied to a scalar here explicitly.
my $reversed = scalar reverse $input;
print "$reversed\n";
