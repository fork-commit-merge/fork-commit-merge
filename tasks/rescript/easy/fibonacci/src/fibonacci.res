// ReScript - Easy

let () =
  let num1 = 0 in
  let num2 = 1 in
  Js.log(num1);
  Js.log(num2);

  for i in 2 to 10 {
    let third = num1 + num2;
    Js.log(third);
    num1 = num2;
    num2 = third;
  };
// TODO: Create a ReScript program to calculate Fibonacci sequence
