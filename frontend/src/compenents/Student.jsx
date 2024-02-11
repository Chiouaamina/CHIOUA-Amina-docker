import React , {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Paper,Button } from '@mui/material';


export default function Student() {
  const paperstyle = { padding: '50px 20px', width: 600, margin: "20px auto", textAlign: "center" };
    const[nom,setNom] = useState('')
    const[prenom,setPrenom] = useState('')
    const[student,setStudents]= useState([])
    const handleClick=(e)=>{
        e.preventDefault() 
        const student = {nom,prenom};
        console.log(student)
        fetch("http://localhost:8080/student/add",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(student)
        }).then(()=>{
            console.log("new student added")
        })
    }

useEffect(()=>{
    fetch("http://localhost:8080/student/getAll")
    .then(res=>res.json())
    .then((result)=>{
        setStudents(result);
    }
    )
},[]
)

  return (
    <Container>
      <Paper elevation={3} style={paperstyle}>
        <h1 style={{ color: "blue" }}><u>Ajouter etudiant</u></h1>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Nom" variant="outlined" fullWidth
          value={nom}
          onChange={(e)=>setNom(e.target.value)}
          />
          <TextField id="outlined-basic" label="Prenom" variant="outlined" fullWidth 
          value={prenom}
          onChange={(e)=>setPrenom(e.target.value)}
          />
          <Button variant="contained" color="secondary" onClick={handleClick}>Ajouter</Button>
        </Box>
        
      </Paper>
      <h1>les etudiants</h1>
      <Paper elevation={3} style={paperstyle}>
        {
            student.map(student=>(
                <Paper elevation={6} style={{margin:"10px",padding:"15px", textAlign:"left"}} key={student.id}>
                        Id: {student.id} <br/>
                        Nom: {student.nom}<br/>
                        Prenom: {student.prenom}<br/>
                </Paper>
            ))
        }
      </Paper>
    </Container>
  );
}
