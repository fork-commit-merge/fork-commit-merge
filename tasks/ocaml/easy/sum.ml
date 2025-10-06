(* OCaml - Easy *)

(* TODO: Implement a function that takes a list of integers and returns the sum of all the integers in the list *)
(* sum_list.ml *)
let rec sum_list = function
  | [] -> 0
  | x :: xs -> x + sum_list xs

let () = print_int (sum_list [1;2;3;4;5])