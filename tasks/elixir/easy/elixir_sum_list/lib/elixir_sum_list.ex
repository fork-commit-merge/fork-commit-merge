# Elixir - Easy

defmodule ElixirSumList do
  def sum([]), do: 0
  def sum(list), do: Enum.reduce(list, 0, &+/2)
end