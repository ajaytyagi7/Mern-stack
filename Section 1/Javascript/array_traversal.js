const nums=[3,7,9,4,7,1,5];

for(let i=0; i<nums.length;i++){

    console.log(nums[i]);
}


console.log("--------------\n");
for(let n of nums){
   console.log(n);
}


console.log("----------");

nums.forEach((n)=>{ console.log(n)} );

//let find 5

for(let n of nums){
    if(n===5){
         console.log('found 5');
    }
}

//map  function (for squre)


let newArr =nums.map((n)=>{return n**2});
console.log(newArr);


const prices=[20,46,600,7440,1800,2440,2840];
//[2,4,6,]
let newarr =prices.map((n)=>{return n-n/10});
    console.log(newarr);

    const names=['raju','ramu','kaliya','shamu'];
    let newnames=names.map((n) => {return n.toUpperCase()});
    console.log(newnames);
    

    //filter function


    const allprices=[23000,4600,8570,1200,1433,649,4945,200];
    //filter all price which are greater than 2000
    const budgetprices= allprices.filter((p)=>{ return p>2000});
        console.log(budgetprices);


        const budprices= allprices.filter((p)=>{ return p>2000 && p<5000});
        console.log(budprices);

        


    


