// Simple API stubs for future backend. Save as server.js and run with `node server.js`
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());


let students = []; // replace with DB in production


app.get('/api/students', (req,res) => res.json(students));
app.post('/api/students', (req,res) => { students.push(req.body); res.json({ success:true }); });
app.put('/api/students/:id', (req,res) => { const id = req.params.id; students = students.map(s => s.studentId===id ? req.body : s); res.json({ success:true }); });
app.delete('/api/students/:id', (req,res) => { const id=req.params.id; students = students.filter(s=>s.studentId!==id); res.json({ success:true }); });


app.listen(3000, ()=> console.log('API running on http://localhost:3000'));