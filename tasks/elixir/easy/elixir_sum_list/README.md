# ElixirSumList

<!-- TODO: Create a Basic Elixir Function to Sum a List of Numbers in lib/elixir_sum_list.ex -->

# lib/elixir_sum_list.ex

defmodule ElixirSumList do
@moduledoc """
A sample module to sum a list of numbers.
"""
@doc """
Returns the sum of all numbers i the list.
## Examples
iex> ElixirSumList.sum_list([1,2,3,4,5])
15
"""
def sum_list(numbers)when is_list(numbers) do
Enum.sum(numbers)
end
end