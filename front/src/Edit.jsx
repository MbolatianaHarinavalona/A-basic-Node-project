import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'; 
 

function Edit() {




  


    const{idRecup}=useParams(); 
    const navigate = useNavigate();



    
    useEffect(() => {
        axios.get('http://localhost:8081/edit/'+ idRecup) 
            .then(res => {
                console.log(res)
                setValues( {...values, num:res.data[0].numEmp,
                                       nom:res.data[0].nom,
                                       jour:res.data[0].nombreJour,
                                       taux:res.data[0].taux
                
                });

            })
            .catch(err => console.log(err))
    }, [])

    const [values, setValues] = useState({
        num: '',
        nom: '',
        jour: '',
        taux:  ''

    })

const handleUpdate = (event) =>{
    event.preventDefault();
    axios.put('http://localhost:8081/update/'+idRecup , values)
    .then (res=>{
        console.log(res)
        navigate('/')
    }).catch (err => console.log(err))
}


  



  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
    <div className='w-60 bg-white rounded p-3'>
        <form  onSubmit={handleUpdate}>
            <h2>Modifier information d' Employé</h2>

            <div className='mb-2'>
                <label htmlFor=''>Numéro de l'employé</label>
                <input type="text" placeholder='                  Numéro' className='form-control'
                    onChange={e => setValues({ ...values, num: e.target.value })} disabled='disabled' value={values.num}></input>
            </div>

            <div className='mb-2'>
                <label htmlFor=''>Nom de l'employé</label>
                <input type="text" placeholder='                  Nom' className='form-control'
                    onChange={e => setValues({ ...values, nom: e.target.value })} value={values.nom}></input>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Nombre de jours</label>
                <input type="number" placeholder='                  Nombre de jours' className='form-control'
                    onChange={e => setValues({ ...values, jour: e.target.value })} value={values.jour}></input>
            </div>
            <div className='mb-2'>
            <label htmlFor=''> Taux journaliers</label>
                <input type="number" placeholder='                  Taux journaliers' className='form-control'
                    onChange={e => setValues({ ...values, taux: e.target.value })} value={values.taux} ></input>
            </div>

            <button className='btn btn-success'>MODIFIER</button>
        </form>

    </div>
</div>
  )
}

export default Edit
