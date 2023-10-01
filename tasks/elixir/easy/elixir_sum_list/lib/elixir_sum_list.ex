# Elixir - Easy

defmodule ElixirSumList do
  def sum_list([]), do: 0
  def sum_list(numbers) when is_list(numbers) do
    Enum.reduce(numbers, 0, fn number, acc -> acc + number end)
  end
end
