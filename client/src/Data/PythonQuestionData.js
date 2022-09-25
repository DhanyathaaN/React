const PythonQuestionData = [
    {
        id: 1,
        value: "Write a python program to print hello world.",
        PreReq: ["fundamentals of computing"],
        Objective:`
        Print: Python print() function prints the message to the screen or any other standard output device.
        `,
        YouTubeLink: "https://www.youtube.com/embed/fMZelmTUWZk?rel=0&amp;showinfo=0",
        YouTubeLinkTitle:"print",
        Input:" ",
        Output:"hello world!"
    },
    {
        id: 2,
        value: "Write a python program to take input from user.",
        PreReq: ["input-output","DataTypes"],
        Objective:`Python input() function first takes the input from the user and converts it into a string. 
        The type of the returned object always will be <type ‘str’>`,
        YouTubeLink: "https://",
        Input:"Principal",
        Output:"Welcome, Principal"
    },
    {
        id: 3,
        value: `Write a python program to display the different datatypes present in python.`,
        PreReq: ["input-output","DataTypes"],
        Objective:`
        Step 1: #a int variable
                a=int(input('Enter an integer variable'))
                #b float variable
                b=float(input('Enter a float variable'))
                #c string variable
                c=input('Enter the string variable')

        Step 2: print(type(a))
                print(type(b))
                print(type(c))

        # To print the values of a,b,c
        step 3: print('The value of a is %d' %a)
                print('The value of b is %f' %b)
                print('The value of c is %s' %c)

        #Another way to print is

        Step 4: print('The value of a is '+str(a))
                print('The value of b is '+str(b))
                print('The value of c is '+c)
        `,
        YouTubeLink: "https://",
        Input:"2 , 3.5 , Ramaiah",
        Output:`<Class 'int'>, <Class 'float'>, <Class 'str'>
        The value of a is 2
        The value of b is 3.5
        The value of c is Ramaiah`
    },
    {
        id: 4,
        value: "Write a python program to prompt the user for hours and  rate per hour to compute gross pay.",
        PreReq: ["Input-Output","Operators"],
        Objective:`
        The basic Algorithm for calculating gross pay:
        Step-1 : Take user-input for number of working hours and rate per hour,
        Step-2 : Typecast the entered data into float datatype,since the calculated value of gross pay is a decimal,
        Step-3 : If there are any extra hours of work, calculate extra amount to be paid with "pay = rate * hours + (extra_rate * extra_hours)",
        Step-4 : Else calculate the gross pay with "pay = rate * hours",
        Step-5 : Print the amount to be paid.`,
        YouTubeLink: "https://www.youtube.com/embed/RGmFWu6yjC8?rel=0&amp;showinfo=0",
        Input:"working hours:35 , rate per hour: 2.75",
        Output:"Amount to be paid : 96.25"
    },
    {
        id: 5,
        value: "Write a python program to calculate the compound interest",
        PreReq: ["Input-Output","Operators"],
        Objective:`
        The basic Objective for Calculating Compound Interest is:
        Step-1 : Take user-input for principal amount, Number of times interest is compounded in a year,interest rate and number of years
        Step-2 : Typecast the entered data into Integer datatype,
        Step-3 : Calculate compound Interest with "A= p* (1 + r/n)**(n*t)", Where p,n,r,t are principal amount,
        Number of times interest is compounded in a year,interest rate and number of years respectively.
        Step-4 : Print the Compound Interest calculated.
        `,
        YouTubeLink: "https://www.youtube.com/embed/YpIkHiMm0EI?rel=0&amp;showinfo=0",
        Input:"p:1000, n:3, r:1.8, t:3 ",
        Output:"68,719.47"
    },
    {
        id: 6,
        value: `Write a Python program that allows the user to enter two integer values, and displays the results when each of the following arithmetic operators are applied. For example,
        if the user enters the values 7 and 5, the output would be,
        7 + 5 = 12
        7 - 5 = 2
        7 * 5 = 35
        7 / 5 = 1.40
        7 // 5 = 1
        7 % 5 = 2
        7 ** 5 = 16,807`,
        PreReq: ["Operators","Input-Output","Switch-Case"],
        Objective:`
        The basic Algorithm is as follows:
        Step-1 : Establish a switch case statement providing the user the access to choose one of the following operands(+,-,*,%,**,/,//),
        Step-2 : Given the operands and the operator, perform the specified operation and print the desired result.`,
        Input:"1",
        Output:"12"
    },
    {
        id: 7,
        value: `Write a Python program that allows the user to enter any integer value, and displays the value of 2 raised to that power.
        Your program should function as shown below.`,
        PreReq: ["Operators","Input-Output","pow-function"],
        Objective:`
        The main objective is as follows:
        Step-1 : The user should be asked for an input of type Integer.
        Step-2 : Use the python inbuilt pow() function raised by the value of 2 and compute the answer and print it respectfully.
        `,
        YouTubeLink: "https://www.youtube.com/embed/gQoJRDx-7I4?rel=0&amp;showinfo=0",
        Input:"5",
        Output:"32"
    },
    {
        id: 8,
        value:` Write a Python program that allows the user to enter any integer base and integer exponent,
        and displays the value of the base raised to that exponent.
        Your program should function as shown below.`,
        PreReq: ["Operators","Input-Output","pow-function"],
        Objective:`
        The main objective is as follows:
        Step-1 : The user should be asked for two inputs of type Integer, one is base and the other is exponent.
        Step-2 : Use the python inbuilt pow() function raised by the value of base to the power of exponent
        and compute the answer and print it on the console.
        `,
        YouTubeLink: "https://",
        Input:"10,4",
        Output:"10000"
    },
    {
        id: 9,
        value: `Write a python program that asks the user how many coins of various types they have,
        and then prints the total amount of money in rupees.`,
        PreReq: ["Input-Output","Operators"],
        Objective:`
        The basic alogorithm steps for the problem is as follows:
        Step-1 : The user should be asked for the counts of various coins that he/she posesses. Each of these inputs should be stored in
        different variables.
        Step-2 : Calculate the total value of the various coins using "(x*1+y*2+z*5)", where x,y,z is the number of one,two and five rupee coins
        respectively.
        Step-3 : Print the total calculated value on the console.
        `,
        YouTubeLink: "https://",
        Input:"x:1 y:4 z:2",
        Output:"19 rs"
    },
    {
        id: 10,
        value: `Write a python program to perform arithematic operations using if-else statements.`,
        PreReq: ["Operators","Input-Output","If-Else statement"],
        Objective:`
        The basic algorithm for the above problem is :
        Step-1 : Take user input for two values of operands.
        Step-2 : Take user's choice of the operation to be performed from (1:addition ,2:multiplication ,3:division, 4:subtraction),
        Step 4 : Print the desired output on the console.
        `,
        YouTubeLink: "https://",
        Input:"1 2 1",
        Output:"Addition of 1 and 2 is 3"
    },
    {
        id: 11,
        value: `Write a python program using If-Else statement to check the eligibilty to vote 
        (Age should be greater tha 18 to be allowed to vote).`,
        PreReq: ["Operators","Input-Output","If-Else statement"],
        Objective:
        `
        The basic algorithm for the above problem is :
        Step-1 : Take user input for the 'Age' variable.
        Step-2 : If the user entered Age is greater than 18 years, he/she is elligible to vote,otherwise he/she is not elligible,
        Step 4 : Print the desired message on to the console.
        `,
        YouTubeLink: "https://",
        Input:"18",
        Output:"Elligible to vote."
    },
    {
        id: 12,
        value: "Write a Python program to print the factorial of a number.",
        PreReq: ["Input-Output", "Loops"],
        Objective:`
        The factorial of a number is defined as the product of an integer and 
        all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
        The basic algorithm for the above problem is :
        Step-1 : Take the user's input for an Integer,
        Step-2 : Set the value of a integer variable i to 1 respectively;
        Step-3 : Use while loop until the value of i lesser than or equal to user's input.
        Step 4 : Print the desired output on to the console.`,
        YouTubeLink: "https://www.youtube.com/embed/6NWtoUsxVC8?rel=0&amp;showinfo=0",
        Input:"4",
        Output:"Factorial of 4 is 24."
    },
    {
        id: 13,
        value: ` Write a Python program to display all the prime numbers within an interval.
        Change the values of lower and upper for a different result.`,
        PreReq: ["Input-Output", "Loops"],
        Objective:`
        A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
        The first few prime numbers are {2, 3, 5, 7, 11, ….}.The idea to solve this problem is to iterate the val
        from start to end using a for loop and for every number, if it is greater than 1, 
        check if it divides n. If we find any other number which divides, print that value.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"2 10",
        Output:"2 3 5 7"
    },
    {
        id: 14,
        value: ` Write a Python Program to check Armstrong numbers in certain interval.`,
        PreReq: ["Input-Output", "Loops","If-Else"],
        Objective:`
        A positive integer is called an Armstrong number of order n if
        abcd... = a^n + b^n + c^n + d^n + ...
        In case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"100 2000",
        Output:"153 370 371 407 1634"
    },
    {
        id: 15,
        value: `Write a Python Program to check if a string is palindrome or not.
        `,
        PreReq: ["Input-Output", "Loops","Python-in-built-String-Functions"],
        Objective:`
        A string is said to be palindrome if the reverse of the string is the same as string.
        For example, “radar” is a palindrome, but “radix” is not a palindrome.
        The following algorithm checks for case-insensitive Strings.`,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"aIbohPhoBiA",
        Output:"It is a Palindrome."
    },
    {
        id: 16,
        value: `Write a Python script that asks a user for a number. The script adds 3 to that number.
        Then multiplies the result by 2, subtracts 4, subtracts twice the original number, adds 3, then prints the result.`,
        PreReq: ["Input-Output", "Operators"],
        Objective:`
        The basic algorithm for the above program is :
        Step-1 : Prompt the user to enter a number.
        Step-2 : Perform the operations mentioned in the problem respectively.
        Step-3 : Print the obtained result on the comsole.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"2",
        Output:"5"
    },
    {
        id: 17,
        value: `Write a program that asks users for their favorite color.
        #Create the following output (assuming "red" is the chosen color).
        #Use "+" and "*".
        redredredredredredredredredred
        red                        red
        red                        red
        redredredredredredredredredred.
        `,
        PreReq: ["Input-Output", "Loops"],
        Objective:`
        The basic algorithm for the above program is :
        Step-1 : Prompt the user to enter a colour,
        Step-2 : Perform the operations:-
        color1 = (color + " ") * 10
        color2 = color + ("    " * 8) + " " + color
        Step-3 : 
        Print color1
        print color2
        print color2
        print color1 in order.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"red",
        Output:`redredredredredredredredredred  
                red                        red
                red                        red  
                redredredredredredredredredred`
    },
    {
        id: 18,
        value: `Write a script that asks someone to input their first name, last name and phone number.
        If the user does not type at least some characters for each of these, print "Do not leave any fields empty"
        otherwise print "Thank you". (Hint: if a variable is empty, its value will be "false".)
        Change the script so that the script prints "Thank you" if either the first name or the last name or the phone number is supplied.
        Print "Do not leave all fields empty" otherwise.
        Change the script so that only first name and last name are required. The phone number is optional.`,
        PreReq: ["Input-Output", "Loops","Strings"],
        Objective:`
        The basic algorithm for the above program is :
        Step-1 : Ask the user to enter first-name,last-name and phone number respectively.
        Step-2 : Use the python .length() function to set the lower bound for the size of data to be entered.
        Step-3 : If entered correctly print "Thankyou" on the console, otherwise Prompt the user to not leave the field empty.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"Ramaiah Institute 123456789",
        Output:"Thankyou."
    },
    {
        id: 19,
        value: ` Write a program that asks a user to input a color.
        If the color is black or white, output "The color was black or white".
        If it starts with a letter that comes after "k" in the alphabet,
        output "The color starts with a letter that comes after "k" in the alphabet".
        (Optional: consider both capitalized and non-capitalized words.
        Note: the order of the alphabet in Unix and Python is: symbols, numbers, upper case letters, lower case letters.)`,
        PreReq: ["Input-Output", "Strings"],
        Objective:`
        The basic algorithm for the above program is :
        Step-1 : Prompt the user to enter a colour,
        Step-2 : Check the colour entered using (==) logical operator to determine whether the colour entered is 'black' or 'white'.
        Step-3 : If the above condition is satisfied print "The color was black or white".
        Step-4 : Else, make an array of alphabets and obtain the index of the first alphabet of the input entered using .indexOf function.
        Step-5 : If the index is greater than index of k in the array of alphabets,Print "The color starts with a letter that comes after "k" in the alphabet"
        on the console.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"red",
        Output:`The color starts with a letter that comes after "k" in the alphabet`
    },
    {
        id: 20,
        value: `Write a python program that asks a user to input a number.
        If the number equals "5", output "My lucky number".
        If the number is larger than 10, output "What a large number!".
        In all other cases, output "That's not my lucky number."`,
        PreReq: ["Input-Output", "If-Else Statements"],
        Objective:`
        The basic algorithm for the above program is :
        Step-1 : Prompt the user to enter a number
        Step-2 : If the number entered is equal to 5 print "My lucky number".
        Step-3 : Else-if the number entered is larger than 5 print "What a large number!".
        Step-4 : Else print "That's not my lucky number.".
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"5",
        Output:"My lucky number"
    },
    {
        id: 21,
        value: ` Write a program that asks five times to guess the lucky number. Use a while loop and a counter.`,
        PreReq: ["Input-Output", "Loops"],
        Objective:`
        The program asks for five guesses (no matter whether the correct number was guessed or not).
        If the correct number is guessed, the program outputs "Good guess!",
        otherwise it outputs "Try again!". After the fifth guess it stops and prints "Game over."
        break: In the previous example, insert "break" after the "Good guess!" print statement. 
        "break" will terminate the while loop so that users do not have to continue guessing after they found the number. 
        If the user does not guess the number at all print "Sorry but that was not very successful" (use "else" for this).
        Counting hits: Modify the program again. 
        This time the program continues even after the correct number was guessed but it counts how often the correct number was guessed. 
        You'll need two counters: one for the while loop and another one for the number of correct guesses. 
        After the while loop is finished, use an if statement to print either "You guessed the number ... times" or 
        "The number was not guessed at all".
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:` 1
                2
                3
                4
                5`,
        Output:`Try again!
        Try again!
        Try again!
        try again!
        Good Guess!`
    },
    {
        id: 13,
        value: ` Write a Python program to display all the prime numbers within an interval.
        Change the values of lower and upper for a different result.`,
        PreReq: ["Input-Output", "Loops"],
        Objective:`
        A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
        The first few prime numbers are {2, 3, 5, 7, 11, ….}.The idea to solve this problem is to iterate the val
        from start to end using a for loop and for every number, if it is greater than 1, 
        check if it divides n. If we find any other number which divides, print that value.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"2 10",
        Output:"2 3 5 7"
    },
    {
        id: 22,
        value: `Print all multiples of 13 that are smaller than 100.`,
        PreReq: ["Input-Output", "Loops"],
        Objective:`
        Use the range function in the following manner: range(start, end, step)
        where "start" is the starting value of the counter, "end" is the end value and
        "step" is the amount by which the counter is increased each time.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"0 100 13",
        Output:"13 26 39 52 65 78 91"
    },
    {
        id: 23,
        value: ` Write a Python program to initialize a list.Print the length of the list.Create a new list of names`,
        PreReq: ["Input-Output", "Lists"],
        Objective:`
        Lists are used to store multiple items in a single variable.
        Lists are one of 4 built-in data types
        in Python used to store collections of data, the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.
        Use the list.len() function to determine the length or the number of elements in the list.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"1 2 3 4 5",
        Output:"length of the list is 5."
    },
    {
        id: 24,
        value: ` Write a Python program Create a list of fruits and perform the following operations.
        1-insert
        2-delete
        3-append
        4-reverse
        5-change element
        6-sort`,
        PreReq: ["Input-Output", "Lists"],
        Objective:`
        Create a list with fruits as its elements. Perform operations on the list using the in-built python functions:-
        insert(),append(),sort(),reverse() respectively.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`banana apple cherry`,
        Output:`['banana','apple','cherry']
        After changing the value at 2nd position:
        ['banana','apple','coconut']
        After deleting the value at the position 1:
        ['banana','coconut']
        After inserting the value at the position 2:
        ['banana','coconut','pear']
        After appending the value to the list:
        ['banana','coconut','pear','apple']
        Sorted fruit list is:
        ['apple','banana','coconut','pear']
        Fruit list in the reverse order is:
        ['pear','coconut','banana','apple']
        `
    },
    {
        id: 25,
        value: ` Write a python program to create a list and perform append() and extend()
        operation and calculate the length of the obtained list.`,
        PreReq: ["Input-Output", "Lists"],
        Objective:`
        Step-1 : Python’s append() function inserts a single element into an existing list. The element will be added to the end of the old list rather than being returned to a new list.
        Adds its argument as a single element to the end of a list. The length of the list increases by one.
        Step-2 : extend() in Python iterates over its argument and adding each element to the list and extending the list.
        The length of the list increases by a number of elements in its argument.
        STep-3 : Use the python inbuilt list functions append(),extend() and len() function respectively and print the desires result on
        to the console.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"1 2 3 4 5",
        Output:`Initial list is
        [1,2,3,4,5]
        After appending:
        [1,2,3,4,5,[6,7,8]]        
        6
        After extending
        [1,2,3,4,5,6,7,8]
        8 
        `
    },
    {
        id: 26,
        value: `Write a python program to demonstrate list slicing`,
        PreReq: ["Input-Output", "Lists"],
        Objective:`
        In Python, list slicing is a common practice and it is the most used technique for programmers to solve efficient problems. Consider a python list,
        In-order to access a range of elements in a list, you need to slice a list. One way to do this is to use the simple slicing operator i.e. colon(:)
        With this operator, one can specify where to start the slicing, where to end, and specify the step. List slicing returns a new list from the existing list.
        Syntax:
            Lst[ Initial : End : IndexJump ]
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"a b c d e f g h",
        Output:`Initial list is
        ['a','b','c','d','e','f','g','h']
        List slicing for [1:4]
        ['b','c','d']
        
        List slicing for [3:]
        ['d','e','f','g','h']
        
        List slicing for [:5]
        ['a','b','c','d','e']
        
        List slicing for [:]
        ['a','b','c','d','e','f','g','h']`
    },
    {
        id: 27,
        value: ` Write a Python program to iterate over the list using for and while loop.`,
        PreReq: ["Input-Output", "Loops"],
        Objective:`
        With the while loop we can execute a set of statements as long as a condition is true.
        A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"Chandru Rakesh Rahul",
        Output:"Chandru Rakesh Rahul"
    },
    {
        id: 28,
        value: ` Write a Python program to perform union,intersection difference on sets and alos find the size of sets used.`,
        PreReq: ["Input-Output", "set-operations"],
        Objective:`
        Step-1 : Union of two given sets is the set which contains all the elements of both the sets.
        Step-2 : The intersection of sets returns a set that contains the similarity between two or more sets.
        The returned set contains only items that exist in both sets, or in all sets if the comparison is done with more than two sets.
        Step-3 : The difference between the sets returns a set that contains the difference between two sets.
        The returned set contains items that exist only in the first set, and not in both sets.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`A={1,2,3,4}
        B={3,4,5,6,7,8}
        `,
        Output:`
        The union of A and B is
        {1,2,3,4,5,6,7,8}
        The intersection of A and B is
        {3,4}
        The difference of A and B is
        {1,2}
        The length of A is
        4
        The length of B is
        6
        `
    },
    {
        id: 29,
        value: ` Write a Python program to initialize a dictionary and to access its values `,
        PreReq: ["Input-Output", "dictionary"],
        Objective:`
        Dictionaries are used to store data values in key:value pairs.
        It is a collection which is ordered*, changeable and do not allow duplicates.
        Dictionaries are written with curly brackets, and have keys and values
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"{'sun':78.9,'mon':67.8,'tue':65.4,'wed':66.8}",
        Output:`Temperature on sunday 
        78.9 
        Temperature on monday
        67.8`
    },
    {
        id: 30,
        value: ` Write a Python program to initialise a dictionary and perform the following operations.
        1-items()
        2-keys()
        3-get()
        4-update()`,
        PreReq: ["Input-Output", "dictionary-functions"],
        Objective:`
        Dictionaries are used to store data values in key:value pairs.
        The keys() method will return a list of all the keys in the dictionary.
        The update() method will update the dictionary with the items from the given argument.
        The argument must be a dictionary, or an iterable object with key:value pairs.
        items()	Returns a list containing a tuple for each key value pair.
        get()	Returns the value of the specified key.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:" {'Newton' : 1642, 'Darwin' : 1809, 'Turing' : 1912}",
        Output:`
        All dictionary elements
        {'Newton' : 1642, 'Darwin' : 1809, 'Turing' : 1912}
        Items() method
        dict_items([('Newton',1642),('Darwin',1800),('Turing',1912)])
        Keys() method
        dict_keys(['Newton','Darwin','Turing'])
        Get() method
        1642
        Before update the dictionary elements are
        {'Curie' : 1867, 'Hopper' : 1906,'Franklin' : 1920}
        After update the dictionary elements are
        {'Curie' : 1867, 'Hopper' : 1906,'Franklin' : 1920,'Edison':1867}
        `
    },
    {
        id: 31,
        value: `Write a Python program to combine two dictionary adding values for common keys.`,
        PreReq: ["Input-Output", "dictionaries"],
        Objective:`
        There are various ways in which Dictionaries can be merged by the use of various functions and constructors in Python.
        Here we are using counter() approach which is a subclass of dict.
        For the implementation we need to import counter from collections.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`
        d1 = {'a': 100, 'b': 200, 'c':300}
        d2 = {'a': 300, 'b': 200, 'd':400}
        `,
        Output:`
        Counter({'a': 400, 'b': 400, 'd': 400, 'c': 300})`
    },
    {
        id: 32,
        value: ` Write a Python program to create a list named kingdoms=['Bacteria', 'Protozoa', 'Chromista', 'Plantae', 'Fungi','Animalia']
        Write expressions that produce the following:
        a. The first item of kingdoms
        b. The last item of kingdoms
        c. The list ['Bacteria', 'Protozoa', 'Chromista']
        d. The list ['Chromista', 'Plantae', 'Fungi']
        e. The list ['Fungi', 'Animalia']
        `,
        PreReq: ["Input-Output", "Lists"],
        Objective:`
        Lists are used to store multiple items in a single variable.
        Lists are one of 4 built-in data types in Python used to store collections of data, 
        the other 3 are Tuple, Set, and Dictionary, all with different qualities and usage.Lists are created using square brackets
        Basic list methods:
        1.List items are indexed and you can access them by referring to the index number.
        2.You can specify a range of indexes by specifying where to start and where to end the range.
        When specifying a range, the return value will be a new list with the specified items.

        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"['Bacteria', 'Protozoa', 'Chromista', 'Plantae', 'Fungi','Animalia']",
        Output:`
        Bacteria
        Animilia
        ['Bacteria', 'Protozoa', 'Chromista']
        ['Chromista', 'Plantae', 'Fungi']
        ['Fungi', 'Animalia']

        `
    },
    {
        id: 33,
        value: `Write a Python program to initialize the following list and display all the elements using for loop.
        games=['CS','FIFA','Kabaddi','Hockey','Cricket'].
        Can you modify the above program where user can enter what elements should be in the list using input()?
        Hint: Initialize an empty list and use append method when the value for the list is entered.`,
        PreReq: ["Input-Output", "Lists"],
        Objective:`
        To add an item to the end of the list, use the append() method.
        Syntax:list.append(elmnt)
        The list can be created by initially creating an empty list and prompting the user for input() then simultaneously appending the 
        input to the list.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`
        CS
        FIFA
        Kabbadi
        Hockey
        Cricket`,
        Output:"['CS','FIFA','Kabaddi','Hockey','Cricket']"
    },
    {
        id: 34,
        value: `Write a python program that sums a series of (positive) integers entered by the user.`,
        PreReq: ["Input-Output", "Loops"],
        Objective:`
        The basic algorithm for the above problem is:
        Step-1 : Prompt the user to enter the number of positive terms to be added and store it in a variable.
        Step-2 : Initialize an empty list of size entered by the user above.
        Step-3 : Use for loop and repeatedly ask the user to enter the numbers.
        Step-4 : Initialize a variable called sum=0 and add the result produced in the previous interation to 'sum'.
        Step-5 : Print the value of sum on to the console.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`5
        1
        2
        3
        4
        5
        `,
        Output:"Sum is 15."
    },
    {
        id: 35,
        value: `Write a program that initializes a list with odd numbers and even numbers.To count how many odd numbers is in a list.
        Sum up all the even numbers in a list.`,
        PreReq: ["Input-Output", "Lists","loops"],
        Objective:`
        Count Even and Odd numbers from given list using for loop. Iterate each element in the list using for loop and check if num % 2 == 0,
        the condition to check even numbers. If the condition satisfies, then increase even count else increase odd count. 
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"[1,2,3,4,5]",
        Output:`The number of even terms: 2
                The number of odd terms: 3`
    },
    {
        id: 36,
        value: `This program demonstrates the use of dictionary for a phone book example.
        You have to write some codes as well to complete the entire working example.
        We have five functions
        1. Create a new phone book
        2. Add a new entry to the phone book
        3. Get the phone number of a particular person
        4. Get all the contacts.`,
        PreReq: ["Input-Output", "Dictionary","loops"],
        Objective:`
        The basic algorithm for the above problem is as follows:
        Step-1 : Create an empty dictionary phone_book={},
        Step-2 : Define function 'Create_Phone_Book' that has the functionality of adding name and phone number of the user respectively.
        Step-3 : Define funtions 'add_new_entry()','find_phone_number(name)','get_all_contacts()' 
        that has the functionality of adding a new entry ,finding the phone number corresponding to a name and fetching all contacts.
        Step-4 : Prompt the user for the abover options.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`
        1
        Ramaiah
        1029376152
        n
        4
        `,
        Output:`Ramaiah => 1029376152 `
    },
    {
        id: 37,
        value: `Write a program that creates the Pythagorean triples using list comprehension (x**2+y**2 = z**2)
        You can use tuple to store the triples.`,
        PreReq: ["Input-Output", "tuple","lists"],
        Objective:`
        Tuples are used to store multiple items in a single variable.
        Tuple is one of 4 built-in data types in Python used to store collections of data,the other 3 are List, Set, and Dictionary, all with different qualities and usage.
        A tuple is a collection which is ordered and unchangeable.Tuples are written with round brackets.
        For the above problem we need to create a list of tuples where each tuple holds the value of x,y,z respectively.
        This can be done in multiple ways:
        1. Using list() and tuple() methods
        we can create a list of tuples using list and tuples directly. List.append() function can be used to append the tuple to the list.
        2.Using the zip() function we can create a list of tuples from n lists.
        Syntax:list(zip(list1,list2,.,listn)
        Prompt the user to enter the range up until which the pythagorean triplets must be specified.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"17",
        Output:`[(3, 4, 5), (5, 12, 13), (6, 8, 10), (8, 15, 17), (9, 12, 15)]`
    },
    {
        id: 38,
        value: `Write a python program to create a dictionary state and their capitals and print capital for the given state.`,
        PreReq: ["Input-Output", "dictionary"],
        Objective:`
        Dictionaries are used to store data values in key:value pairs.A dictionary is a collection which is ordered, changeable and do not allow duplicates.
        You can access the items of a dictionary by referring to its key name, inside square brackets.
        Since in the above problem, we need to access capitals which is the key of the dictionary, keys() method can be used.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"{'karnataka':'Bangalore','Andhra Pradesh':'Amaravati'}",
        Output:`dict_keys(['Bangalore','Amaravati'])`
    },
    {
        id: 39,
        value: `Write a program to Implement a stack and queue using lists`,
        PreReq: ["Input-Output", "Lists","Stacks-Queues"],
        Objective:`
        1) Stack Using list:
        Stack works on the principle of “Last-in, first-out”. Also, the inbuilt functions in Python make the code short and simple.
        To add an item to the top of the list, i.e., to push an item, we use append() 
        function and to pop out an element we use pop() function. These functions work quiet efficiently and fast in end operations.
        2) Queue Using List:
        Queue works on the principle of “First-in, first-out”. We use pop(0) to remove the first item from a list.

        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`["Ram", "Tarun", "Asif", "John"]`,
        Output:`
        deque(['Ram', 'Tarun', 'Asif', 'John', 'Akbar'])
        Ram
        `
    },
    {
        id: 40,
        value: `Write a Python program to count the number of strings where the string length is 2
        or more and the first and last character are same from a given list of strings.`,
        PreReq: ["Input-Output", "Strings","Conditional statements"],
        Objective:`
        Algorithm for the above problem:
        def match_words(words):
            ctr <-- 0
            for word in words:
                if len(word) > 1 and word[0] == word[-1]:
                    increment ctr by 1
                    return ctr 
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"['abc', 'xyz', 'aba', '1221']",
        Output:`2`
    },
    {
        id: 41,
        value: `Write a Python program to remove duplicates from a list.`,
        PreReq: ["Input-Output", "Lists","loops"],
        Objective:`
        Different approaches the the above problem is:
        Method 1: Using set() 
        This is the fastest and smallest method to achieve a particular task. 
        It first removes the duplicates and returns a dictionary which has to be converted to list. 
        Method 2: Using list comprehension 
        This method has working similarly to the above method, 
        but this is just a one-liner shorthand of a longer method done with the help of list comprehension.  
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"[10,20,30,20,10,50,60,40,80,50,40]",
        Output:`[40, 10, 80, 50, 20, 60, 30]`
    },
    {
        id: 42,
        value: `Write a Python function that takes two lists and returns True if they have at least one common member.`,
        PreReq: ["Input-Output", "Lists","loops"],
        Objective:`
        Algorithm for the above:
        Using traversal in two lists, we can check if there exists one common element at least in them. While traversing two lists if we find one element to be common in them, 
        then we return true. After complete traversal and checking, if no elements are same, then we return false.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`a = [1, 2, 3, 4, 5]
               b = [5, 6, 7, 8, 9]`,
        Output:`True`
    },
    {
        id: 43,
        value: `Write a Python script to concatenate following dictionaries to create a new one.`,
        PreReq: ["Input-Output", "dictionary"],
        Objective:`
        Algorithm for the above problem is as follows:
        1. Declare and initialize two dictionaries with some key-value pairs
        2. Use the update() function to add the key-value pair from the second dictionary to the first dictionary.
        3. Print the final dictionary.
        4. Exit. 
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`dic1={1:10, 2:20}
        dic2={3:30, 4:40}
        dic3={5:50,6:60}`,
        Output:`Result : {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}`
    },
    {
        id: 44,
        value: `Write a Python script to check if a given key already exists in a dictionary.`,
        PreReq: ["Input-Output", "dictionary"],
        Objective:`
        1.define a function is_key_present with 'x" the key to be searched
        2.Use conditional statements to print appropraiate messages
        3.def is_key_present(x):
        4.add conditional ststement to check whether a key is present or not
        5.call the is_key_present function with parameters 5 and 9
`,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"[1,2,3,4,5]",
        Output:`Key is present in the dictionary                                                                              
                Key is not present in the dictionary`
    },
    {
        id: 45,
        value: `Write a Python program to sort a dictionary by key.`,
        PreReq: ["Input-Output", "Lists","loops"],
        Objective:`
        1.Use dict.items() to get a list of tuple pairs from d and sort it using sorted().
        2.Use dict() to convert the sorted list back to a dictionary.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`color_dict = {'red':'#FF0000',
                            'green':'#008000',
                            'black':'#000000',
                            'white':'#FFFFFF'}`,
        Output:`black: #000000                                                                                                
                green: #008000                                                                                                
                red: #FF0000                                                                                                  
                white: #FFFFFF `
    },
    {
        id: 46,
        value: `Write a python program that returns the maximum of two numbers.`,
        PreReq: ["Input-Output", "Conditional-statemnents"],
        Objective:`
        Algorithm for the above problem is:
        Step-1 : define a function called maximum(a, b) that returns maximum of the two numbers.
        Step-2 : If a >= b,return a
        Step-3 : else,return b
        
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"4,5",
        Output:`largest is 5`
    },
    {
        id: 47,
        value: `Write a program to demonstrate the scope of the variable.`,
        PreReq: ["Scope-of-variable"],
        Objective:`
        A variable is only available from inside the region it is created. This is called scope.
        Local Scope:
        A variable created inside a function belongs to the local scope of that function, and can only be used inside that function.
        Global Scope
        A variable created in the main body of the Python code is a global variable and belongs to the global scope.
        Global variables are available from within any scope, global and local.`,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`Local x is: 50
        Changed local x to: 2
        X is still: 50
        Y is: 50
        Changed y to: 2
        Value of y is: 2
        `
    },
    {
        id: 48,
        value: `Write a program to demonstrate default arguments.`,
        PreReq: ["Input-Output","basics-of-python"],
        Objective:`
        Python has a different way of representing syntax and default values for function arguments. Default values indicate that the function argument will take that value if no argument value 
        is passed during the function call. The default value is assigned by using the assignment(=) operator of the form keywordname=value.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`No change in the default arguments
        width: 1 	height: 2 	area: 2
        Default argument for change in width
        width: 1.2 	height: 2 	area: 2.4
        Default argument for change in height
        width: 1 	height: 6.2 	area: 6.2`
    },
    {
        id: 49,
        value: `Write a program to demonstrate keyword argument in python.`,
        PreReq: ["Input-Output","basics-of-python"],
        Objective:`
        Keyword arguments (or named arguments) are values that, when passed into a function, are identifiable by specific parameter names. A keyword argument is preceded by a parameter and the assignment operator, = .
        Keyword arguments can be likened to dictionaries in that they map a value to a keyword.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`a is: 3 b is: 7 c is: 10
        a is: 25 b is: 5 c is: 24
        a is: 100 b is: 5 c is: 50`
    },
    {
        id: 50,
        value: `Write a program to demonstrate variable argument in python.`,
        PreReq: ["Input-Output", "Lists","loops"],
        Objective:`
        What is Python *args ?
        The special syntax *args in function definitions in python is used to pass a variable number of arguments to a function. 
        It is used to pass a non-key worded, variable-length argument list.  
        What is Python **kwargs
        The special syntax **kwargs in function definitions in python is used to pass a keyworded, variable-length argument list. We use the name kwargs with the double star. 
        The reason is that the double star allows us to pass through keyword arguments (and any number of them).
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`First time
        10
        (1, 2, 3)
        {'vegetables': 50, 'fruits': 100}
        Second time
        10
        (1, 2)
        {'vegetables': 50}
        10
        (1,)
        {'vegetables': 50}
        10
        (1, 2, 3, 4, 5, 6, 7)
        {'vegetables': 50, 'fruits': 20, 'gro': 78}`
    },
    {
        id: 51,
        value: `Write a python program to demonstrate keyword only argument.`,
        PreReq: ["basics of python"],
        Objective:`
        Keyword-only arguments are another attribute of Python functions that have been available since Python 3.0. These arguments are specified using the '*' marker.
        They prompt the user to state the keyword used in the already defined function when making a call to the same function.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`10
        (1, 2, 3)
        50
        10
        (1, 2)
        3`
    },
    {
        id: 52,
        value: `Write a python program to return the grade given marks of student.`,
        PreReq: ["if-else statement"],
        Objective:`
        To calculate grade of students in python, you have to ask from user to enter marks obtained in 5 subjects. Now calculate 
        the sum of all the marks and then calculate the average marks to find the grade according to the average marks obtained by student 
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"56",
        Output:`The grade is F`
    },
    {
        id: 53,
        value: `Write a python program to sort two numbers in ascending order.`,
        PreReq: ["if-else statement"],
        Objective:`
        The easiest way to sort is with the sorted(list) function, which takes a list and returns a new list with those elements in sorted order. The original list is not changed. 
        It's most common to pass a list into the sorted() function, but in fact it can take as input any sort of iterable collection.
        However, it can also be done using if else statement.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`n1 is 2
        n2 is 3`
    },
    {
        id: 54,
        value: `Write a program to demonstrate list copying in python.`,
        PreReq: ["lists"],
        Objective:`
        You cannot copy a list simply by typing list2 = list1, 
        because: list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2.
        There are ways to make a copy, one way is to use the built-in List method copy().
        Another way to make a copy is to use the built-in method list().`,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`Simple assignment
        shoplist is: ['mango', 'carrot', 'banana']
        Mylist is: ['mango', 'carrot', 'banana']
        copy by making a full slice
        shoplist is: ['mango', 'carrot', 'banana']
        Mylist is: ['carrot', 'banana']`
    },
    {
        id: 55,
        value: `Write a python program to demonstrate pass-by-reference.`,
        PreReq: ["functions in python"],
        Objective:`
        Pass-means to provide an argument to a function.
        By reference-means that the argument you're passing to the function is a 
        reference to a variable that already exists in memory rather than an independent copy of that variable.
       `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`Values inside the function [5, 6, 7, 8, [1, 2, 3, 4]]
        Values outside the fi=unction [5, 6, 7, 8, [1, 2, 3, 4]]`
    },
    {
        id: 56,
        value: `Write a python program to demonstrate overidden-reference`,
        PreReq: ["if-else statement"],
        Objective:`
        Pass-means to provide an argument to a function.
        By reference-means that the argument you're passing to the function is a 
        reference to a variable that already exists in memory rather than an independent copy of that variable.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`Values inside the function [1, 2, 3, 4]
        Values outside the fi=unction [10, 20, 30]`
    },
    {
        id: 57,
        value: `Define a function max_of_three() that takes three numbers as arguments
        and returns the largest of them using "default arguments.`,
        PreReq: ["if-else statement"],
        Objective:`
        Algorithm: To find the largest number with 3 numbers
        Step 1-start
        Step 2- define max function
        Step 3- In max function read a, b, c
        Step 4- check the condition a>b and a>c
        Step 5- If the condition is true return a
        Step 6- Otherwise check the condition b>c
        Step 7- If the condition is true return b Otherwise return c
        Step 8- declare the variables a,b,c, and read them.
        Step 9- Print the largest of three numbers.
        Step 10- End Program.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`largest of three numbers= 33`
    },
    {
        id: 58,
        value: `Define a function sum() and a function multiply()
        that sums and multiplies (respectively) all the numbers in a list of numbers.`,
        PreReq: ["functions in python"],
        Objective:`
        step-1 : define a function sum(inList)
        Step-2 : Initialize a new varaible result = 0
        Step-3 : for i in inList:
                   result = result + i
        Step-4 : return result on to the console
        do similarly for product where result = result*i instead. `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"1 2 3 4",
        Output:`sum : 10
        product : 24`
    },
    {
        id: 59,
        value: `Define a function generate_n_chars() that takes an integer n and a character c and returns a string, n characters long.`,
        PreReq: ["functions in python"],
        Objective:`
        Step-1 : Define a function called generate_n_chars(n, str):
        Step-2 : Initialize result = "",an empty string
        Step-3 : for x in range(n):
                    result = result+str
        Step-4 : return result
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`xxxxx
        **********
        HelloHello`
    },
    {
        id: 60,
        value: `Write a python program to define a procedure histogram() that takes a list of integers and prints a histogram to the screen.`,
        PreReq: ["functions in python"],
        Objective:`
        Step-1 : define a function histogram(items)
        Step-2 : for n in items:
                 Initilaize a new variable output = '',an empty string
        Step-3 : initialize another variable times = n
        Step-4 : while the value of times > 0 
                   output = output + '*'
        Step-5 : decrement times by 1
        Step-6 : print the output

        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"[4,9,7",
        Output:`**** 
        ********* 
        *******
        `
    },
    {
        id: 61,
        value: `Write a python program to perform binary search.`,
        PreReq: ["if-else statement","searching algorithm"],
        Objective:`
        In a nutshell, this search algorithm takes advantage of a collection of elements that is already sorted by ignoring half of the elements after just one comparison. 
        Compare x with the middle element.
        If x matches with the middle element, we return the mid index.
        Else if x is greater than the mid element, then x can only lie in the right (greater) half subarray after the mid element. Then we apply the algorithm again for the right half.
        Else if x is smaller, the target x must lie in the left (lower) half. So we apply the algorithm for the left half.`,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:`
        Elements:
        1
        2
        3
        4
        key:
        2
        `,
        Output:`element found`
    },
    {
        id: 62,
        value: `Write a python program to perform operations on strings.`,
        PreReq: ["strings"],
        Objective:`
        In Python, individual characters of a String can be accessed by using the method of Indexing. Indexing allows negative address references to access characters from the back of the String, e.g. -1 refers to the last character, -2 refers to the second last character, and so on. 
        While accessing an index out of the range will cause an IndexError. 
        Only Integers are allowed to be passed as an index, float or other types that will cause a TypeError.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`The index operator on the string can be used as
        The 3rd character in Hello World! is
        l
        The 3rd character of Python Programming is 
        The last character of Hello World! is
        !
        The last character of Python Programming is 
        Concatenation of two strings is
        Hello World!Python Programming
        Use of * operator
        Use of in operator
        Use of slicing operator
        My name is: hari and age is: 27`
    },
    {
        id:63,
        value: `Write a python program to demonstrate isalnum(),isdigit(),isalpha().`,
        PreReq: ["basics of python"],
        Objective:`
        The isalpha() method returns True if all the characters are alphabet letters (a-z).
        Example of characters that are not alphabet letters: (space)!#%&? etc.
        The isdigit() method returns True if all the characters are digits, otherwise False.
        Exponents, like ², are also considered to be a digit.
        The isalnum() method returns True if all the characters are alphanumeric, meaning alphabet letter (a-z) and numbers (0-9).
        Example of characters that are not alphanumeric: (space)!#%&? etc.`,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`Checking whether string is alphanumeric
        False
        Checking whether string contains alphabets
        True
        Checking whether string is a digit
        True`
    },
    {
        id: 64,
        value: `Write a python program to search substrings in a given string`,
        PreReq: ["String methods"],
        Objective:`
        Python String find() method returns the lowest index or first occurrence of 
        the substring if it is found in a given string. If it is not found, then it returns -1.
        Syntax: str_obj.find(sub, start, end)
        Parameters: 
        sub: Substring that needs to be searched in the given string. 
        start (optional): Starting position where the substring needs to be checked within the string. 
        end (optional): End position is the index of the last value for the specified range. It is excluded while checking.
        The endswith() method returns True if the string ends with the specified value, otherwise False. 
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`Usage of endswith()
        True
        Usage of startswith()
        True
        Usage of count()
        3
        Usage of find()
        15`
    },
    {
        id: 65,
        value: `Write a python program to demonstrate string conversion.`,
        PreReq: ["string methods"],
        Objective:`
        In Python, isupper() is a built-in method used for string handling. 
        This method returns True if all characters in the string are uppercase, otherwise, returns “False”. 
        In Python, islower() is a built-in method used for string handling. 
        The islower() method returns True if all characters in the string are lowercase, otherwise, returns “False”. 
        In Python, lower() is a built-in method used for string handling. The lower() method returns the lowercased string from the given string. 
        It converts all uppercase characters to lowercase. If no uppercase characters exist, it returns the original string. 
        In Python, upper() is a built-in method used for string handling. The upper() method returns the uppercased string from the given string. 
        It converts all lowercase characters to uppercase. If no lowercase characters exist, it returns the original string. 
        Python String capitalize() method returns a copy of the original string and converts the first character of the string to a capital (uppercase) letter,
         while making all other characters in the string lowercase letters.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`Usage of capitalize
        Welcome to python
        Usage of title()
        Welcome To Python
        Usage of upper
        NEW ENGLAND
        Usage of lower
        new england
        Usage of swapcase
        nEW eNGLAND
        Usage of replace
        New Heaven`
    },
    {
        id: 66,
        value: `Write a python program to remove the white spaces using the strip() function.`,
        PreReq: ["String functions"],
        Objective:`
        The strip() method removes any leading (spaces at the beginning) and trailing (spaces at the end) characters (space is the default leading character to remove)
        Syntax
        string.strip(characters)
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`After removing leading whitespaces
        Welcome to Python	
        After removing trailing whitespaces
         Welcome to Python
        After removing leading and trailing whitespaces
        Welcome to Python`
    },
    {
        id: 67,
        value: `Write a python program to demonstrate eval() function.`,
        PreReq: ["Basics of python"],
        Objective:`
        The eval() method parses the expression passed to this method and runs python expression (code) within the program.
        The syntax of eval() is:
        eval(expression, globals=None, locals=None)
        The eval() function takes three parameters:
        expression - the string parsed and evaluated as a Python expression
        globals (optional) - a dictionary
        locals (optional)- a mapping object. Dictionary is the standard and commonly used mapping type in Python.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"7",
        Output:`
        7
        8`
    },
    {
        id: 68,
        value: `Write a python program to perform string concatenation.`,
        PreReq: ["Strings"],
        Objective:`
        Two strings can be concatenated in Python by simply using the '+' operator between them.
        More than two strings can be concatenated using '+' operator.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"hello world",
        Output:`The strings are initialized as follows
        hello
        world
        The concatenation of two strings are
        helloworld
        `
    },
    {
        id: 69,
        value: `Write a function char_freq() that takes a string and builds a frequency listing of the characters contained in it.
        Represent the frequency listing as a Python dictionary`,
        PreReq: ["Input-Output","loops"],
        Objective:`
        Given a string, the task is to find the frequencies of all the characters in that 
        string and return a dictionary with key as the character and its value as its frequency in the given string.
        Simply iterate through the string and form a key in dictionary of newly 
        occurred element or if element is already occurred, increase its value by 1.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"geeksforgeeks",
        Output:`{'r': 1, 'e': 4, 'k': 2, 'G': 2, 's': 2, 'f': 1, 'o': 1}`
    },
    {
        id: 70,
        value: `define a function "make_3sg_form()" which given a verb in infinitive form returns its third person singular form.`,
        PreReq: ["third-person-singular-verb"],
        Objective:`
        The third person singular verb form in English is distinguished by the suffix -s,
        which is added to the stem of the infinitive form: "run->runs".
        A simple set of rules can be given as follows:
        If the verb ends in "y", remove it and add "ies"
        If the verb ends in "o, ch, s, sh, x or z," add "es"
        By default just add "s"
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"bush",
        Output:`bushes`
    },
    {
        id: 71,
        value: `Write a python program to reverse a string.`,
        PreReq: ["String functions"],
        Objective:`
        Python string library doesn’t support the in-built “reverse()” as done by other python containers like list, 
        hence knowing other methods to reverse string can prove to be useful.
        Extended slice offers to put a “step” field as [start, stop, step], and giving no field as start and stop indicates default to 0 and string length respectively, and “-1” 
        denotes starting from the end and stop at the start, hence reversing a string. 
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"123abcd",
        Output:`dcba321`
    },
    {
        id: 72,
        value: `Write a Python function that takes a list and returns a new list with unique elements of the first list.`,
        PreReq: ["lists"],
        Objective:`
        1. define a user defined function named unique_list(l)
        2. Initialize an empty list x = []
        3. iterate through-for a in l:
        4. check for the following condition, if a not in x:
        5. use the append() function,x.append(a)
        6. return x

        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"[1,2,3,3,3,3,4,5]",
        Output:`[1,2,3,4,5]`
    },
    {
        id: 73,
        value: `Write a Python program that accepts a hyphen-separated sequence of words as input
        and prints the words in a hyphen-separated sequence after sorting them alphabetically.`,
        PreReq: ["Strings"],
        Objective:`
        Algorithm:
        items=[n for n in input().split('-')]
        items.sort()
        print('-'.join(items))
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"green-red-black-white",
        Output:`black-green-red-white `
    },
    {
        id: 74,
        value: `Write a Python program to get a string from a given string where all occurrences of its first char have been changed to '$', except the first char itself.`,
        PreReq: ["String functions"],
        Objective:`
        1. define a user defined fucntion change_char(str1).
        2. initialize char = str1[0]
        3. perform str1 = str1.replace(char, '$')
           str1 = char + str1[1:]
        4. return str1
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"restart",
        Output:`resta$t`
    },
    {
        id: 75,
        value: `Write a python program to demonstrate opening a file.`,
        PreReq: ["Python-Files"],
        Objective:`
        Python too supports file handling and allows users to handle files i.e., to read and write files, along with many other file handling options, to operate on files. The concept of file handling has stretched over various other languages, but the implementation is either complicated or lengthy, but like other concepts of Python, this concept here is also easy and short. Python treats files differently as text or binary and this is important. Each line of code includes a sequence of characters and they form a text file. Each line of a file is terminated with a special character, called the EOL or End of Line characters like comma {,}
        or newline character. It ends the current line and tells the interpreter a new one has begun. 
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`My first file written from Python
        ---------------------------------
        Hello, world!`
    },
    {
        id: 76,
        value: `Write a python program to demonstrate read a file`,
        PreReq: ["Python-Files"],
        Objective:`
        Python too supports file handling and allows users to handle files i.e., to read and write files, along with many other file handling options, to operate on files. The concept of file handling has stretched over various other languages, but the implementation is either complicated or lengthy, but like other concepts of Python, this concept here is also easy and short. Python treats files differently as text or binary and this is important. Each line of code includes a sequence of characters and they form a text file. Each line of a file is terminated with a special character, called the EOL or End of Line characters like comma {,}
        or newline character. It ends the current line and tells the interpreter a new one has begun. 
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`The file contents are
        I am studying in Ramaiah.
        The first 10 characters in the file are
        iamstudying
        `
    },
    {
        id: 77,
        value: `Python program demonstrating the readlines() operation on a file.`,
        PreReq: ["Python-Files"],
        Objective:`
        Before performing any operation on the file like reading or writing, first, we have to open that file. For this, we should use Python’s inbuilt function open() but at the time of opening, we have to specify the mode, which represents the purpose of the opening file.
            f = open(filename, mode)
                Where the following mode is supported:

                    r: open an existing file for a read operation.
                    w: open an existing file for a write operation. If the file already contains some data then it will be overridden.
                    a:  open an existing file for append operation. It won’t override existing data.
                    r+:  To read and write data into the file. The previous data in the file will be overridden.
                    w+: To write and read data. It will override existing data.
                    a+: To append and read data from the file. It won’t override existing data.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`The file contents are in the form of list
        The contents inside the list are
        ['Hello! Welcome to demofile.txt\n', 'This file is for testing purposes.\n']
        `
    },
    {
        id: 78,
        value: `Write a python program to sort two numbers in ascending order.`,
        PreReq: ["if-else statement"],
        Objective:`
        The easiest way to sort is with the sorted(list) function, which takes a list and returns a new list with those elements in sorted order. The original list is not changed. 
        It's most common to pass a list into the sorted() function, but in fact it can take as input any sort of iterable collection.
        However, it can also be done using if else statement.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`n1 is 2
        n2 is 3`
    },
    {
        id: 53,
        value: `Write a python program to sort two numbers in ascending order.`,
        PreReq: ["if-else statement"],
        Objective:`
        The easiest way to sort is with the sorted(list) function, which takes a list and returns a new list with those elements in sorted order. The original list is not changed. 
        It's most common to pass a list into the sorted() function, but in fact it can take as input any sort of iterable collection.
        However, it can also be done using if else statement.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`n1 is 2
        n2 is 3`
    },
    {
        id: 53,
        value: `Write a python program to sort two numbers in ascending order.`,
        PreReq: ["if-else statement"],
        Objective:`
        The easiest way to sort is with the sorted(list) function, which takes a list and returns a new list with those elements in sorted order. The original list is not changed. 
        It's most common to pass a list into the sorted() function, but in fact it can take as input any sort of iterable collection.
        However, it can also be done using if else statement.
        `,
        YouTubeLink: "https://www.youtube.com/embed/9HajSeGP1Pc?rel=0&amp;showinfo=0",
        Input:"",
        Output:`n1 is 2
        n2 is 3`
    },

]
    
    
    export default PythonQuestionData;