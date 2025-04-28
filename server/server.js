import express from  'express';
import mysql from 'mysql'
import cors from 'cors'

const app = express();
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
   host: "localhost",
   user:"root",
   password:"",
   database:"baseihm"


})
 






app.get('/min', (req, res) =>{
    const sql =' select min(nombreJour*taux) as min ,max(nombreJour*taux) as max  from employe';
    db.query(sql, (err,result) => {
    if (err) return res.json({Message:"Error du serveur akiaNTSSSS"});
    return res.json(result);
  
    })
  
  })











app.post('/employe' ,(req,res) =>
{ const sql= "insert into employe(numEmp,nom,nombreJour,taux) values (?) "
  const values=[
    req.body.num,
    req.body.nom,
    parseInt(req.body.jour),
    parseInt(req.body.taux)
  ]
   db.query(sql,[values],(err,result) => {
   if (err) return res.json(err);
            return res.json(result);
    } )
   


}
)





app.get('/edit/:id', (req, res) =>{
    const sql =' SELECT * from employe where numEmp = ?';
    const idNdray = req.params.id;

    db.query(sql,[idNdray], (err,result) => {
    if (err) return res.json({Message:"Error du serveur akiaAIZEEE"});
    return res.json(result);
  
    })
  
  })



  app.put('/update/:id', (req, res) =>{
    const sql =' Update employe set nom=? ,nombreJour=? ,taux=? where  numEmp=? ';
    const idNdray = req.params.id;
    db.query(sql,[req.body.nom, req.body.jour, req.body.taux,idNdray ], (err,result) => {
   
        if (err) return res.json(err);
    return res.json(result);
  
    })
  
  })





  app.delete('/delete/:id', (req, res) =>{
    const sql =' Delete from employe  where numEmp=? ';
    const idNdray = req.params.id;
    db.query(sql,[idNdray], (err,result) => {
   
   if (err) return res.json(err);
    return res.json(result);
  
    })
  
  })


app.put('edit/')







app.get('/', (req, res) =>{
  const sql =' SELECT * from employe';
  db.query(sql, (err,result) => {
  if (err) return res.json({Message:"Error du serveur akia__satria par défaut de ty no mandeha"});
  return res.json(result);

  })

  app.get('/total', (req, res) =>{
    const sql =' select sum(nombreJour*taux) as somme from employe';
    db.query(sql, (err,result) => {
    if (err) return res.json({Message:"Error du serveur akiaSHHHHHHH"});
    return res.json(result);
  
    })
  
  })
})











app.listen(8081, ()=>{
    console.log("listening");})