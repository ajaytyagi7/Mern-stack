const user= {name:'raju', rollno: 232, email: 'raju3@gmail.com'};

console.log(user.name);
console.log(user['rollno']);
console.log(user.email);
user.location ='lucknow'
user.name= 'raju rastogi'

console.log(user);

user.subject=['math','physics','chemistry','hindi','english'];
console.log(user);

const smartphone={brand:'samsung', modle : 'f23', price:'23000', color:['black','red','blue']}

console.log(smartphone.brand);
console.log(smartphone.modle);
console.log(smartphone.price);
console.log(smartphone.color);

smartphone.price=50000;
smartphone.color[1]='white'
console.log(smartphone)

console.log('________________');

const phonelist=[

    { brand:'samsung',   modle : 'f23',         price:'23000',   color:['black','red','blue']},
    { brand:'apple',     modle : 'iphone14',     price:'83000', color:['black','white','blue']},
    { brand:'lava',      modle : 's4',          price:'43000',        color:['black','yellow','blue']},
    { brand:'nokia',     modle : 'n1200',       price:'13000',    color:['gold','red','blue']},
    { brand:'vivo',      modle : 'T1',          price:'34000',      color:['black','red','red']},
];
console.log(phonelist[0].price);
console.log(phonelist[0].color[2]);

phonelist[2].color[1]= 'pink';

console.log(phonelist[2].color[1]);

console.log('----------------------------');

for(let phone of phonelist){
    
    console.log(phone.brand);
    console.log(phone.color);
}

const brand= phonelist.map((phone)=>{return phone.color});
console.log(brand);

const colorlist = phonelist.map((phone)=>{return phone.color});
console.log(new Set(colorlist.flat()));


const laptop={brand:'asus',modle:'syu23',price:'233333'}
console.log(laptop);

delete laptop.price;
console.log(laptop);