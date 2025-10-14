; TODO: Implement the code requested in the issue description


section .data
    msg db "Hello World!", 0x0A
    msgLen equ $ - msg

section .text
    global _start

_start:

    mov eax, 4
    mov ebx, 1
    mov ecx, msg
    mov edx, msgLen
    int 0x80

    mov eax, 1
    mov ebx, 0
    int 0x80