const registrationForm = document.getElementById("registrationForm");
const button = document.getElementById("buttonInput");
const nameInput = document.getElementById("studentName");
const IdInput = document.getElementById("studentID");
const mailInput = document.getElementById("mailId");
const classInput = document.getElementById("className");
const rollInput = document.getElementById("rollNo");
const result = document.getElementById("savedetails");

button.addEventListener("click", addDetails);

function addDetails() {
  const name = nameInput.value;
  const Id = IdInput.value;
  const mailId = mailInput.value;
  const className = classInput.value;
  const rollNo = rollInput.value;

  

  if (!name || !Id || !mailId || !className || !rollNo) {
    alert("Please fill in all fields before adding a student.");
    return; 
  }


  const studentCard = document.createElement("div");
  studentCard.className = "student-card";

  const nameDetails = document.createElement("p");
  nameDetails.textContent = `Name: ${name}`;
  studentCard.appendChild(nameDetails);

  const idDetails = document.createElement("p");
  idDetails.textContent = `ID: ${Id}`;
  studentCard.appendChild(idDetails);

  const mailDetails = document.createElement("p");
  mailDetails.textContent = `Mail: ${mailId}`;
  studentCard.appendChild(mailDetails);

  const classDetails = document.createElement("p");
  classDetails.textContent = `Class: ${className}`;
  studentCard.appendChild(classDetails);

  const rollDetails = document.createElement("p");
  rollDetails.textContent = `Roll No: ${rollNo}`;
  studentCard.appendChild(rollDetails);

  
  const deleteBtn = document.createElement("button");
  deleteBtn.className = "delete-btn";
  deleteBtn.textContent = "Delete";
  deleteBtn.addEventListener("click", function () {
    studentCard.remove(); 
  });

  
  studentCard.appendChild(deleteBtn);
  
  
  result.appendChild(studentCard);

  
}
