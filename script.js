let students = JSON.parse(localStorage.getItem("students")) || [];
if (editIndex === null) {
students.push(student);
} else {
students[editIndex] = student;
editIndex = null;
document.getElementById("submitBtn").innerText = "Add Student";
}


saveData();
updateTable();
clearFields();
}


function updateTable() {
const table = document.getElementById("studentTable");
table.innerHTML = "";


students.forEach((s, index) => {
table.innerHTML += `
<tr>
<td>${s.name}</td>
<td>${s.reg}</td>
<td>${s.dept}</td>
<td>
<button class="action-btn edit-btn" onclick="editStudent(${index})">Edit</button>
<button class="action-btn delete-btn" onclick="deleteStudent(${index})">Delete</button>
</td>
</tr>`;
});
}


function editStudent(i) {
document.getElementById("name").value = students[i].name;
document.getElementById("reg").value = students[i].reg;
document.getElementById("dept").value = students[i].dept;


editIndex = i;
document.getElementById("submitBtn").innerText = "Update Student";
}


function deleteStudent(i) {
students.splice(i, 1);
saveData();
updateTable();
}


function clearFields() {
document.getElementById("name").value = "";
document.getElementById("reg").value = "";
document.getElementById("dept").value = "";
}


function saveData() {
localStorage.setItem("students", JSON.stringify(students));
}
function toggleDarkMode() {
document.body.classList.toggle('dark-mode');
}
function searchStudent() {
let text = document.getElementById("search").value.toLowerCase();
let rows = document.querySelectorAll("#studentTable tr");


rows.forEach(r => {
let name = r.children[0].innerText.toLowerCase();
r.style.display = name.includes(text) ? "" : "none";
});
}
function exportCSV() {
let csv = "Name,Register,Department
";
students.forEach(s => {
csv += `${s.name},${s.reg},${s.dept}
`;
});


let blob = new Blob([csv], { type: "text/csv" });
let link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "students.csv";
link.click();
}
function login() {
let user = document.getElementById("username").value;
let pass = document.getElementById("password").value;


if(user === "admin" && pass === "1234"){
localStorage.setItem("logged", true);
window.location.href = "index.html";
} else {
document.getElementById("error").innerText = "Invalid Login";
}
}
function exportCSV() {
let csv = "Name,Register,Department
";
students.forEach(s => {
csv += `${s.name},${s.reg},${s.dept}
`;
});
let students = JSON.parse(localStorage.getItem('students')) || [];
});
}


function viewStudent(i){
const s = students[i];
alert(JSON.stringify(s, null, 2));
}


function editStudent(i){
const s = students[i];
editIndex = i;
document.getElementById('s_id').value = s.studentId;
document.getElementById('name').value = s.personal.name;
document.getElementById('reg').value = s.personal.regNo;
document.getElementById('dept').value = s.personal.department;
document.getElementById('course').value = s.personal.course;
document.getElementById('year').value = s.personal.year;
document.getElementById('sem').value = s.personal.semester;
document.getElementById('gender').value = s.personal.gender;
document.getElementById('blood').value = s.personal.bloodGroup;
document.getElementById('dob').value = s.personal.dob;


document.getElementById('father_name').value = s.family.father.name;
document.getElementById('father_occ').value = s.family.father.occupation;
document.getElementById('father_qual').value = s.family.father.qualification;
document.getElementById('mother_name').value = s.family.mother.name;
document.getElementById('mother_occ').value = s.family.mother.occupation;
document.getElementById('mother_qual').value = s.family.mother.qualification;
document.getElementById('siblings').value = s.family.siblings.map(x=>`${x.name}|${x.age}|${x.occupation}|${x.relation}`).join(', ');


document.getElementById('marks_subjects').value = s.marks.subjects.map(x=>x.subject).join(',');
document.getElementById('marks_internals').value = s.marks.subjects.map(x=>x.internal).join(',');
document.getElementById('marks_externals').value = s.marks.subjects.map(x=>x.external).join(',');


document.getElementById('submitBtn').innerText = 'Update Student';
}


function deleteStudent(i){ if(!confirm('Delete this student?')) return; students.splice(i,1); saveData(); updateTable(); }


function clearForm(){
['s_id','name','reg','dept','course','year','sem','gender','blood','dob','father_name','father_occ','father_qual','mother_name','mother_occ','mother_qual','siblings','marks_subjects','marks_internals','marks_externals'].forEach(id=>{ if(document.getElementById(id)) document.getElementById(id).value=''; });
}


function searchStudent(){ let text=document.getElementById('search').value.toLowerCase(); document.querySelectorAll('#studentTable tr').forEach(r=>{ r.style.display = r.children[1].innerText.toLowerCase().includes(text) || r.children[2].innerText.toLowerCase().includes(text) ? '' : 'none'; }); }


function exportAllJSON(){ const data = JSON.stringify(students, null, 2); const blob = new Blob([data], {type:'application/json'}); const link = document.createElement('a'); link.href = URL.createObjectURL(blob); link.download = 'students_full.json'; link.click(); }


function importJSON(e){ const file = e.target.files[0]; if(!file) return; const reader = new FileReader(); reader.onload = (ev)=>{ try{ const arr = JSON.parse(ev.target.result); if(Array.isArray(arr)) { students = arr; saveData(); updateTable(); alert('Imported '+arr.length+' students'); } else alert('Invalid JSON format'); } catch(err){ alert('Error parsing JSON'); } }; reader.readAsText(file); }
// Bulk sample generator for many records
function generateSample(n=100){
const depts = ['Mechanical','Civil','EEE','CSE','ECE'];
for(let i=0;i<n;i++){
const s = {
studentId: uid('STU'),
personal: { name: `Student ${Date.now()%100000}_${i}`, regNo: `R${Math.floor(Math.random()*100000)}`, department: depts[i%depts.length], course: 'B.Tech', year: (i%4)+1, semester: ((i%8)+1), gender: i%2===0?'Male':'Female', bloodGroup:['A+','B+','O+'][i%3], dob: '2003-01-01' },
family: { father: {name:'Father '+i, occupation:'Worker', qualification:'HS'}, mother:{name:'Mother '+i, occupation:'Home', qualification:'HS'}, siblings:[] },
marks: { subjects: [{subject:'Maths', internal:30, external:60, total:90}], internals:[], semesterExams:[] }, createdAt: new Date().toISOString()
};
students.push(s);
}
saveData(); updateTable(); alert(n+' students generated');
}


let blob = new Blob([csv], { type: "text/csv" });
let link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "students.csv";
link.click();
}