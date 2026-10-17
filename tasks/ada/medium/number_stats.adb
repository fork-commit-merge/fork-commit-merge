with Ada.Text_IO; use Ada.Text_IO;
with Ada.Integer_Text_IO; use Ada.Integer_Text_IO;
with Ada.Float_Text_IO; use Ada.Float_Text_IO;

procedure Number_Stats is
   Numbers : constant array (1 .. 6) of Integer := (3, 7, 2, 9, 5, 4);

   Min, Max, Sum : Integer;
   Avg : Float;
begin
   Min := Numbers (Numbers'First);
   Max := Numbers (Numbers'First);
   Sum := 0;

   for I in Numbers'Range loop
      if Numbers (I) < Min then
         Min := Numbers (I);
      end if;
      if Numbers (I) > Max then
         Max := Numbers (I);
      end if;
      Sum := Sum + Numbers (I);
   end loop;

   Avg := Float (Sum) / Float (Numbers'Length);

   Put ("Sum:     ");
   Put (Sum, Width => 3);
   New_Line;
   Put ("Minimum: ");
   Put (Min, Width => 2);
   New_Line;
   Put ("Maximum: ");
   Put (Max, Width => 2);
   New_Line;
   Put ("Average: ");
   Put (Avg, Fore => 1, Aft => 2, Exp => 0);
   New_Line;
end Number_Stats;
