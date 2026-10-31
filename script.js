const studentList = document.getElementById("student-list");

fetch("https://jsonplaceholder.typicode.com/users")
.then ((response) => {// converts the API response
    return response.json();
})
.then ((data) => { 
    // receives that converted data 
   data.forEach((student) => {
    // forEach() is a JavaScript array method that goes through each item in an array.
    studentList.innerHTML += `
    <div>
        <h2>${student.name}</h2>
        <p>${student.email}</p>
    </div>
        `
;
   });
})
.catch((error) => {
    console.log("Oops, something went wrong:", error);
});


