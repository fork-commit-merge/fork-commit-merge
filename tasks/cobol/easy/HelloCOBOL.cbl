       IDENTIFICATION DIVISION.
       PROGRAM-ID. HelloCOBOL.
       AUTHOR. Fork, Commit, Merge.

       * This is a simple program to print "Hello, COBOL!" to the console.

       DATA DIVISION.
       WORKING-STORAGE SECTION.
       01 WS-MESSAGE PIC X(20) VALUE 'Hello, COBOL!'.

       PROCEDURE DIVISION.
           DISPLAY WS-MESSAGE.
           STOP RUN.
