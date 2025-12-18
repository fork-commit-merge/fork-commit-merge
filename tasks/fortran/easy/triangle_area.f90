program triangle_area
    implicit none
    real :: base, height, area

    ! Prompt user for the base of the triangle
    print *, "Enter the base of the triangle:"
    read *, base

    ! Prompt user for the height of the triangle
    print *, "Enter the height of the triangle:"
    read *, height

    ! Calculate the area of the triangle
    area = 0.5 * base * height

    ! Display the result
    print *, "The area of the triangle is:", area

end program triangle_area
