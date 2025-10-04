#!/usr/bin/env perl
use Mojolicious::Lite -signatures;

# TODO: Create a Route leading to a "Hello, Mojo!" text
get '/' => sub ($c){
    $c->render(text => 'Hello, Mojo!');

};
app->start;
