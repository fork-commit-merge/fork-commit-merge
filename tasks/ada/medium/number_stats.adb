with Ada.Text_IO; use Ada.Text_IO;

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

   -- Print the Min, Max, Sum, and Avg on separate lines
   -- using the statements below

   Put_Line ("Min:" & Integer'Image (Min));
   Put_Line ("Max:" & Integer'Image (Max));
   Put_Line ("Sum:" & Integer'Image (Sum));
   Put_Line ("Avg:" & Float'Image (Avg));
end Number_Stats;
