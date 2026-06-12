with Ada.Text_IO; use Ada.Text_IO;
with Ada.Float_Text_IO; use Ada.Float_Text_IO;

procedure Number_Stats is
   Numbers : constant array (1 .. 6) of Integer := (3, 7, 2, 9, 5, 4);

   Min, Max, Sum : Integer;
   Avg : Float;
begin
   Sum := 0;
   Min := Numbers (Numbers'First);
   Max := Numbers (Numbers'First);

   for Index in Numbers'Range loop
      Sum := Sum + Numbers (Index);
      if Numbers (Index) < Min then
         Min := Numbers (Index);
      end if;
      if Numbers (Index) > Max then
         Max := Numbers (Index);
      end if;
   end loop;

   Avg := Float (Sum) / Float (Numbers'Length);

   Put ("Sum:");
   Put (Sum, Width => 8);
   New_Line;

   Put ("Minimum:");
   Put (Min, Width => 3);
   New_Line;

   Put ("Maximum:");
   Put (Max, Width => 3);
   New_Line;

   Put ("Average: ");
   Put (Avg, Fore => 1, Aft => 2, Exp => 0);
   New_Line;
end Number_Stats;
