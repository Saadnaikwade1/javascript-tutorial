// exersize
const library = [
  {
    title: "The Road Ahead",
    author: "Bill Gates",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "Rich Dad/Poor Dad",
    author: "Robert kiyosaki",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: "steve jobs",
    author: "Weltor Issacson",
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];
//step2
//set the read value to true
library[0].status.read=true;
library[1].status.read=true;
library[2].status.read=true;
console.log(library);

//step 3
//destucuter the title from the first book and renme the title as firstBook
const {title:firstBook}=library[0];
console.log(firstBook);


//turn the library object into the string
const str=JSON.stringify(library);
console.log(str);
