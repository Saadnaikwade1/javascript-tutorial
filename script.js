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
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
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
    name:company.name,
    category:company.category
  };
});
console.log(companyinfo);
