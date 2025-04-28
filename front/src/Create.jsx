import React, { useState } from 'react'
import { useActionData, useNavigate } from 'react-router-dom'
import  axios  from 'axios';
function Create() {
    const [values, setValues] = useState({
        num: '',
        nom: '',
        jour: '',
        taux: ''

    })
const navigate = useNavigate();

const handleSubmit = (e) => {
 
    e.preventDefault();
    axios.post('http://localhost:8081/employe', values )
    .then(res =>
        
        {console.log(res);navigate('/')})
    .catch(err => console.log(err))

}  



    return (
        <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
            <div className='w-60 bg-white rounded p-3'>
                <form onSubmit={handleSubmit}>
                    <h2>Ajouter d'autre Employé</h2>

                    <div className='mb-2'>
                        <label htmlFor=''>Numéro de l'employé</label>
                        <input type="text" placeholder='                  Numéro' className='form-control'
                            onChange={e => setValues({ ...values, num: e.target.value })}></input>
                    </div>

                    <div className='mb-2'>
                        <label htmlFor=''>Nom de l'employé</label>
                        <input type="text" placeholder='                  Nom' className='form-control'
                            onChange={e => setValues({ ...values, nom: e.target.value })}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor=''>Nombre de jours</label>
                        <input type="number" placeholder='                  Nombre de jours' className='form-control'
                            onChange={e => setValues({ ...values, jour: e.target.value })}></input>
                    </div>
                    <div className='mb-2'>
                    <label htmlFor=''> Taux journaliers</label>
                        <input type="number" placeholder='                  Taux journaliers' className='form-control'
                            onChange={e => setValues({ ...values, taux: e.target.value })}></input>
                    </div>

                    <button className='btn btn-success'>AJOUTER</button>
                </form>

            </div>
        </div>
    )
}

export default Create
