program triangle_area
    implicit none

    real :: base, height, area

    ! TODO: Get input for base and height
    write(*,*) "Enter the base of the triangle:"
    read(*,*) base

    write(*,*) "Enter the height of the triangle:"
    read(*,*) height

    ! TODO: Calculate the area
    area = 0.5 * base * height

    ! TODO: Display the result
    write(*,*) "The area of the triangle is:", area

end program triangle_area
