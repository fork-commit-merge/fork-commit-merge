// Pascal - Medium

// Create a Pascal program that reads a sequence of numbers from the user until a negative number is entered. Then, calculate and display the average of all the positive numbers entered.
program AverageCalculator;

var
  num: Real;
  sum: Real;
  count: Integer;
  average: Real;

begin
  sum := 0.0;
  count := 0;
  
  WriteLn('Enter positive numbers (enter a negative number to stop):');
  
  repeat
    Write('Enter a number: ');
    ReadLn(num);
    
    if num >= 0 then
    begin
      sum := sum + num;
      count := count + 1;
    end;
  until num < 0;
  
  if count > 0 then
  begin
    average := sum / count;
    WriteLn('Average of the positive numbers: ', average:0:2);
  end
  else
  begin
    WriteLn('No positive numbers were entered.');
  end;
end.
