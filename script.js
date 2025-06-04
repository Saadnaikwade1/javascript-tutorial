//json(javascript object Notaion)
const post = {
  id: 1,
  titile: "Post one",
  body: "this is the body",
};
//convet to Json string
const str = JSON.stringify(post);
console.log(str.id);

//parse Json
const obj = JSON.parse(str);
console.log(obj.id);

const posts = [
  { id: 1, titile: "Post one", body: "this is the body" },
  { id: 1, titile: "Post one", body: "this is the body" },
];

const str2 = JSON.stringify(posts)
console.log(str2);
