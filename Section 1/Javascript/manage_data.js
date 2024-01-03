const phonelist=[

    { brand:'samsung',   modle : 'f23',         price:'23000',   color:['black','red','blue']},
    { brand:'apple',     modle : 'iphone14',     price:'83000', color:['black','white','blue']},
    { brand:'apple',      modle : 's4',          price:'43000',        color:['black','yellow','blue']},
    { brand:'nokia',     modle : 'n1200',       price:'13000',    color:['gold','red','blue']},
    { brand:'vivo',      modle : 'T1',          price:'34000',      color:['black','red','red']},
];

const bugetphone=phonelist.filter((phone)=>{return phone.price<=20000});

console.log(bugetphone);

//filter phone having red color

console.log([2,5,8,3,1].includes(50));

const colorphone=phonelist.filter((phone)=>{return phone.color.includes ('red')});
console.log(colorphone);

//flter brand name

const brandname='aple'
const brandphone = phonelist.filter((phone)=>{return phone.brand.toLowerCase()=== brandname.toLowerCase()});
const brandphone2 = phonelist.filter((phone)=>{return phone.brand.toLowerCase().includes(brandname.toLowerCase())});//for appl type give right output
console.log(brandphone2);


