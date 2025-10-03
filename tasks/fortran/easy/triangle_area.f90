program triangle_area
! TODO: Implement the triangle_area program
implicit none
real :: base, height, triangle_area

! Ask user for input
print *, "Enter the base of triangle:"
read *, base
print *, "Enter the height of the triangle:"
read *, height

! calculate triangle
triangle_area = 0.5 * base * height

! Display result
print *, "The area of the triangle is:", triangle_areaarea
end program triangle_area
