// Zig - Easy

const std = @import("std");

pub fn main() void {
    const hello = "Hello, world!";
    const stdout = std.io.getStdOut().writer();
    stdout.print(hello, .{}) catch unreachable;
    stdout.print("\n", .{}) catch unreachable;
}
