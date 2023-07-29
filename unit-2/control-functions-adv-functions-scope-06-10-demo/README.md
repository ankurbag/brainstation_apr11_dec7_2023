# JS Control Flow

JS is interpreter based
Controls the logic

## Steps to Demo

1. Lecture about conditional statements
2. Demo `if/else`, `switch`, and ternaries
   Ternary operator : ` ? :`

   var x
   if(condition) {
   // statement
   x = 5;
   // ....
   }
   else {
   //statement
   x = 4
   }
   // Modern JS
   var x = (condition) ? 5 : 4;

3. Lecture about loops
4. Demo `for` loops and `while` loops

   `for..in` --> Iterating over Keys in Object
   var student = {id : 1, name: 'Abc'};
   `We cannot use old way : for(i=0;i<len;i++)`

   ```
   for(let key in student) {
      console.log(student.key); //1 Abc
   }
   ```

   `for..of`

   - Recommendded way of iterating over any Iterables like Arrays
     var arr = [1, 2, 3]
     `We can use old way : for(i=0;i<arr.len;i++)`
     for(var elem of arr) {
     console.log(elem); // 1 2 3
     }

5. Advanced JS Functions

- OOP ---> Functional programming
  \ \

  Object Functions

- JS is Object Based Language
  == LinkedIn project
- Person / User --> Entity

  - Interactions --> Entity's behavior /methods
    For eg : posting a comment
    method : postComment()

- Functions in JS

  1. Fn a Valus
  2. Fn as Arguments
     2.1 Named function
     2.2 Anonymous
  3. Arrow Functions

  - intuitive / declarative / imperative

- Scope in JS

  - Visibility of any variable or function
  - Types :
  - Project level scope. for eg, Libraries in react
  - Global / Window
  - Local Scope

- Variable Declaration in JS
- var : old / primitive way of declating variables, it never follows scope principle
- let : declaration of variable, whose value can be re-initalized, they are block scoped
- const : declaration of variable which stoes constant data, cannot be re-initalized they are block scoped!
