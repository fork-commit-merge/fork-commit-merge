(* OCaml - Easy *)

(* Function to calculate the sum of a list of integers *)
let rec sum_of_list lst =
  match lst with
  | [] -> 0  (* Base case: an empty list has a sum of 0 *)
  | hd :: tl -> hd + sum_of_list tl (* Recursive case: add the head to the sum of the tail *)

(* Example usage *)
let result = sum_of_list [1; 2; 3; 4; 5] in
print_int result; print_newline();;
