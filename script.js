const promise = new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    console.log("async task complete");
    resolve();
  }, 1000);
});

promise.then(() => {
  console.log("promise consumed..");
});

const getUser = new Promise((resolve, reject) => {
  //Do some async task
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ name: "john", age: 30 });
    } else {
      reject("Error:something went wrong!");
    }
  }, 1000);
});

getUser.then((user) => console.log(user)).catch((error) => console.log(error))
  .finally(()=>console.log('The promise has been resolved or rejected'))
console.log("Hello from global scope");
