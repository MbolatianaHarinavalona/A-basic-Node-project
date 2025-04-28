import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Home() {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState({ somme: 0 }); 
  const [data2, setData2] = useState({ min: 0 ,max:0}); // Initialize `data1` as an object with a default value
 
  const navigate = useNavigate();

  const getData = ()=>{
    axios.get('http://localhost:8081/')
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    getData()
  }, []);



  useEffect(() => {
    axios.get('http://localhost:8081/total/')
      .then(res => {
        setData1(res.data[0]); // Update `data1` with the response data
        console.log('2');
      })
      .catch(err => console.log(err));
  }, []);



  useEffect(() => {
    axios.get('http://localhost:8081/min/')
      .then(res => {
        setData2(res.data[0]); // Update `data1` with the response data
        console.log('2');
      })
      .catch(err => console.log(err));
  }, []);
















  const handdleDelete = (id) => {
    axios.delete('http://localhost:8081/delete/' + id)
      .then(res => {
        getData();
        // window.location.reload();
        console.log(res);
      });
  };

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-60 bg-white rounded p-3'>
        <h2>Liste des employés</h2>
        <div className='d-flex justify-content-end'>
          <Link to="/create" className='btn btn-success'>Ajouter Employé</Link>
        </div>
        <table className='table'>
          <thead>
            <tr>
              <th>Numero Employé</th>
              <th>Nom</th>
              <th>Nombre de jours</th>
              <th>Taux journaliers</th>
              <th>Salaire</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {data.map((employe, index) => (
              <tr key={index}>
                <td>{employe.numEmp}</td>
                <td>{employe.nom}</td>
                <td>{employe.nombreJour}</td>
                <td>{employe.taux}</td>
                <td>{employe.taux * employe.nombreJour}</td>
                <td>
                  <Link to={`/read/${employe.numEmp}`} className='btn btn-sm btn-info'>Voir détails</Link>
                  <Link to={`/edit/${employe.numEmp}`} className='btn btn-sm btn-primary mx-2'>Modifier</Link>
                  <button onClick={() => handdleDelete(employe.numEmp)} className='btn btn-sm btn-danger'>Supprimer</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <h6 style={{marginleft:200}}>Salaire minimale : {data2.min} Ar          /  Salaire maximale: {data2.max} Ar</h6>
        <h6 style={{paddingTop:20}}>Salaire total: {data1.somme} Ar</h6>
      </div>
    </div>
  );
}

export default Home;
