with Ada.Text_IO; use Ada.Text_IO;

procedure Matrix_Multiplication is
    type Matrix is array (Positive range <>, Positive range <>) of Integer;
    A, B, Result : Matrix;
    Rows_A, Cols_A, Rows_B, Cols_B, Rows_Result, Cols_Result : Positive;
begin
    -- Input matrix A
    Put_Line("Enter number of rows for matrix A:");
    Get(Rows_A);
    Put_Line("Enter number of columns for matrix A:");
    Get(Cols_A);
    Put_Line("Enter elements for matrix A:");
    for I in 1 to Rows_A loop
        for J in 1 to Cols_A loop
            Get(A(I, J));
        end loop;
    end loop;

    -- Input matrix B
    Put_Line("Enter number of rows for matrix B:");
    Get(Rows_B);
    Put_Line("Enter number of columns for matrix B:");
    Get(Cols_B);
    Put_Line("Enter elements for matrix B:");
    for I in 1 to Rows_B loop
        for J in 1 to Cols_B loop
            Get(B(I, J));
        end loop;
    end loop;

    -- Check if matrix multiplication is possible
    if Cols_A /= Rows_B then
        Put_Line("Matrix multiplication is not possible. Number of columns in matrix A must be equal to the number of rows in matrix B.");
    else
        -- Perform matrix multiplication
        Rows_Result := Rows_A;
        Cols_Result := Cols_B;
        for I in 1 to Rows_Result loop
            for J in 1 to Cols_Result loop
                Result(I, J) := 0;
                for K in 1 to Cols_A loop
                    Result(I, J) := Result(I, J) + A(I, K) * B(K, J);
                end loop;
            end loop;
        end loop;

        -- Output the result
        Put_Line("Result of matrix multiplication:");
        for I in 1 to Rows_Result loop
            for J in 1 to Cols_Result loop
                Put(Result(I, J), 5);
            end loop;
            New_Line;
        end loop;
    end if;
end Matrix_Multiplication;
