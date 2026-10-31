fetch ("https://jsonplaceholder.typicode.com/user")
.then ((response) => {
    return response.json();
})
.then ((data) => {
   console.log(data);
})
.catch((error) => {
    console.log("Oops, something went wrong:", error);
});