program triangle_area
! Implement the triangle_area program
    implicit none
    real :: base, height, area
    
    print *, "Enter the base of the triangle:"
    read *, base
    
    print *, "Enter the height of the triangle:"
    read *, height
    
    area = 0.5 * base * height
    
    print *, "Area of the triangle:", area
    
end program triangle_area
