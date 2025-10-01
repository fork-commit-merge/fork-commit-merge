# Elixir - Easy

defmodule ElixirSumList do
  # TODO: Implement a Basic Elixir Function to Sum a List of Numbers
  #function to sum a list of Numbers
  def sum_list(numbers) do
    Enum.sum(numbers)
  end
end

# Example usage:
IO.puts(ElixirSumList.sum_list([1,2,3,4,5]))
# output: 15
