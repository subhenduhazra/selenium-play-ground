const students = [
    {
      name: "Aarav Mehta",
      age: 20,
      phone: "9876543210",
      city: "Mumbai"
    },
    {
      name: "Diya Sharma",
      age: 22,
      phone: "8765432198",
      city: "Delhi"
    },
    {
      name: "Rahul Verma",
      age: 19,
      phone: "7654321987",
      city: "Bangalore"
    },
    {
      name: "Sneha Patel",
      age: 21,
      phone: "9988776655",
      city: "Ahmedabad"
    },
    {
      name: "Karan Singh",
      age: 23,
      phone: "9123456789",
      city: "Chandigarh"
    },
    {
      name: "Meera Nair",
      age: 20,
      phone: "8899776655",
      city: "Kochi"
    },
    {
      name: "Aniket Reddy",
      age: 22,
      phone: "9012345678",
      city: "Hyderabad"
    },
    {
      name: "Tanya Desai",
      age: 21,
      phone: "9345678123",
      city: "Pune"
    },
    {
      name: "Vikram Joshi",
      age: 24,
      phone: "9234567890",
      city: "Jaipur"
    },
    {
      name: "Isha Khan",
      age: 20,
      phone: "9356781245",
      city: "Lucknow"
    }
  ];
  

function populateList(){
    let str="";
    for(let i = 0; i<students.length; i++){
        str+="<div class='studentItem' onClick=displayStudent('"+i+"')>"+students[i].name+"</div>"
    }
    document.getElementById("student_list").innerHTML = str;
};
populateList();

function displayStudent(index){
    displaySpinner();
    window.setTimeout(()=>{
        let student = students[index];
        let str = `<div id="details_actual_area">
                    <header>${student.name}</header>
                    <div id="details_body">
                        <div>Name: ${student.name}</div>
                        <div>Age: ${student.age}</div>
                        <div>Phone: ${student.phone}</div>
                        <div>City: ${student.city}</div>
                    </div>
                </div>`;
        document.getElementById("details_area").innerHTML = str;
    },1000*(2+Math.random()*3));
}
function displaySpinner(){
    document.getElementById("details_area").innerHTML="<div id='spin_wheel'></div>"
}
