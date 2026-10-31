const studentList = document.getElementById("student-list");
studentList.innerHTML = "<p>Loading students...</p>";

fetch("https://jsonplaceholder.typicode.com/users")
.then ((response) => {// converts the API response
    return response.json();
})
.then ((data) => { 
    // receives that converted data 
    studentList.innerHTML = "";
    // The empty string clears the loading message before the student cards are added 
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
    studentList.innerHTML = "<p> Oops! something went wrong. Please try again.</p>";
console.log("error:",error);
});


