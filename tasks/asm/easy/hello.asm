; ASM (Assembly) - Easy

; TODO: Implement a Basic "Hello, World!" Program




org 100h

.model small
.stack 100h
.data
    bval db 'Hello, World!$'

.code
main proc
    mov dx, offset bval   ; Load the address of bval into DX
    mov ah, 9
    int 21h             ; DOS print string function
    mov ah, 4Ch         ; Exit program function
    int 21h             ; DOS terminate program function
main endp
end main


ret




