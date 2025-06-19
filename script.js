//Higher order array method
const social = ["Twitter", "Facebook", "Linkedin", "Instagram"];

// social.forEach(function(item) {
//   console.log(item);
// });

//using arrow funtion
// social.forEach((item)=>console.log(item));

social.forEach((item, index, arr) => console.log(`${index}-${item}`, arr));

function socialLogs(social) {
  console.log(social);
}
social.forEach(socialLogs);

const socialObj = [
  { name: "Twitter", url: "https://twitter.com" },
  { name: "Facebook", url: "https://facebook.com" },
  { name: "Instagram", url: "https://instagram.com" },
  { name: "Likedin", url: "https://linkedin.com" },
];
//array.forEach()
socialObj.forEach((item) => {
  console.log(item);
});

//array.filter()
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evennumber = numbers.filter((num) => {
//   return num % 2 === 0;
// });
//shorter version
// const evennumber = numbers.filter((num) => num % 2 === 0);

//same with forEach()
// const evennumber=[];
// numbers.forEach((num)=>{
//   if (num%2===0){
//     evennumber.push(num);
//   }
// })
// console.log(evennumber);

const companies = [
  { name: "companyone", category: "finance", start: 1981, end: 2004 },
  { name: "companytwo", category: "Retail", start: 1992, end: 2008 },
  { name: "companythree", category: "Auto", start: 1999, end: 2007 },
  { name: "companyfour", category: "Retail", start: 1989, end: 2010 },
  { name: "companyfive", category: "Technogy", start: 2009, end: 2014 },
  { name: "companysix", category: "finance", start: 1987, end: 2010 },
  { name: "companyseven", category: "Auto", start: 1986, end: 1996 },
  { name: "companyeight", category: "Technogy", start: 2011, end: 2016 },
  { name: "companynine", category: "Retail", start: 1981, end: 1989 },
];
//Get only Retail companies:
const retailCompanies = companies.filter(
  (company) => company.category === "Retail"
);
console.log(retailCompanies);

//get the companies detail that started in or after 1980 and ended
//in or before 2005
const earlycompanies = companies.filter(
  (company) => company.start >= 1980 && company.end <= 2005
);
console.log(earlycompanies);

//companies that lasted 10 or more
const longcompanies = companies.filter(
  (company) => company.end - company.start >= 10
);
console.log(longcompanies);

//array.map()
/*The map() method of Array instances creates a new array populated
with the results of calling a provided function on every element in 
 the calling array*/

const nums = [1, 2, 3, 4, 5];
const doubleNumbers = nums.map((n) => n * 2);
console.log(doubleNumbers);

//same with forEach()
const doubleNumbers2 = [];
nums.forEach((n) => doubleNumbers2.push(n * 2));
console.log(doubleNumbers2);
const companies1 = [
  { name: "companyone", category: "finance", start: 1981, end: 2004 },
  { name: "companytwo", category: "Retail", start: 1992, end: 2008 },
  { name: "companythree", category: "Auto", start: 1999, end: 2007 },
  { name: "companyfour", category: "Retail", start: 1989, end: 2010 },
  { name: "companyfive", category: "Technogy", start: 2009, end: 2014 },
  { name: "companysix", category: "finance", start: 1987, end: 2010 },
  { name: "companyseven", category: "Auto", start: 1986, end: 1996 },
  { name: "companyeight", category: "Technogy", start: 2011, end: 2016 },
  { name: "companynine", category: "Retail", start: 1981, end: 1989 },
];

//create an new array of comapany name
const companyName = companies1.map((company) => company.name);
console.log(companyName);

//create an with company catagory
const companyinfo = companies1.map((company) => {
  return {
    name: company.name,
    category: company.category,
  };
});
console.log(companyinfo);
//create an array of an object with name and length of each company in years
const companyYears = companies1.map((company) => {
  return {
    name: company.name,
    length: company.end - company.start + " Years",
  };
});
console.log(companyYears);

//chain map method
const squareAnddubel = nums.map((n) => Math.sqrt(n)).map((sqrt) => sqrt * 2);
console.log(squareAnddubel);

//brif
const squareAnddubel2 = nums
  .map(function (n) {
    return Math.sqrt(n);
  })
  //below func takes the above sqrt of n as params
  .map(function (sqrt) {
    return sqrt * 2;
  })
  .map(function (sqrtduble) {
    return sqrtduble * 3;
  });
console.log(squareAnddubel2);

//chaining differet method
const evenduoble = numbers.filter((n) => n % 2 === 0).map((even) => even * 2);
console.log(evenduoble);

//array.reduce()
/*the .reduce() function is take previus value and current
 value and initial value at last or starting */
const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers1.reduce(function (accumulator, currentvalue) {
  return accumulator + currentvalue;
}, 0); //initail value is 0
console.log(sum);
// const sum1 = numbers1.reduce((acc, cv) => acc + cv, 0);
// console.log(sum1);

//using for loop
const sum3 = () => {
  let acc = 0;
  for (const cv of numbers1) {
    acc = acc+cv;
  }
  return acc;
};
console.log(sum3());

const cart=[
  {id:1, name:'product 1', price:130},
  {id:2, name:'product 2', price:150},
  {id:3, name:'product 3', price:200},
]
const cartSum=cart.reduce((acc,cv)=> acc+cv.price,0);
console.log(cartSum);