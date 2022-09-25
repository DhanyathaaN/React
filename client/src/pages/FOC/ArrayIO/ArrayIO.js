import styles from "./array.module.css";
import img1 from "./arr1.png";
import img2 from "./arr2.png";

export default function ArrayIO() {
    return (
        <div className={styles.page}>
            <h1>Array</h1>
            <p>{`An array is a data structure which stores a fixed-size sequential collection of elements of the same type. Arrays are used to store multiple values in a single variable, instead of declaring separate variables for each value.

All arrays consist of contiguous memory locations. The lowest address corresponds to the first element and the highest address to the last element.
`}</p>
            <img className={styles.arrimg} src={img1} alt="array" /><br />
            <h3>Declaring Arrays</h3>
            <textarea className={styles.multiline} readOnly rows="1">{`type arrayName [ arraySize ];
`}</textarea> <br />
            <h3>Initializing Arrays</h3>
            <textarea className={styles.multiline} readOnly rows="3">{`double balance[5] = {1000.0, 2.0, 3.4, 7.0, 50.0};

double balance[] = {1000.0, 2.0, 3.4, 7.0, 50.0};
`}</textarea> <br />
            <img className={styles.arrimg} src={img2} alt="array2" /><br />
            <h3>Accessing Array Elements</h3>
            <p>{`An element is accessed by indexing the array name. This is done by placing the index of the element within square brackets after the name of the array. For example :`}</p>
            <textarea className={styles.multiline} readOnly rows="1">{`double salary = balance[9];
`}</textarea> <br />
            <h3>Things to note:</h3>
            <p>{`\u2022 Arrays have 0 as the first index, not 1. In this example, balance[0] is the first element.
\u2022 If the size of an array is n, to access the last element, the n-1 index is used. In this example, balance[4]
\u2022 Suppose the starting address of balance[0] is 2120d. Then, the address of the balance[1] will be 2128d. Similarly, the address of balance[2] will be 
   2136d and so on.

   This is because the size of a float is 8 bytes.`}</p>
            <h2>Input and Output</h2>
            <h3>1. Scanning and printing individual elements of an array</h3>
            <p>{`Regular scanf and printf can be used to scan and print individual elements of an array.
For example:
`}</p>
            <textarea className={styles.multiline} readOnly rows="3">{`scanf("%d", &balance[2]);   // take input and store it in the 3rd element

printf("%d", mark[0]);    // print the value of the 1st element 
`}</textarea> <br />
            <h3>2. Scanning and printing all elements of an array</h3>
            <p>{`For loop can be used to  scan and print all elements of an array at a time.
For example:
`}
            </p>
            <textarea className={styles.multiline} readOnly rows="7">{`// take 5 values from the user and store them in an array

for(int i = 0; i < 5; ++i) {

     scanf("%d", &balance[i]);

  }
`}</textarea> <br />
            <textarea className={styles.multiline} readOnly rows="7">{` // print 5 values from the array

    for(int i = 0; i < 5; ++i) {

         printf("%d\\n", values[i]) 

     }
`}</textarea> <br />
            <h3>Multi-Dimensional Arrays</h3>
            <p>C supports multidimensional arrays. The simplest form of the multidimensional array is the two-dimensional array. Arrays can be three-dimensional also.
            </p>
            <h3>Pointer to an Array</h3>
            <p>A pointer to the first element of an array can be generated by specifying the array name, without any index.</p>
            <h3>Passing Arrays to Functions</h3>
            <p>A function can have a pointer to an array as one of its arguments.
            </p>
        </div>
    );
}