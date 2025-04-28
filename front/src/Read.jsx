import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Read() {
    const { idRecup } = useParams();
    const idvao = idRecup;
    const [employe, setEmploye] = useState([])

    useEffect(() => {
        axios.get('http://localhost:8081/read/' + idvao)
            .then(res => {
                console.log(res)
                setEmploye(res.data[0]);

            })
            .catch(err => console.log(err))
    }, [])
    return (
        <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
            <div className='w-60 bg-white rounded p-3'>
                <h4>Détails à propos de l'employé</h4>
                <h3 className='d-flex   justify-content-center '>  {employe.nom}</h3>
                <p>
                    <h6>Numéro: {employe.numEmp}</h6>

                    <h6>Nombre de jours : {employe.nombreJour}</h6>
                    <h6>Taux journaliers : {employe.taux}</h6>
                    <h5>Salaire :  {(employe.taux) * (employe.nombreJour)} Ar</h5>
                </p>

                <Link to='/' className='btn btn-primary '>Retour</Link>
                <Link to={'/edit/' + employe.numEmp} className='btn btn-info mx-3'>Modifier</Link>


            </div>
        </div>
    )
}

export default Read
