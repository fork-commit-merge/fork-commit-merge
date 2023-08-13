defmodule ElixirSumListTest do
  use ExUnit.Case
  doctest ElixirSumList

  test "sums a list of numbers" do
    assert ElixirSumList.sum([1, 2, 3, 4, 5]) == 15
    assert ElixirSumList.sum([]) == 0
    assert ElixirSumList.sum([-1, 1, -2, 2]) == 0
  end
end
