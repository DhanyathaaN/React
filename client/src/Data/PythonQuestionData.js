const PythonQuestionData = [
    {
        id: 1,
        value: "Write a python program to print hello world.",
        PreReq:["Input-Output"],
        Objective:`
        Print: Python print() function prints the message to the screen or any other standard output device.
        `,
        YouTubeLink: "",
        YouTubeLinkTitle:"print",
        Input:"",
        Output:"hello world!"
    },
    {
        id: 2,
        value: "Write a python program to take input from user.",
        PreReq: ["Input-Output","DataTypes"],
        Objective:`Python input() function first takes the input from the user and converts it into a string. 
        The type of the returned object always will be <type ‘str’>`,
        YouTubeLink: "",
        Input:"Principal",
        Output:"Welcome, Principal"
    },
    {
        id: 3,
        value: `Write a python program to display the different datatypes present in python.`,
        PreReq: ["Input-Output","DataTypes"],
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
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        PreReq: ["Operators","Input-Output",],
        Objective:`
        The basic Algorithm is as follows:
        Step-1 : Establish a switch case statement providing the user the access to choose one of the following operands(+,-,*,%,**,/,//),
        Step-2 : Given the operands and the operator, perform the specified operation and print the desired result.`,
        YouTubeLink: "",
        Input:"1",
        Output:"12"
    },
    {
        id: 7,
        value: `Write a Python program that allows the user to enter any integer value, and displays the value of 2 raised to that power.
        Your program should function as shown below.`,
        PreReq: ["Operators","Input-Output",],
        Objective:`
        The main objective is as follows:
        Step-1 : The user should be asked for an input of type Integer.
        Step-2 : Use the python inbuilt pow() function raised by the value of 2 and compute the answer and print it respectfully.
        `,
        YouTubeLink: "",
        Input:"5",
        Output:"32"
    },
    {
        id: 8,
        value:` Write a Python program that allows the user to enter any integer base and integer exponent,
        and displays the value of the base raised to that exponent.
        Your program should function as shown below.`,
        PreReq: ["Operators","Input-Output",],
        Objective:`
        The main objective is as follows:
        Step-1 : The user should be asked for two inputs of type Integer, one is base and the other is exponent.
        Step-2 : Use the python inbuilt pow() function raised by the value of base to the power of exponent
        and compute the answer and print it on the console.
        `,
        YouTubeLink: "",
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
        YouTubeLink: "",
        Input:"x:1 y:4 z:2",
        Output:"19 rs"
    },
    {
        id: 10,
        value: `Write a python program to perform arithematic operations using if-else statements.`,
        PreReq: ["Operators","Input-Output","FlowControl"],
        Objective:`
        The basic algorithm for the above problem is :
        Step-1 : Take user input for two values of operands.
        Step-2 : Take user's choice of the operation to be performed from (1:addition ,2:multiplication ,3:division, 4:subtraction),
        Step 4 : Print the desired output on the console.
        `,
        YouTubeLink: "",
        Input:"1 2 1",
        Output:"Addition of 1 and 2 is 3"
    },
    {
        id: 11,
        value: `Write a python program using if-else to check the eligibilty to vote 
        (Age should be greater tha 18 to be allowed to vote).`,
        PreReq: ["Operators","Input-Output","FlowControl"],
        Objective:
        `
        The basic algorithm for the above problem is :
        Step-1 : Take user input for the 'Age' variable.
        Step-2 : If the user entered Age is greater than 18 years, he/she is elligible to vote,otherwise he/she is not elligible,
        Step 4 : Print the desired message on to the console.
        `,
        YouTubeLink: "",
        Input:"18",
        Output:"Elligible to vote."
    },
    {
        id: 12,
        value: "Write a Python program to print the factorial of a number.",
        PreReq: ["Input-Output", "FlowControl"],
        Objective:`
        The factorial of a number is defined as the product of an integer and 
        all the integers below it; e.g. factorial four ( 4! ) is equal to 24.
        The basic algorithm for the above problem is :
        Step-1 : Take the user's input for an Integer,
        Step-2 : Set the value of a integer variable i to 1 respectively;
        Step-3 : Use while loop until the value of i lesser than or equal to user's input.
        Step 4 : Print the desired output on to the console.`,
        YouTubeLink: "",
        Input:"4",
        Output:"Factorial of 4 is 24."
    },
    {
        id: 13,
        value: ` Write a Python program to display all the prime numbers within an interval.
        Change the values of lower and upper for a different result.`,
        PreReq: ["Input-Output", "FlowControl"],
        Objective:`
        A prime number is a natural number greater than 1 that has no positive divisors other than 1 and itself. 
        The first few prime numbers are {2, 3, 5, 7, 11, ….}.The idea to solve this problem is to iterate the val
        from start to end using a for loop and for every number, if it is greater than 1, 
        check if it divides n. If we find any other number which divides, print that value.
        `,
        YouTubeLink: "",
        Input:"2 10",
        Output:"2 3 5 7"
    },
    {
        id: 14,
        value: ` Write a Python Program to check Armstrong numbers in certain interval.`,
        PreReq: ["Input-Output", "FlowControl"],
        Objective:`
        A positive integer is called an Armstrong number of order n if
        abcd... = a^n + b^n + c^n + d^n + ...
        In case of an Armstrong number of 3 digits, the sum of cubes of each digit is equal to the number itself.
        `,
        YouTubeLink: "",
        Input:"100 2000",
        Output:"153 370 371 407 1634"
    },
    {
        id: 15,
        value: `Write a Python Program to check if a string is palindrome or not.
        `,
        PreReq: ["Input-Output", "FlowControl","String"],
        Objective:`
        A string is said to be palindrome if the reverse of the string is the same as string.
        For example, “radar” is a palindrome, but “radix” is not a palindrome.
        The following algorithm checks for case-insensitive Strings.`,
        YouTubeLink: "",
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
        YouTubeLink: "",
        Input:"2",
        Output:"5"
    },
    {
        id: 17,
        value: `Write a program that asks users for their favorite color.
        Create the following output (assuming "red" is the chosen color).
        Use "+" and "*".
        redredredredredredredredredred
        red                        red
        red                        red
        redredredredredredredredredred.
        `,
        PreReq: ["Input-Output", "FlowControl"],
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
        YouTubeLink: "",
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
        PreReq: ["Input-Output", "FlowControl","Strings"],
        Objective:`
        The basic algorithm for the above program is :
        Step-1 : Ask the user to enter first-name,last-name and phone number respectively.
        Step-2 : Use the python .length() function to set the lower bound for the size of data to be entered.
        Step-3 : If entered correctly print "Thankyou" on the console, otherwise Prompt the user to not leave the field empty.
        `,
        YouTubeLink: "",
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
        YouTubeLink: "",
        Input:"red",
        Output:`The color starts with a letter that comes after "k" in the alphabet`
    },
    {
        id: 20,
        value: `Write a python program that asks a user to input a number.
        If the number equals "5", output "My lucky number".
        If the number is larger than 10, output "What a large number!".
        In all other cases, output "That's not my lucky number."`,
        PreReq: ["Input-Output", "FlowControls"],
        Objective:`
        The basic algorithm for the above program is :
        Step-1 : Prompt the user to enter a number
        Step-2 : If the number entered is equal to 5 print "My lucky number".
        Step-3 : Else-if the number entered is larger than 5 print "What a large number!".
        Step-4 : Else print "That's not my lucky number.".
        `,
        YouTubeLink: "",
        Input:"5",
        Output:"My lucky number"
    },
    {
        id: 21,
        value: ` Write a program that asks five times to guess the lucky number. Use a while loop and a counter.`,
        PreReq: ["Input-Output", "FlowControl"],
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
        YouTubeLink: "",
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
        id: 22,
        value: `Print all multiples of 13 that are smaller than 100.`,
        PreReq: ["Input-Output", "FlowControl"],
        Objective:`
        Use the range function in the following manner: range(start, end, step)
        where "start" is the starting value of the counter, "end" is the end value and
        "step" is the amount by which the counter is increased each time.
        `,
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        PreReq: ["Input-Output", "FlowControl"],
        Objective:`
        With the while loop we can execute a set of statements as long as a condition is true.
        A for loop is used for iterating over a sequence (that is either a list, a tuple, a dictionary, a set, or a string).
        `,
        YouTubeLink: "",
        Input:"Chandru Rakesh Rahul",
        Output:"Chandru Rakesh Rahul"
    },
    {
        id: 28,
        value: ` Write a Python program to perform union,intersection difference on sets and alos find the size of sets used.`,
        PreReq: ["Input-Output"],
        Objective:`
        Step-1 : Union of two given sets is the set which contains all the elements of both the sets.
        Step-2 : The intersection of sets returns a set that contains the similarity between two or more sets.
        The returned set contains only items that exist in both sets, or in all sets if the comparison is done with more than two sets.
        Step-3 : The difference between the sets returns a set that contains the difference between two sets.
        The returned set contains items that exist only in the first set, and not in both sets.
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output", "Dictionary"],
        Objective:`
        Dictionaries are used to store data values in key:value pairs.
        It is a collection which is ordered*, changeable and do not allow duplicates.
        Dictionaries are written with curly brackets, and have keys and values
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output", "Dictionary"],
        Objective:`
        Dictionaries are used to store data values in key:value pairs.
        The keys() method will return a list of all the keys in the dictionary.
        The update() method will update the dictionary with the items from the given argument.
        The argument must be a dictionary, or an iterable object with key:value pairs.
        items()	Returns a list containing a tuple for each key value pair.
        get()	Returns the value of the specified key.
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output", "Dictionary"],
        Objective:`
        There are various ways in which Dictionaries can be merged by the use of various functions and constructors in Python.
        Here we are using counter() approach which is a subclass of dict.
        For the implementation we need to import counter from collections.
        `,
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        PreReq: ["Input-Output", "FlowControl"],
        Objective:`
        The basic algorithm for the above problem is:
        Step-1 : Prompt the user to enter the number of positive terms to be added and store it in a variable.
        Step-2 : Initialize an empty list of size entered by the user above.
        Step-3 : Use for loop and repeatedly ask the user to enter the numbers.
        Step-4 : Initialize a variable called sum=0 and add the result produced in the previous interation to 'sum'.
        Step-5 : Print the value of sum on to the console.
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output", "Lists","FlowControl"],
        Objective:`
        Count Even and Odd numbers from given list using for loop. Iterate each element in the list using for loop and check if num % 2 == 0,
        the condition to check even numbers. If the condition satisfies, then increase even count else increase odd count. 
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output", "Dictionary","FlowControl"],
        Objective:`
        The basic algorithm for the above problem is as follows:
        Step-1 : Create an empty dictionary phone_book={},
        Step-2 : Define function 'Create_Phone_Book' that has the functionality of adding name and phone number of the user respectively.
        Step-3 : Define funtions 'add_new_entry()','find_phone_number(name)','get_all_contacts()' 
        that has the functionality of adding a new entry ,finding the phone number corresponding to a name and fetching all contacts.
        Step-4 : Prompt the user for the abover options.
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output","Lists"],
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
        YouTubeLink: "",
        Input:"17",
        Output:`[(3, 4, 5), (5, 12, 13), (6, 8, 10), (8, 15, 17), (9, 12, 15)]`
    },
    {
        id: 38,
        value: `Write a python program to create a dictionary state and their capitals and print capital for the given state.`,
        PreReq: ["Input-Output", "Dictionary"],
        Objective:`
        Dictionaries are used to store data values in key:value pairs.A dictionary is a collection which is ordered, changeable and do not allow duplicates.
        You can access the items of a dictionary by referring to its key name, inside square brackets.
        Since in the above problem, we need to access capitals which is the key of the dictionary, keys() method can be used.
        `,
        YouTubeLink: "",
        Input:"{'karnataka':'Bangalore','Andhra Pradesh':'Amaravati'}",
        Output:`dict_keys(['Bangalore','Amaravati'])`
    },
    {
        id: 39,
        value: `Write a program to Implement a stack and queue using lists`,
        PreReq: ["Input-Output", "Lists","Stacks","Queues"],
        Objective:`
        1) Stack Using list:
        Stack works on the principle of “Last-in, first-out”. Also, the inbuilt functions in Python make the code short and simple.
        To add an item to the top of the list, i.e., to push an item, we use append() 
        function and to pop out an element we use pop() function. These functions work quiet efficiently and fast in end operations.
        2) Queue Using List:
        Queue works on the principle of “First-in, first-out”. We use pop(0) to remove the first item from a list.

        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output", "String","FlowControl"],
        Objective:`
        Algorithm for the above problem:
        def match_words(words):
            ctr <-- 0
            for word in words:
                if len(word) > 1 and word[0] == word[-1]:
                    increment ctr by 1
                    return ctr 
        `,
        YouTubeLink: "",
        Input:"['abc', 'xyz', 'aba', '1221']",
        Output:`2`
    },
    {
        id: 41,
        value: `Write a Python program to remove duplicates from a list.`,
        PreReq: ["Input-Output", "Lists","FlowControl"],
        Objective:`
        Different approaches the the above problem is:
        Method 1: Using set() 
        This is the fastest and smallest method to achieve a particular task. 
        It first removes the duplicates and returns a dictionary which has to be converted to list. 
        Method 2: Using list comprehension 
        This method has working similarly to the above method, 
        but this is just a one-liner shorthand of a longer method done with the help of list comprehension.  
        `,
        YouTubeLink: "",
        Input:"[10,20,30,20,10,50,60,40,80,50,40]",
        Output:`[40, 10, 80, 50, 20, 60, 30]`
    },
    {
        id: 42,
        value: `Write a Python function that takes two Lists and returns True if they have at least one common member.`,
        PreReq: ["Input-Output", "Lists","FlowControl"],
        Objective:`
        Algorithm for the above:
        Using traversal in two lists, we can check if there exists one common element at least in them. While traversing two lists if we find one element to be common in them, 
        then we return true. After complete traversal and checking, if no elements are same, then we return false.
        `,
        YouTubeLink: "",
        Input:`a = [1, 2, 3, 4, 5]
               b = [5, 6, 7, 8, 9]`,
        Output:`True`
    },
    {
        id: 43,
        value: `Write a Python script to concatenate following dictionaries to create a new one.`,
        PreReq: ["Input-Output", "Dictionary"],
        Objective:`
        Algorithm for the above problem is as follows:
        1. Declare and initialize two dictionaries with some key-value pairs
        2. Use the update() function to add the key-value pair from the second dictionary to the first dictionary.
        3. Print the final dictionary.
        4. Exit. 
        `,
        YouTubeLink: "",
        Input:`dic1={1:10, 2:20}
        dic2={3:30, 4:40}
        dic3={5:50,6:60}`,
        Output:`Result : {1: 10, 2: 20, 3: 30, 4: 40, 5: 50, 6: 60}`
    },
    {
        id: 44,
        value: `Write a Python script to check if a given key already exists in a dictionary.`,
        PreReq: ["Input-Output", "Dictionary"],
        Objective:`
        1.define a function is_key_present with 'x" the key to be searched
        2.Use conditional statements to print appropraiate messages
        3.def is_key_present(x):
        4.add conditional ststement to check whether a key is present or not
        5.call the is_key_present function with parameters 5 and 9
`,
        YouTubeLink: "",
        Input:"[1,2,3,4,5]",
        Output:`Key is present in the dictionary                                                                              
                Key is not present in the dictionary`
    },
    {
        id: 45,
        value: `Write a Python program to sort a dictionary by key.`,
        PreReq: ["Input-Output", "Lists","FlowControl"],
        Objective:`
        1.Use dict.items() to get a list of tuple pairs from d and sort it using sorted().
        2.Use dict() to convert the sorted list back to a dictionary.
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output", "FlowControl"],
        Objective:`
        Algorithm for the above problem is:
        Step-1 : define a function called maximum(a, b) that returns maximum of the two numbers.
        Step-2 : If a >= b,return a
        Step-3 : else,return b
        
        `,
        YouTubeLink: "",
        Input:"4,5",
        Output:`largest is 5`
    },
    {
        id: 47,
        value: `Write a program to demonstrate the scope of the variable.`,
        PreReq: ["Input-Output"],
        Objective:`
        A variable is only available from inside the region it is created. This is called scope.
        Local Scope:
        A variable created inside a function belongs to the local scope of that function, and can only be used inside that function.
        Global Scope
        A variable created in the main body of the Python code is a global variable and belongs to the global scope.
        Global variables are available from within any scope, global and local.`,
        YouTubeLink: "",
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
        PreReq: ["Input-Output"],
        Objective:`
        Python has a different way of representing syntax and default values for function arguments. Default values indicate that the function argument will take that value if no argument value 
        is passed during the function call. The default value is assigned by using the assignment(=) operator of the form keywordname=value.
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output"],
        Objective:`
        Keyword arguments (or named arguments) are values that, when passed into a function, are identifiable by specific parameter names. A keyword argument is preceded by a parameter and the assignment operator, = .
        Keyword arguments can be likened to dictionaries in that they map a value to a keyword.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`a is: 3 b is: 7 c is: 10
        a is: 25 b is: 5 c is: 24
        a is: 100 b is: 5 c is: 50`
    },
    {
        id: 50,
        value: `Write a program to demonstrate variable argument in python.`,
        PreReq: ["Input-Output", "Lists","FlowControl"],
        Objective:`
        What is Python *args ?
        The special syntax *args in function definitions in python is used to pass a variable number of arguments to a function. 
        It is used to pass a non-key worded, variable-length argument list.  
        What is Python **kwargs
        The special syntax **kwargs in function definitions in python is used to pass a keyworded, variable-length argument list. We use the name kwargs with the double star. 
        The reason is that the double star allows us to pass through keyword arguments (and any number of them).
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output"],
        Objective:`
        Keyword-only arguments are another attribute of Python functions that have been available since Python 3.0. These arguments are specified using the '*' marker.
        They prompt the user to state the keyword used in the already defined function when making a call to the same function.
        `,
        YouTubeLink: "",
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
        PreReq: ["FlowControl"],
        Objective:`
        To calculate grade of students in python, you have to ask from user to enter marks obtained in 5 subjects. Now calculate 
        the sum of all the marks and then calculate the average marks to find the grade according to the average marks obtained by student 
        `,
        YouTubeLink: "",
        Input:"56",
        Output:`The grade is F`
    },
    {
        id: 53,
        value: `Write a python program to sort two numbers in ascending order.`,
        PreReq: ["FlowControl"],
        Objective:`
        The easiest way to sort is with the sorted(list) function, which takes a list and returns a new list with those elements in sorted order. The original list is not changed. 
        It's most common to pass a list into the sorted() function, but in fact it can take as input any sort of iterable collection.
        However, it can also be done using if else statement.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`n1 is 2
        n2 is 3`
    },
    {
        id: 54,
        value: `Write a program to demonstrate list copying in python.`,
        PreReq: ["Lists"],
        Objective:`
        You cannot copy a list simply by typing list2 = list1, 
        because: list2 will only be a reference to list1, and changes made in list1 will automatically also be made in list2.
        There are ways to make a copy, one way is to use the built-in List method copy().
        Another way to make a copy is to use the built-in method list().`,
        YouTubeLink: "",
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
        PreReq: ["Methods-Python"],
        Objective:`
        Pass-means to provide an argument to a function.
        By reference-means that the argument you're passing to the function is a 
        reference to a variable that already exists in memory rather than an independent copy of that variable.
       `,
        YouTubeLink: "",
        Input:"",
        Output:`Values inside the function [5, 6, 7, 8, [1, 2, 3, 4]]
        Values outside the fi=unction [5, 6, 7, 8, [1, 2, 3, 4]]`
    },
    {
        id: 56,
        value: `Write a python program to demonstrate overidden-reference`,
        PreReq: ["FlowControl"],
        Objective:`
        Pass-means to provide an argument to a function.
        By reference-means that the argument you're passing to the function is a 
        reference to a variable that already exists in memory rather than an independent copy of that variable.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`Values inside the function [1, 2, 3, 4]
        Values outside the fi=unction [10, 20, 30]`
    },
    {
        id: 57,
        value: `Define a function max_of_three() that takes three numbers as arguments
        and returns the largest of them using "default arguments.`,
        PreReq: ["FlowControl"],
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
        YouTubeLink: "",
        Input:"",
        Output:`largest of three numbers= 33`
    },
    {
        id: 58,
        value: `Define a function sum() and a function multiply()
        that sums and multiplies (respectively) all the numbers in a list of numbers.`,
        PreReq: ["Methods-Python"],
        Objective:`
        step-1 : define a function sum(inList)
        Step-2 : Initialize a new varaible result = 0
        Step-3 : for i in inList:
                   result = result + i
        Step-4 : return result on to the console
        do similarly for product where result = result*i instead. `,
        YouTubeLink: "",
        Input:"1 2 3 4",
        Output:`sum : 10
        product : 24`
    },
    {
        id: 59,
        value: `Define a function generate_n_chars() that takes an integer n and a character c and returns a string, n characters long.`,
        PreReq: ["Methods-Python"],
        Objective:`
        Step-1 : Define a function called generate_n_chars(n, str):
        Step-2 : Initialize result = "",an empty string
        Step-3 : for x in range(n):
                    result = result+str
        Step-4 : return result
        `,
        YouTubeLink: "",
        Input:"",
        Output:`xxxxx
        **********
        HelloHello`
    },
    {
        id: 60,
        value: `Write a python program to define a procedure histogram() that takes a list of integers and prints a histogram to the screen.`,
        PreReq: ["Methods-Python"],
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
        YouTubeLink: "",
        Input:"[4,9,7",
        Output:`**** 
        ********* 
        *******
        `
    },
    {
        id: 61,
        value: `Write a python program to perform binary search.`,
        PreReq: ["FlowControl"],
        Objective:`
        In a nutshell, this search algorithm takes advantage of a collection of elements that is already sorted by ignoring half of the elements after just one comparison. 
        Compare x with the middle element.
        If x matches with the middle element, we return the mid index.
        Else if x is greater than the mid element, then x can only lie in the right (greater) half subarray after the mid element. Then we apply the algorithm again for the right half.
        Else if x is smaller, the target x must lie in the left (lower) half. So we apply the algorithm for the left half.`,
        YouTubeLink: "",
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
        PreReq: ["String"],
        Objective:`
        In Python, individual characters of a String can be accessed by using the method of Indexing. Indexing allows negative address references to access characters from the back of the String, e.g. -1 refers to the last character, -2 refers to the second last character, and so on. 
        While accessing an index out of the range will cause an IndexError. 
        Only Integers are allowed to be passed as an index, float or other types that will cause a TypeError.
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output"],
        Objective:`
        The isalpha() method returns True if all the characters are alphabet letters (a-z).
        Example of characters that are not alphabet letters: (space)!#%&? etc.
        The isdigit() method returns True if all the characters are digits, otherwise False.
        Exponents, like ², are also considered to be a digit.
        The isalnum() method returns True if all the characters are alphanumeric, meaning alphabet letter (a-z) and numbers (0-9).
        Example of characters that are not alphanumeric: (space)!#%&? etc.`,
        YouTubeLink: "",
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
        PreReq: ["String"],
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
        YouTubeLink: "",
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
        PreReq: ["String"],
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
        YouTubeLink: "",
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
        PreReq: ["String"],
        Objective:`
        The strip() method removes any leading (spaces at the beginning) and trailing (spaces at the end) characters (space is the default leading character to remove)
        Syntax
        string.strip(characters)
        `,
        YouTubeLink: "",
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
        PreReq: ["Input-Output"],
        Objective:`
        The eval() method parses the expression passed to this method and runs python expression (code) within the program.
        The syntax of eval() is:
        eval(expression, globals=None, locals=None)
        The eval() function takes three parameters:
        expression - the string parsed and evaluated as a Python expression
        globals (optional) - a dictionary
        locals (optional)- a mapping object. Dictionary is the standard and commonly used mapping type in Python.
        `,
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        PreReq: ["Input-Output","FlowControl"],
        Objective:`
        Given a string, the task is to find the frequencies of all the characters in that 
        string and return a dictionary with key as the character and its value as its frequency in the given string.
        Simply iterate through the string and form a key in dictionary of newly 
        occurred element or if element is already occurred, increase its value by 1.
        `,
        YouTubeLink: "",
        Input:"geeksforgeeks",
        Output:`{'r': 1, 'e': 4, 'k': 2, 'G': 2, 's': 2, 'f': 1, 'o': 1}`
    },
    {
        id: 70,
        value: `define a function "make_3sg_form()" which given a verb in infinitive form returns its third person singular form.`,
        PreReq: ["Methods-Python"],
        Objective:`
        The third person singular verb form in English is distinguished by the suffix -s,
        which is added to the stem of the infinitive form: "run->runs".
        A simple set of rules can be given as follows:
        If the verb ends in "y", remove it and add "ies"
        If the verb ends in "o, ch, s, sh, x or z," add "es"
        By default just add "s"
        `,
        YouTubeLink: "",
        Input:"bush",
        Output:`bushes`
    },
    {
        id: 71,
        value: `Write a python program to reverse a string.`,
        PreReq: ["String"],
        Objective:`
        Python string library doesn’t support the in-built “reverse()” as done by other python containers like list, 
        hence knowing other methods to reverse string can prove to be useful.
        Extended slice offers to put a “step” field as [start, stop, step], and giving no field as start and stop indicates default to 0 and string length respectively, and “-1” 
        denotes starting from the end and stop at the start, hence reversing a string. 
        `,
        YouTubeLink: "",
        Input:"123abcd",
        Output:`dcba321`
    },
    {
        id: 72,
        value: `Write a Python function that takes a list and returns a new list with unique elements of the first list.`,
        PreReq: ["Lists"],
        Objective:`
        1. define a user defined function named unique_list(l)
        2. Initialize an empty list x = []
        3. iterate through-for a in l:
        4. check for the following condition, if a not in x:
        5. use the append() function,x.append(a)
        6. return x

        `,
        YouTubeLink: "",
        Input:"[1,2,3,3,3,3,4,5]",
        Output:`[1,2,3,4,5]`
    },
    {
        id: 73,
        value: `Write a Python program that accepts a hyphen-separated sequence of words as input
        and prints the words in a hyphen-separated sequence after sorting them alphabetically.`,
        PreReq: ["String"],
        Objective:`
        Algorithm:
        items=[n for n in input().split('-')]
        items.sort()
        print('-'.join(items))
        `,
        YouTubeLink: "",
        Input:"green-red-black-white",
        Output:`black-green-red-white `
    },
    {
        id: 74,
        value: `Write a Python program to get a string from a given string where all occurrences of its first char have been changed to '$', except the first char itself.`,
        PreReq: ["String"],
        Objective:`
        1. define a user defined fucntion change_char(str1).
        2. initialize char = str1[0]
        3. perform str1 = str1.replace(char, '$')
           str1 = char + str1[1:]
        4. return str1
        `,
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        YouTubeLink: "",
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
        YouTubeLink: "",
        Input:"",
        Output:`The file contents are in the form of list
        The contents inside the list are
        ['Hello! Welcome to demofile.txt\n', 'This file is for testing purposes.\n']
        `
    },
    {
        id: 78,
        value: `Write a python program for line method using with open function for a file.`,
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
        YouTubeLink: "",
        Input:"input the text file in 'file.txt'",
        Output:`
        Hello There
        World
        `
    },
    {
        id: 79,
        value: `Write a python program with a file “friends.txt” that contains friend names and their email addresses.
        Now, alphabetically sort the lines in the file.
        Write the output a file named "sorted_friends.txt"`,
        PreReq: ["Python-Files"],
        Objective:`
        The sort() method sorts the items of a list in ascending or descending order.
        The syntax of the sort() method is:
        list.sort(key=..., reverse=...)
        Alternatively, you can also use Python's built-in sorted() function for the same purpose.
        sorted(list, key=..., reverse=...)
        `,
        YouTubeLink: "",
        Input:"My name is Ramaiah",
        Output:`is My name Ramaiah`
    },
    {
        id: 80,
        value: `Develop a fileLineCount( name ) which opens a file with the given name and examines all of the lines of the file.
        Each line should have strip applied to remove leading and trailing spaces.
        If the resulting line is of length zero, it was effectively blank, and can be skipped.
        If the resulting line begins with # the line is entirely a comment, and can be skipped.
        All remaining lines should be counted, and fileLineCount(name) returns this count.`,
        PreReq: ["FlowControl"],
        Objective:`
        The basic algorithm for the above problem is:
        Step-1 : Usage of the Strip() function in python.
        Step-2 : The strip() method returns a copy of the string by removing 
        both the leading and the trailing characters (based on the string argument passed).
        Step-3 : Create a user defined function called fileLineCount(name) which returns the number of lines in the given file.
        Step-4 : If the file is empty the function will return 0. The function should return 0 even when the file has only comments.`,
        YouTubeLink: "",
        Input:`hello 
        there`,
        Output:`number of lines is 2.`
    },
    {
        id: 81,
        value: `Write a Python program to Convert the contents of the file 'graffit.txt' to all uppercase letters.`,
        PreReq: ["Python-Files"],
        Objective:`
        In Python, upper() is a built-in method used for string handling. The upper() method returns the uppercased string from the given string. It converts all lowercase characters to uppercase. If no lowercase characters exist, it returns the original string. 
        1.It does not take any arguments, Therefore, It returns an error if a parameter is passed.
        2.Digits and symbols return are returned as it is, Only a lowercase letter is returned after converting to uppercase.
        `,
        YouTubeLink: "",
        Input:"Ramaiah",
        Output:`RAMAIAH`
    },
    {
        id: 82,
        value: `Create a text file that contains student data and print data from the given position.
        make use of tell( ) and seek( ) methods.`,
        PreReq: ["Python-Files"],
        Objective:`
        seek() method
        In Python, seek() function is used to change the position of the File Handle to a given specific position. File handle is like a cursor,
        which defines from where the data has to be read or written in the file.
        tell() method
        tell() method returns current position of file object. This method takes no parameters and returns an integer value. 
        Initially file pointer points to the beginning of the file(if not opened in append mode). So, the initial value of tell() is zero 
        `,
        YouTubeLink: "",
        Input:"",
        Output:`0`
    },
    {
        id: 83,
        value: `Implement python copy command using files.`,
        PreReq: ["Python-Files"],
        Objective:`
        The shutil.copyfile() method in Python is used to copy the content of the source file to the destination file.
        The metadata of the file is not copied. Source and destination must represent a file and destination must be writable. If the destination already exists then it will be replaced with the source file otherwise a new file will be created. 
        If source and destination represent the same file then the SameFileError exception will be raised. 
        Syntax: shutil.copyfile(source, destination, *, follow_symlinks = True)
        `,
        YouTubeLink: "",
        Input:"",
        Output:` Before copying file:
        ['hrithik.png', 'test.py', 'sample.txt', 'file.text', 'copy.cpp']
        After copying file:
        ['hrithik.png', 'test.py', 'sample.txt', 'file.text', 'file(copy).txt', 'copy.cpp']
        Destination path: /home/User/Documents/file(copy).txt`
    },
    {
        id: 84,
        value: `Write a python program to demonstrate the sys module: System specific parameters and functions`,
        PreReq: ["Modules"],
        Objective:`
        The sys module in Python provides various functions and variables that are used to manipulate different parts of the Python runtime environment. It allows operating on the interpreter as it provides access to the variables and functions that interact strongly with the interpreter. 
        sys.version is used to return a string containing the version of Python Interpreter with some additional information. This shows how the sys module interacts with the interpreter. 
        Let us dive into the article to get more information about the sys module.
        `,
        YouTubeLink: "",
        Input:"User-Input: ",
        Output:`3.6.9 (default, Oct  8 2020, 12:12:24) 
        [GCC 8.4.0]`
    },
    {
        id: 85,
        value: `Write a python program to demonstrate the os module`,
        PreReq: ["Modules"],
        Objective:`
        The OS module in Python provides functions for interacting with the operating system. OS comes under Python’s standard utility modules. This module provides a portable way of using operating system-dependent functionality. 
        The *os* and *os.path* modules include many functions to interact with the file system.
        Consider Current Working Directory(CWD) as a folder, where the Python is operating. Whenever the files are called only by their name, Python assumes that it starts in the CWD which means that name-only reference will be successful only if the file is in the Python’s CWD.
        Note: The folder where the Python script is running is known as the Current Directory. 
        This is not the path where the Python script is located.
        os.listdir() method in Python is used to get the list of all files and directories in the specified directory. If we don’t specify any directory, 
        then the list of files and directories in the current working directory will be returned.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`Current working directory: /home/Ramaiah/Desktop/lab
        Files and directories in ' / ' :
        ['sys', 'run', 'tmp', 'boot', 'mnt', 'dev', 'proc', 'var', 'bin', 'lib64', 'usr', 
        'lib', 'srv', 'home', 'etc', 'opt', 'sbin', 'media']`
    },
    {
        id: 86,
        value: `Write a python program to demonstrate python csv file`,
        PreReq: ["Modules"],
        Objective:`
        CSV (Comma Separated Values) is a simple file format used to store tabular data, such as a spreadsheet or database. A CSV file stores tabular data (numbers and text) in plain text. Each line of the file is a data record. Each record consists of one or more fields, separated by commas. The use of the comma as a field separator is the source of the name for this file format.
        For working CSV files in Python, there is an inbuilt module called csv. 
        Syntax:
        open(filename, 'r') as csvfile:
            csvreader = csv.reader(csvfile)
        `,
        YouTubeLink: "",
        Input:`with open('names.csv','r') as csv_file:
        csv_reader=csv.reader(csv_file)
        print(csv_reader)`,
        Output:`Displays data in names.csv`
    },
    {
        id: 87,
        value: `Write a python program to demonstrate datetime module. `,
        PreReq: ["Modules"],
        Objective:`
        Python Datetime module supplies classes to work with date and time. These classes provide a number of functions to deal with dates, times and time intervals. Date and datetime are an object in Python, so when you manipulate them, you are actually manipulating objects and not string or timestamps. 
        The DateTime module is categorized into – 
        date – An idealized naive date, assuming the current Gregorian calendar always was, and always will be, in effect. Its attributes are year, month and day.
        time – An idealized time, independent of any particular day, assuming that every day has exactly 24*60*60 seconds. Its attributes are hour, minute, second, microsecond, and tzinfo.
        datetime – Its a combination of date and time along with the attributes year, month, day, hour, minute, second, microsecond, and tzinfo.
        Constructor syntax:  
        class datetime.date(year, month, day)
        `,
        YouTubeLink: "",
        Input:"",
        Output:`2016-07-24
        2022-09-26
        0
        1
        2022-10-03
        2022-09-19
        -1011 days, 0:00:00
        -1011
        -87350400.0
        `
    },
    {
        
        id: 88,
        value: `Write a python program to demonstrate datetime module. `,
        PreReq: ["Modules"],
        Objective:`
        Python Datetime module supplies classes to work with date and time. These classes provide a number of functions to deal with dates, times and time intervals. Date and datetime are an object in Python, so when you manipulate them, you are actually manipulating objects and not string or timestamps. 
        The DateTime module is categorized into – 
        date – An idealized naive date, assuming the current Gregorian calendar always was, and always will be, in effect. Its attributes are year, month and day.
        time – An idealized time, independent of any particular day, assuming that every day has exactly 24*60*60 seconds. Its attributes are hour, minute, second, microsecond, and tzinfo.
        datetime – Its a combination of date and time along with the attributes year, month, day, hour, minute, second, microsecond, and tzinfo.
        Constructor syntax:  
        class datetime.date(year, month, day)
        `,
        YouTubeLink: "",
        Input:"",
        Output:`09:30:54.010000
        9
        30
        2016-07-24 09:30:54.100000
        2016-07-24
        09:30:54.100000
        2016
        24
        2022-09-26 08:51:01.729944
        2022-09-26 08:51:01.729959
        2022-09-26 08:51:01.729961
        `
    },
    {
        id: 89,
        value: `Write a python program to demonstrate random module in python`,
        PreReq: ["Modules"],
        Objective:`
        Python Random module is an in-built module of Python which is used to generate random numbers. These are pseudo-random numbers means these are not truly random. 
        This module can be used to perform random actions such as generating random numbers, print random a value for a list or string, etc.
        import random-random module creates pseudo-random numbers
        `,
        YouTubeLink: "",
        Input:"",
        Output:`[0, 6, 7, 1, 2, 9, 4, 8, 3, 5]
        10
        25
        90
        `
    },
    {
        id: 90,
        value: `Write a python program to demonstrate calender module in python.`,
        PreReq: ["Modules"],
        Objective:`
        Python defines an inbuilt module calendar that handles operations related to the calendar. 
        The calendar module allows output calendars like the program and provides additional useful functions related to the calendar. Functions and classes defined in the Calendar module use an idealized calendar, the current Gregorian calendar extended indefinitely in both directions.
        By default, these calendars have Monday as the first day of the week, and Sunday as the last
        `,
        YouTubeLink: "",
        Input:"",
        Output:`     July 2019
        Mo Tu We Th Fr Sa Su
         1  2  3  4  5  6  7
         8  9 10 11 12 13 14
        15 16 17 18 19 20 21
        22 23 24 25 26 27 28
        29 30 31
        
        The calender of year 2018 is : 
                                          2018
        
              January                   February                   March
        Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
         1  2  3  4  5  6  7                1  2  3  4                1  2  3  4
         8  9 10 11 12 13 14       5  6  7  8  9 10 11       5  6  7  8  9 10 11
        15 16 17 18 19 20 21      12 13 14 15 16 17 18      12 13 14 15 16 17 18
        22 23 24 25 26 27 28      19 20 21 22 23 24 25      19 20 21 22 23 24 25
        29 30 31                  26 27 28                  26 27 28 29 30 31
        
               April                      May                       June
        Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
                           1          1  2  3  4  5  6                   1  2  3
         2  3  4  5  6  7  8       7  8  9 10 11 12 13       4  5  6  7  8  9 10
         9 10 11 12 13 14 15      14 15 16 17 18 19 20      11 12 13 14 15 16 17
        16 17 18 19 20 21 22      21 22 23 24 25 26 27      18 19 20 21 22 23 24
        23 24 25 26 27 28 29      28 29 30 31               25 26 27 28 29 30
        30
        
                July                     August                  September
        Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
                           1             1  2  3  4  5                      1  2
         2  3  4  5  6  7  8       6  7  8  9 10 11 12       3  4  5  6  7  8  9
         9 10 11 12 13 14 15      13 14 15 16 17 18 19      10 11 12 13 14 15 16
        16 17 18 19 20 21 22      20 21 22 23 24 25 26      17 18 19 20 21 22 23
        23 24 25 26 27 28 29      27 28 29 30 31            24 25 26 27 28 29 30
        30 31
        
              October                   November                  December
        Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su      Mo Tu We Th Fr Sa Su
         1  2  3  4  5  6  7                1  2  3  4                      1  2
         8  9 10 11 12 13 14       5  6  7  8  9 10 11       3  4  5  6  7  8  9
        15 16 17 18 19 20 21      12 13 14 15 16 17 18      10 11 12 13 14 15 16
        22 23 24 25 26 27 28      19 20 21 22 23 24 25      17 18 19 20 21 22 23
        29 30 31                  26 27 28 29 30            24 25 26 27 28 29 30
                                                            31
        
                                                               2018
        
                     January                                 February                                 March
        Mon  Tue  Wed  Thu  Fri  Sat  Sun       Mon  Tue  Wed  Thu  Fri  Sat  Sun       Mon  Tue  Wed  Thu  Fri  Sat  Sun
          1    2    3    4    5    6    7                        1    2    3    4                        1    2    3    4
          8    9   10   11   12   13   14         5    6    7    8    9   10   11         5    6    7    8    9   10   11
         15   16   17   18   19   20   21        12   13   14   15   16   17   18        12   13   14   15   16   17   18
         22   23   24   25   26   27   28        19   20   21   22   23   24   25        19   20   21   22   23   24   25
         29   30   31                            26   27   28                            26   27   28   29   30   31
        
                      April                                    May                                     June
        Mon  Tue  Wed  Thu  Fri  Sat  Sun       Mon  Tue  Wed  Thu  Fri  Sat  Sun       Mon  Tue  Wed  Thu  Fri  Sat  Sun
                                        1              1    2    3    4    5    6                             1    2    3
          2    3    4    5    6    7    8         7    8    9   10   11   12   13         4    5    6    7    8    9   10
          9   10   11   12   13   14   15        14   15   16   17   18   19   20        11   12   13   14   15   16   17
         16   17   18   19   20   21   22        21   22   23   24   25   26   27        18   19   20   21   22   23   24
         23   24   25   26   27   28   29        28   29   30   31                       25   26   27   28   29   30
         30
        
                       July                                   August                                September
        Mon  Tue  Wed  Thu  Fri  Sat  Sun       Mon  Tue  Wed  Thu  Fri  Sat  Sun       Mon  Tue  Wed  Thu  Fri  Sat  Sun
                                        1                   1    2    3    4    5                                  1    2
          2    3    4    5    6    7    8         6    7    8    9   10   11   12         3    4    5    6    7    8    9
          9   10   11   12   13   14   15        13   14   15   16   17   18   19        10   11   12   13   14   15   16
         16   17   18   19   20   21   22        20   21   22   23   24   25   26        17   18   19   20   21   22   23
         23   24   25   26   27   28   29        27   28   29   30   31                  24   25   26   27   28   29   30
         30   31
        
                     October                                 November                                December
        Mon  Tue  Wed  Thu  Fri  Sat  Sun       Mon  Tue  Wed  Thu  Fri  Sat  Sun       Mon  Tue  Wed  Thu  Fri  Sat  Sun
          1    2    3    4    5    6    7                        1    2    3    4                                  1    2
          8    9   10   11   12   13   14         5    6    7    8    9   10   11         3    4    5    6    7    8    9
         15   16   17   18   19   20   21        12   13   14   15   16   17   18        10   11   12   13   14   15   16
         22   23   24   25   26   27   28        19   20   21   22   23   24   25        17   18   19   20   21   22   23
         29   30   31                            26   27   28   29   30                  24   25   26   27   28   29   30
                                                                                         31
        None
        True
        False
        2
        0
        `
    },
    {
        id: 91,
        value: `Implement a simple calculator  using python modules.`,
        PreReq: ["Modules"],
        Objective:`
        In this program, we ask the user to choose an operation. Options 1, 2, 3, and 4 are valid. If any other input is given, Invalid Input is displayed and the loop continues until a valid option is selected.
        Two numbers are taken and an if...elif...else branching is used to execute a particular section. 
        User-defined functions add(), subtract(), multiply() and divide() evaluate respective operations and display the output.
        `,
        YouTubeLink: "",
        Input:`
        Select operation.
        1.Add
        2.Subtract
        3.Multiply
        4.Divide
        Enter choice(1/2/3/4): 3
        Enter first number: 15
        Enter second number: 14
        Let's do next calculation? (yes/no): 
        `,
        Output:`15.0 * 14.0 = 210.0
        no
        `
    },
    {
        id: 92,
        value: `Create a package using python to do the following
        a) check for Palindrome
        b) check for prime
        c) check for Armstrong number`,
        PreReq: ["Modules"],
        Objective:`
        A Python module may contain several classes, functions, variables, etc. whereas a Python package can contains several module. 
        In simpler terms a package is folder that contains various modules as files.
        Creating a package :
        Create a folder named mypckg.
        Inside this folder create an empty Python file i.e. __init__.py
        Then create two modules mod1 and mod2 in this folder.
        `,
        YouTubeLink: "",
        Input:`121
        7
        34
        `,
        Output:`It is a palindrome.
        It is a prime
        It is not an Armstrong number.`
    },
    {
        id: 93,
        value: `create a simple dice game to understand random module functions.
        In this game, we have two players and two dice.
        One by one each player shuffle both the dice and play.
        The algorithm calculates the sum of two dice number and adds it to each player’s scoreboard.
        The Player who scores high number is the winner.
        play the game for three times`,
        PreReq: ["Modules"],
        Objective:`
        Python Random module is an in-built module of Python which is used to generate random numbers. These are pseudo-random numbers means these are not truly random. 
        This module can be used to perform random actions such as generating random numbers, print random a value for a list or string, etc.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`A is the winner`
    },
    {
        id: 94,
        value: `Write a python program to deomonstrate classes in python.`,
        PreReq: ["Classes"],
        Objective:`
        Class: A user-defined prototype for an object that defines a set of attributes that characterize any object of the class. 
        The attributes are data members (class variables and instance variables) and methods, accessed via dot notation.
        Attributes are always public and can be accessed using the dot (.) operator. Eg.: Myclass.Myattribute
        Constructors are generally used for instantiating an object. The task of constructors is to initialize(assign values) to the data members of the class when an object of the class is created. 
        In Python the __init__() method is called the constructor and is always called when an object is created.

        `,
        YouTubeLink: "",
        Input:"My name is Ramaiah",
        Output:`A class represnting student
        The name of student is Hariprasad
        The age of student is:20
        A class represnting student`
    },

    {
        id: 95,
        value: `Write a python program to create a python class and add a method to the class.`,
        PreReq: ["Classes"],
        Objective:`
        Class: A user-defined prototype for an object that defines a set of attributes that characterize any object of the class. 
        The attributes are data members (class variables and instance variables) and methods, accessed via dot notation.
        Attributes are always public and can be accessed using the dot (.) operator. Eg.: Myclass.Myattribute
        Constructors are generally used for instantiating an object. The task of constructors is to initialize(assign values) to the data members of the class when an object of the class is created. 
        In Python the __init__() method is called the constructor and is always called when an object is created.
        Method : A special kind of function that is defined in a class definition.
        You can define a method in a class by including function definitions within the scope of the class block.– Note that there is a special first 
        argument self in all of the method definitions. Note that there is usually a special method called __init__ in most classes
        `,
        YouTubeLink: "",
        Input:"",
        Output:`A class represnting student
        The age of x is:20
        The new_age of x is:20
        The name of x is:x`
    },
    {
    
        id: 96,
        value: `Write a python program to demonstrate special methods`,
        PreReq: ["Classes"],
        Objective:`
        Class can implement the special method __del__(), called a destructor, that is invoked when the instance is about to be destroyed. 
        This method might be used to clean up any nonmemory resources used by an instance.
        __init__(self [,*args [,**kwargs]])-Called to initialize a new instance
        __del__(self)-Called to destroy an instance
        __repr__(self)-Creates a full string representation of an object
`,
        YouTubeLink: "",
        Input:"",
        Output:`Name: Programming in Python, Pages: 100`
    },
    {
        id: 97,
        value: `write a python program to demonstrate del() destructor.`,
        PreReq: ["Classes"],
        Objective:`
        Class can implement the special method __del__(), called a destructor, that is invoked when the instance is about to be destroyed. 
        This method might be used to clean up any nonmemory resources used by an instance.
        __init__(self [,*args [,**kwargs]])-Called to initialize a new instance
        __del__(self)-Called to destroy an instance
        __repr__(self)-Creates a full string representation of an object
        `,
        YouTubeLink: "",
        Input:"",
        Output:`Constructor
        139709906490560 139709906490560 139709906490560
        Point destroyed`
    },
    {
        id: 98,
        value: `Write a python program to demonstrate data and class atrributes.`,
        PreReq: ["Classes"],
        Objective:`
        Data attribute: 
        Variable owned by a particular instance of a class.Each instance can have its own different value for it.These are the most common kind of attribute.
         Class attributes: 
        Owned by the class as a whole. All instances of the class share the same value for it. Called “static” variables in some languages. Good for class-wide constants or 
        for building counter of how many instances of the class have been made.

        `,
        YouTubeLink: "",
        Input:"",
        Output:`The my_total value for object a
        1
        The overall total value is
        3
        The my_total value for object b
        2
        The overall total value is
        3`
    },
    {
        id: 99,
        value: `Write a python program to demonstrate get and has attributes.`,
        PreReq: ["Classes"],
        Objective:`
        Python hasattr() function is an inbuilt utility function, which is used to check if an object has the given named attribute and return true if present, else false. 
        In this article, we will see how to check if an object has an attribute in Python.
        Syntax : hasattr(obj, key)
        Parameters : 
        obj : The object whose which attribute has to be checked.
        key : Attribute which needs to be checked.
        Python getattr() function is used to get the value of an object's attribute and if no attribute of that object is found, default value is returned. 
        Basically, returning the default value is the main reason why you may need to use Python getattr() function.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`A class represnting student
        Full name is Ramaiah
        Age is 73`
    },
    {
        id: 100,
        value: `Write a python program to deomonstrate data hiding."`,
        PreReq: ["Classes"],
        Objective:`
        Any attribute or method with two leading underscores in its name (but none at the end) is private. It cannot be accessed outside of that class. 
        Note-1:
        Names with two underscores at the beginning and the end are for built-in methods or attributes for the class.
        Note-2: There is no protected status in Python; so, subclasses would be unable to access these private data either.

        `,
        YouTubeLink: "",
        Input:"",
        Output:`1
        2`
    },
    {
        id: 101,
        value: `Write a python program to demonstrate inheritance in python`,
        PreReq: ["Classes"],
        Objective:`
        A class can extend the definition of another class in order to use (or redefine) methods and attributes already defined in 
        the previous one.
        New class: “subclass.” Original: “parent” or “ancestor.”
        When defining a subclass, you put the name of the parent in parentheses after the subclass’s name on the first line of the definition.
`,
        YouTubeLink: "",
        Input:"",
        Output:`Age:20`
    },
    {
        id: 102,
        value: `Write a python program to demonstrate multiple inheritance.`,
        PreReq: ["Classes"],
        Objective:`
        Multiple-inheritance:
        When a class is derived from more than one base class it is called multiple Inheritance. 
        The derived class inherits all the features of the base case.
        Syntax:
        Class Base1:
        Body of the class
        Class Base2:
        Body of the class
        Class Derived(Base1, Base2):
        Body of the class
        `,
        YouTubeLink: "",
        Input:"",
        Output:`that's it
        calling a third method
        Calling second method
        Calling first method`
    },
    {
        id: 103,
        value: `Write a python program to demonstrate built-in class attributes.`,
        PreReq: ["Classes"],
        Objective:`
        Every Python class keeps following built-in attributes and they can be accessed using dot operator like any other attribute −
        __dict__ − Dictionary containing the class's namespace.
        __doc__ − Class documentation string or none, if undefined.
        __name__ − Class name.
        __module__ − Module name in which the class is defined. This attribute is "__main__" in interactive mode.
        __bases__ − A possibly empty tuple containing the base classes, in the order of their occurrence in the base class list.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`Name: Raju ,Salary: 5000
        Name: Ravi ,Salary: 2000
        Total emplouee 2
        document string
        Employee
        __main__
        (<class 'object'>,)
        {'__module__': '__main__', '__doc__': 'document string', 'empcount': 2, '__init__': <function Employee.__init__ at 0x7f6632c32dc0>, 'displaycount': <function Employee.displaycount at 0x7f6632c32e50>, 'displayEmployee': <function Employee.displayEmployee at 0x7f6632c32ee0>, '__dict__': <attribute '__dict__' of 'Employee' objects>, '__weakref__': <attribute '__weakref__' of 'Employee' objects>}`
    },
    {
        id: 104,
        value: `Create a python class named Account and define appropriate methods like deposit() and withdraw along with constructors. `,
        PreReq: ["Classes"],
        Objective:`
        Class: A user-defined prototype for an object that defines a set of attributes that characterize any object of the class. 
        The attributes are data members (class variables and instance variables) and methods, accessed via dot notation.
        Attributes are always public and can be accessed using the dot (.) operator. Eg.: Myclass.Myattribute
        Constructors are generally used for instantiating an object. The task of constructors is to initialize(assign values) to the data members of the class when an object of the class is created. 
        In Python the __init__() method is called the constructor and is always called when an object is created.
        Method : A special kind of function that is defined in a class definition.
        You can define a method in a class by including function definitions within the scope of the class block.– Note that there is a special first 
        argument self in all of the method definitions. Note that there is usually a special method called __init__ in most classes
        `,
        YouTubeLink: "",
        Input:"",
        Output:`10009.78
        3800.03
        True
        4800.030000000001
        9009.78
        9009.78
        4800.030000000001
        > `
    },
    {
        id: 105,
        value: `Write code to create two different instances of this class and set attributes for both objects:
        class Person():
        name = ""
        cellPhone = ""
        email = ""  `,
        PreReq: ["Classes"],
        Objective:`
        Class: A user-defined prototype for an object that defines a set of attributes that characterize any object of the class. 
        The attributes are data members (class variables and instance variables) and methods, accessed via dot notation.
        Attributes are always public and can be accessed using the dot (.) operator. Eg.: Myclass.Myattribute
        Constructors are generally used for instantiating an object. The task of constructors is to initialize(assign values) to the data members of the class when an object of the class is created. 
        In Python the __init__() method is called the constructor and is always called when an object is created.
        Method : A special kind of function that is defined in a class definition.
        You can define a method in a class by including function definitions within the scope of the class block.– Note that there is a special first 
        argument self in all of the method definitions. Note that there is usually a special method called __init__ in most classes
        `,
        YouTubeLink: "",
        Input:"",
        Output:`object 1 name: M S 
        object 1 cellPhone: 1232435654
        object 1 email : sm@gmail.com
        object 2 name: Ramaiah
        object 2 cellPhone: 1332435654
        object 2 email : smsd@gmail.com

        `
    },
    {
        id: 106,
        value: `For the code below, write a class that has the appropriate class name and attributes that will allow the code to work.
		myBird = Bird()
		myBird.color = "green"
		myBird.name = "Sunny"
		myBird.breed = "Sun Conure"`,
        PreReq: ["Classes"],
        Objective:`
        Class: A user-defined prototype for an object that defines a set of attributes that characterize any object of the class. 
        The attributes are data members (class variables and instance variables) and methods, accessed via dot notation.
        Attributes are always public and can be accessed using the dot (.) operator. Eg.: Myclass.Myattribute
        Constructors are generally used for instantiating an object. The task of constructors is to initialize(assign values) to the data members of the class when an object of the class is created. 
        In Python the __init__() method is called the constructor and is always called when an object is created.
        Method : A special kind of function that is defined in a class definition.
        You can define a method in a class by including function definitions within the scope of the class block.– Note that there is a special first 
        argument self in all of the method definitions. Note that there is usually a special method called __init__ in most classes
        `,
        YouTubeLink: "",
        Input:"",
        Output:`color: green
        name: Sunny
        breed: Sun Conure
        `
    },
    {
        id: 107,
        value: `Develop a program that calculate class average for each of the three tests for a class of 20 students
        and the program should also calculate the average of each of the student scores in those three test.
        Should also display the results in descending order per test i.e a student name
        and the corresponding test result of the student.`,
        PreReq: ["Classes"],
        Objective:`
        Class: A user-defined prototype for an object that defines a set of attributes that characterize any object of the class. 
        The attributes are data members (class variables and instance variables) and methods, accessed via dot notation.
        Attributes are always public and can be accessed using the dot (.) operator. Eg.: Myclass.Myattribute
        Constructors are generally used for instantiating an object. The task of constructors is to initialize(assign values) to the data members of the class when an object of the class is created. 
        In Python the __init__() method is called the constructor and is always called when an object is created.
        Method : A special kind of function that is defined in a class definition.
        You can define a method in a class by including function definitions within the scope of the class block.– Note that there is a special first 
        argument self in all of the method definitions. Note that there is usually a special method called __init__ in most classes
        `,
        YouTubeLink: "",
        Input:"",
        Output:`Ram:40
        Srikant:39
        praveen:38...
        `
    },
    {
        id: 108,
        value: `Write a class called Mylist that shadows a python list: it should overload + operator to append the data to the list.
        Also provide constructor for your class that takes an existing list.`,
        PreReq: ["Classes"],
        Objective:`
        1.Class: A user-defined prototype for an object that defines a set of attributes that characterize any object of the class. 
        The attributes are data members (class variables and instance variables) and methods, accessed via dot notation.
        Attributes are always public and can be accessed using the dot (.) operator. Eg.: Myclass.Myattribute
        2.Operator Overloading means giving extended meaning beyond their predefined operational meaning. For example operator + is used to add two integers as well as join two strings and merge two Lists. It is achievable because ‘+’ operator is overloaded by int class and str class. You might have noticed that the same 
        built-in operator or function shows different behavior for objects of different classes, this is called Operator Overloading. 
        `,
        YouTubeLink: "",
        Input:"",
        Output:`vector(7,8)`
    },
    {
        id:109,
        value: `Create a class called time.
        Its three members all type int should be called hours, minutes and seconds.
        Write a program that prompts the user to enter a time values separately.
        The Program should then store the time in the object and finally printout the total no of seconds represented by this value.
        Use appropriate member functions.`,
        PreReq: ["Classes"],
        Objective:`
        Class: A user-defined prototype for an object that defines a set of attributes that characterize any object of the class. 
        The attributes are data members (class variables and instance variables) and methods, accessed via dot notation.
        Attributes are always public and can be accessed using the dot (.) operator. Eg.: Myclass.Myattribute
        Constructors are generally used for instantiating an object. The task of constructors is to initialize(assign values) to the data members of the class when an object of the class is created. 
        In Python the __init__() method is called the constructor and is always called when an object is created.
        Method : A special kind of function that is defined in a class definition.
        You can define a method in a class by including function definitions within the scope of the class block.– Note that there is a special first 
        argument self in all of the method definitions. Note that there is usually a special method called __init__ in most classes
        `,
        YouTubeLink: "",
        Input:"Input time in seconds: 1234565  ",
        Output:`d:h:m:s-> 14:6:56:5 `
    },
    {
        id: 110,
        value: `Write a python program to demonstrate basic exception.`,
        PreReq: ["Exception Handling"],
        Objective:`
        An exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions. 
        In general, when a Python script encounters a situation that it can't cope with, it raises an exception. An exception is a Python object
        that represents an error.
        If you have some suspicious code that may raise an exception, you can defend your program by placing the suspicious code in a try: block. After
        the try: block, 
        include an except: statement, followed by a block of code which handles the problem as elegantly as possible.`,
        YouTubeLink: "",
        Input:"",
        Output:`file does not exist.`
    },
    {
        id: 111,
        value: `Write a python program to demonstrate function with exception.`,
        PreReq: ["Exception Handling"],
        Objective:`
        Exceptions are events that can modify the flow or 
        control through a program.
        They are automatically triggered on errors.
        try/except : catch and recover from raised by you or 
        Python exceptions 
        try/finally: perform cleanup actions whether 
        exceptions occur or not
        raise: trigger an exception manually in your code
        
        `,
        YouTubeLink: "",
        Input:"",
        Output:`Index out of bound`
    },
    {
        id: 112,
        value: `Write a python program to demonstrate index out of bound exception.`,
        PreReq: ["Exception Handling"],
        Objective:`
        An exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions. 
        In general, when a Python script encounters a situation that it can't cope with, it raises an exception. An exception is a Python object
        that represents an error.
        If you have some suspicious code that may raise an exception, you can defend your program by placing the suspicious code in a try: block. After
        the try: block, 
        include an except: statement, followed by a block of code which handles the problem as elegantly as possible.
        Exceptions are events that can modify the flow or 
        control through a program.
        They are automatically triggered on errors.
        try/except : catch and recover from raised by you or 
        Python exceptions 
        try/finally: perform cleanup actions whether 
        exceptions occur or not
        raise: trigger an exception manually in your code
        `,
        YouTubeLink: "",
        Input:"",
        Output:`Index out of bound
        Finally we are here
        Continue`
    },
    {
        id: 113,
        value: `Write a python program to demonstrate raise exception.`,
        PreReq: ["Exception Handling"],
        Objective:`
        Python raise Keyword is used to raise exceptions or errors. The raise keyword raises an error and stops the control flow of the program. It is used to bring up the current exception in an exception handler so that it can be handled further up the call stack.
        Syntax of the raise keyword :
        raise  {name_of_ the_ exception_class}
`,
        YouTubeLink: "",
        Input:"",
        Output:`c1's area is 78.53981633974483
        Invalid radius Negative radius`
    },
    {
        id: 114,
        value: `Write a python program to demonstrate finally block in python.`,
        PreReq: ["Exception Handling"],
        Objective:`
        Python provides a keyword finally, which is always executed after try and except blocks. The finally block always executes after normal termination of try block or after try block terminates due to some exception. 
        Even if you return in the except block still the finally block will execute
        Try: This block will test the excepted error to occur
        Except:  Here you can handle the error
        Else: If there is no exception then this block will be executed
        Finally: Finally block always gets executed either exception is generated or not
        `,
        YouTubeLink: "",
        Input:`2,3
        3,4
        `,
        Output:`Enter two numbers, separated by a comma: 2,3
        Result is 0.6666666666666666
        No exceptions
        The finally clause is executed
        Enter a number: 3,4
        The number entered is (3, 4)`
    },
    {
        id: 115,
        value: `Write a python program to demonstrate zero-division Exception.`,
        PreReq: ["Exception Handling"],
        Objective:`
        ZeroDivisionError is a built-in Python exception thrown when a number is divided by 0. 
        This means that the exception raised when the second argument of a division or modulo operation is zero.
        In Mathematics, when a number is divided by a zero, the result is an infinite number.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`Divided by zero!`
    },
    {
        id: 116,
        value: `Write a program to illustrate common exceptions.`,
        PreReq: ["Exception Handling"],
        Objective:`
        An exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions. 
        In general, when a Python script encounters a situation that it can't cope with, it raises an exception. An exception is a Python object
        that represents an error.
        If you have some suspicious code that may raise an exception, you can defend your program by placing the suspicious code in a try: block. After
        the try: block, 
        include an except: statement, followed by a block of code which handles the problem as elegantly as possible.
        Exceptions are events that can modify the flow or 
        control through a program.
        They are automatically triggered on errors.
        try/except : catch and recover from raised by you or 
        Python exceptions 
        try/finally: perform cleanup actions whether 
        exceptions occur or not
        raise: trigger an exception manually in your code
        `,
        YouTubeLink: "",
        Input:"",
        Output:`
        Array index out of bound exception
        zero division exception
        exception OverflowError
        exception NameError
        exception TypeError
        `
    },
    {
        id: 117,
        value: `Write a program to simulate saving account processing in a bank using constructors also use destructor at the end of program
        (Hint : Create Deposit and Withdraw with other member functions) and Check for Validation while withdrawing the amount`,
        PreReq: ["Exception Handling"],
        Objective:`
        Constructors are generally used for instantiating an object. The task of constructors is to initialize(assign values) to the data members of the class when an object of the class is created. 
        In Python the __init__() method is called the constructor and is always called when an object is created.
        Method : A special kind of function that is defined in a class definition.
        You can define a method in a class by including function definitions within the scope of the class block.– Note that there is a special first 
        argument self in all of the method definitions. Note that there is usually a special method called __init__ in most classes.
        Class can implement the special method __del__(), called a destructor, that is invoked when the instance is about to be destroyed. 
        This method might be used to clean up any nonmemory resources used by an instance.

        `,
        YouTubeLink: "",
        Input:"1000 500",
        Output:`Hello !!! Welcome to Deposit&Withdrawal Machine
        Enter amount to be deposited: 
         Amount Deposited: 1000.0
        Enter amount to be withdrawn: 
         You Withdrew: 500.0
        
        Net Available Balance = 500.0`
    },
    {
        id: 118,
        value: `Write an interactive program to compute the square root of a number.
        The input values must be tested for validity.
        If it is negative, the user defined method MySqrt() should raise an exception.`,
        PreReq: ["Exception Handling"],
        Objective:`
        An exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions. 
        In general, when a Python script encounters a situation that it can't cope with, it raises an exception. An exception is a Python object
        that represents an error.
        If you have some suspicious code that may raise an exception, you can defend your program by placing the suspicious code in a try: block. After
        the try: block, 
        include an except: statement, followed by a block of code which handles the problem as elegantly as possible.
        Exceptions are events that can modify the flow or 
        control through a program.
        They are automatically triggered on errors.
        try/except : catch and recover from raised by you or 
        Python exceptions 
        try/finally: perform cleanup actions whether 
        exceptions occur or not
        raise: trigger an exception manually in your code
        `,
        YouTubeLink: "",
        Input:"-1",
        Output:`
        Negative square root exception.
        `
    },
    {
        id: 119,
        value: `Write a class called “NoMatch” Exception is raised when branch is not equal to CSE.`,
        PreReq: ["Exception Handling"],
        Objective:`
        An exception is an event, which occurs during the execution of a program, that disrupts the normal flow of the program's instructions. 
        In general, when a Python script encounters a situation that it can't cope with, it raises an exception. An exception is a Python object
        that represents an error.
        If you have some suspicious code that may raise an exception, you can defend your program by placing the suspicious code in a try: block. After
        the try: block, 
        include an except: statement, followed by a block of code which handles the problem as elegantly as possible.
        Exceptions are events that can modify the flow or 
        control through a program.
        They are automatically triggered on errors.
        try/except : catch and recover from raised by you or 
        Python exceptions 
        try/finally: perform cleanup actions whether 
        exceptions occur or not
        raise: trigger an exception manually in your code
        `,
        YouTubeLink: "",
        Input:"ECE",
        Output:`Branch not in cse!`
    },
    {
        id: 120,
        value: `Write a program to find average of ‘n’ numbers.
        The program should  read  value of ‘n’ first.
        If the input ‘n’ happens to be zero or negative a suitable user defined exception should be thrown.
        If  the given input is not a valid integer then exception must be thrown. Use suitable try-except block.`,
        PreReq: ["Exception Handling"],
        Objective:`
        Python throws errors and exceptions when the code goes wrong, which may cause the program to stop abruptly. Python also provides an exception handling method with the help of try-except. Some of the standard exceptions which are
        most frequent include IndexError, ImportError, IOError, ZeroDivisionError, TypeError, and FileNotFoundError.
        User-Defined Exception in Python:
        Exceptions need to be derived from the Exception class, either directly or indirectly. Although not mandatory, 
        most of the exceptions are named as names that end in “Error” similar to the naming of the standard exceptions in python.
        try/except : catch and recover from raised by you or 
        Python exceptions 
        try/finally: perform cleanup actions whether 
        exceptions occur or not
        raise: trigger an exception manually in your code
        `,
        YouTubeLink: "",
        Input:`0
        2
        2 4
        `,
        Output:`Please enter a valid number!
        Average is : 3
        `
    },
    {
        id: 121,
        value: `Write a python program to find the maximum of two numbers using lambda funtion.`,
        PreReq: ["Advanced Functions"],
        Objective:`
        Python supports the creation of anonymous functions(i.e. functions that are not bound to a name) at runtime, using a construct called "lambda".
        • Syntax: lambda arguments: expression
        • Lambda functions can have any number of arguments but only one expression. The expression is evaluated and returned.
        • A simple 1-line function
        • Do not use def/return keywords

        `,
        YouTubeLink: "",
        Input:"",
        Output:`6`
    },
    {
        id: 122,
        value: `Write a python program to demonstrate the usage of map() function. `,
        PreReq: ["Advanced Functions"],
        Objective:`
        • Syntax: r = map(func, list)
        • The first argument func is the name of a function and the second a list)
        • map() applies the function func to all the elements of the sequence seq. 
        • It returns a new list with the elements changed by func.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`[16, 9, 4, 1]`
    },
    {
        id: 123,
        value: `Write a python program to demonstrate the usage of filter() function.`,
        PreReq: ["Advanced Functions"],
        Objective:`
        Syntax: filter(function, list)
        • The function filter(f,l) needs a function f as its first argument. f returns a Boolean value, i.e. either True or False. 
        • This function will be applied to every element of the list l. 
        • Only if f returns True will the element of the list be included in the result list.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`[4, 3]`
    },
    {
        id: 124,
        value: `Write a python program to demonstrate the usage of reduce() function.`,
        PreReq: ["Advanced Functions"],
        Objective:`
        The function reduce(func, seq) continually applies the 
        function func() to the sequence seq. 
        • It returns a single value.
        Access file 04_reduce_function.py
        `,
        YouTubeLink: "",
        Input:"",
        Output:`108
        24`
    },
    {
        id: 125,
        value: `Given a list of temperatures recorded as Celsius = [39.2, 36.5, 37.3, 37.8] ,
        convert the readings into Fahrenheit using map() function and print the values.`,
        PreReq: ["Advanced Functions"],
        Objective:`
        • Syntax: r = map(func, list)
        • The first argument func is the name of a function and the second a list)
        • map() applies the function func to all the elements of the sequence seq. 
        • It returns a new list with the elements changed by func.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`[102.56,97.7,99.14,100.04]`
    },
    {
        id: 126,
        value: `Given a string “Its raining cats and dogs” and perform the following operations sequentially.'''
        Split each words of a string
        Print the length of each words of a string using map() function.`,
        PreReq: ["Advanced Functions"],
        Objective:`
        Python String split() method in Python split a string into a list of strings after breaking the given string by the specified separator.
        Python String split() Method Syntax
        Syntax : str.split(separator, maxsplit)
        Parameters :
            separator : This is a delimiter. The string splits at this specified separator. If is not provided then any white space is a separator.
            maxsplit : It is a number, which tells us to split the string into maximum of provided number of times. If it is not provided then the default is -1 that means there is no limit.
            Returns : Returns a list of strings after breaking the given string by the specified separator.if f returns True will the element of the list be included in the result list.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`["its","raining","cats","and","dogs"]
        [3,7,4,3,4]
        `
    },
    {
        id: 127,
        value: `Consider a list fib = [1,1,2,3,5,8,13,21,34,55],
        use filter() method to print the values of the list as [2,8,34]`,
        PreReq: ["Advanced Functions"],
        Objective:`
        Syntax: filter(function, list)
        • The function filter(f,l) needs a function f as its first argument. f returns a Boolean value, i.e. either True or False. 
        • This function will be applied to every element of the list l. 
        • Only if f returns True will the element of the list be included in the result list.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`[2,8,34]`
    },
    {
        id: 128,
        value: `Count the number of even numbers from 1 to 1000 using filter() and lambda() functions.`,
        PreReq: ["Advanced Functions"],
        Objective:`
        Syntax: filter(function, list)
        • The function filter(f,l) needs a function f as its first argument. f returns a Boolean value, i.e. either True or False. 
        • This function will be applied to every element of the list l. 
        • Only if f returns True will the element of the list be included in the result list.
        Python supports the creation of anonymous functions(i.e. functions that are not bound to a name) at runtime, using a construct called "lambda".
        • Syntax: lambda arguments: expression
        • Lambda functions can have any number of arguments but only one expression. The expression is evaluated and returned.
        • A simple 1-line function
        • Do not use def/return keywords
        `,
        YouTubeLink: "",
        Input:"",
        Output:`Original list of integers:
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        
        Even numbers from the said list:
        [2, 4, 6, 8, 10]
        
        Odd numbers from the said list:
        [1, 3, 5, 7, 9]`
    },
    {
        id: 129,
        value: `Given a list of strings,
        remove all the strings that has the first character as ‘h’
        using filter() and lambda functions`,
        PreReq: ["Advanced Functions"],
        Objective:`
        Syntax: filter(function, list)
        • The function filter(f,l) needs a function f as its first argument. f returns a Boolean value, i.e. either True or False. 
        • This function will be applied to every element of the list l. 
        • Only if f returns True will the element of the list be included in the result list.
        Python supports the creation of anonymous functions(i.e. functions that are not bound to a name) at runtime, using a construct called "lambda".
        • Syntax: lambda arguments: expression
        • Lambda functions can have any number of arguments but only one expression. The expression is evaluated and returned.
        • A simple 1-line function
        • Do not use def/return keywords
        `,
        YouTubeLink: "",
        Input:`["hello","there"]`,
        Output:`["there"]`
    },
    {
        id: 130,
        value: `Given a number ‘n’ print the powers of it until 100 and filter out the values of the power where sum is less than 10.`,
        PreReq: ["Advanced Functions"],
        Objective:`
        Syntax: filter(function, list)
        • The function filter(f,l) needs a function f as its first argument. f returns a Boolean value, i.e. either True or False. 
        • This function will be applied to every element of the list l. 
        • Only if f returns True will the element of the list be included in the result list.
        `,
        YouTubeLink: "",
        Input:"",
        Output:`[16,25,36,49,64,81,100]`
    },

]
    
    
    export default PythonQuestionData;