(* OCaml - Easy *)

(* Implement a function that takes a list of integers and returns the sum of all the integers in the list *)
let rec sum_list lst =
  match lst with
  | [] -> 0
  | head :: tail -> head + sum_list tail

let () =
  let numbers = [1; 2; 3; 4; 5] in
  let result = sum_list numbers in
  Printf.printf "Sum of list: %d\n" result
