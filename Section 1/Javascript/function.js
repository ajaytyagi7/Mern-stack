//add num with function
function addNums( a,b){
    c=a+b;
    console.log(c);
}

addNums(45,67);
//addNums(43,57);
//addNums(55,63);
//addNums(85,47);

//Avereage

const getAvg= function( m,n,o,p){
        let sum=m+n+o+p;
        console.log(sum/4)
}
getAvg(45,76,78,90);

//factorial

const factorial=(n)=>{
    let f=1;
    for(let i=2; i<=n; i++){
        f=f*i;
    }
    console.log(f);
    return f;

};
 let ans=factorial(5);
console.log(ans);

//prime number 

// function without parameter,  a function which make a number square
function square() {
    let num = 2
    let sq = num * num
    console.log(sq)
  }
  
  square() 
  
  // function without parameter
  function addTwoNumbers() {
    let numOne = 10
    let numTwo = 20
    let sum = numOne + numTwo
  
    console.log(sum)
  }
  
  addTwoNumbers() 
  

  //name
  function printFullName (){
    let firstName = 'Ajay'
    let lastName = 'Aman'
    let space = ' '
    let fullName = firstName + space + lastName
    console.log(fullName)
}

printFullName();

//perfect squre 

const issqure =function(n){
  return Math.sqrt(n)%1===0;
}
console.log (issqure(16));

//fibonacci series
function printfibonacci(n){
  let x=0, y=1,z,i;
  console.log(x);
  console.log(y)
  for(let )
}
