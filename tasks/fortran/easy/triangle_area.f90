program triangle_area
    ! Declaration of variables
    real :: base, height, area
    
    ! Input: Read the base and height of the triangle from the user
    write(*,*) "Enter the base of the triangle: "
    read(*,*) base

    write(*,*) "Enter the height of the triangle: "
    read(*,*) height

    ! Calculate the area of the triangle
    area = 0.5 * base * height

    ! Output: Display the calculated area
    write(*,*) "The area of the triangle is: ", area

end program triangle_area
