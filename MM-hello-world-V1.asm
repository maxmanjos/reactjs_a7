# Comsc210 Assignment 1 Hello World

# Programmer: T Newman
# Date:       1/8/24

.data #this is where we define strings, arrays, constants and other data 

message: .asciiz "Hello world 2024"

.text #this is the text section where we put our instrutions

la $a0, message #load addressof messgae into register $a0
li $v0, 4   #load immediate value 4 into register $v0
syscall # syscall for 'print a string function'