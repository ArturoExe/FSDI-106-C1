
const init = () => {
    console.log("DOM ready..");

    // catch events
    // load previous data

    loadData();


    sayHello("Arturo");

    sumTwo(21,21);

    testValidation();

    printSomeNumbers();

    console.log(sumSomeNumbers());
}

//validation.
function testValidation() {
    let num = 9;

    if(num < 10) {
        console.log("Error, num to low");
        return;
    }

}

//Display a name on the console
const sayHello = (name) => {
    console.log(`Hi there ${name}`);
}

//Sum of two numbers
const sumTwo = (N1,N2) => {  
    return console.log(`The resul is: ${N1+N2}`);
}
//Log numbers from 0 to 20
const printSomeNumbers = () => { 

    for (let i = 0; i <= 20; i++) {
        
        if(i!=7 && i!=13){
            console.log("Number "+i);
        }
        
    }

}

//Return the sum of the list array
const sumSomeNumbers = () => { 

    let list = [12,32,12,456,12,87,345,56,3,7,5678,2,4587,243,09,234,-3,4567,-9,0];
    let sum=0;
    let a=0,b=0;
    for (let i = 0; i < list.length; i++) {
        
        sum=sum+list[i]
        
    }

   for(let i=0; i<list.length;i++){

            a=list[i];
        if(a>b){
            b=a;
        }
   }

   console.log(a)

    return sum;
 }



const loadData = () => {

    console.log("Loading from server!!!");
}

// when the browswer finishes rendering all the html,do this...
window.onload=init;