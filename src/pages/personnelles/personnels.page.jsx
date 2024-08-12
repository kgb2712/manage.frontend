import axios from 'axios';
import React,{useState,useEffect} from 'react';
import {Navigate, useNavigate} from 'react-router-dom'


const  Persons = ()=> {
  const [personnel,setPersonnel]=useState([]);
 const navigate = useNavigate();
        const getTasks = async (params)=>{
    try {
       const {data} = await axios.get(`http://127.0.0.1:4000/listeDesPersonnes`)
       setPersonnel(data)

      } catch (error){

      }
      }
      useEffect(()=>{
        getTasks ();
       },[]);
       console.log(personnel)

       const supprimerPersonnels = async (id) => {
        const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette personne ?');
    if (!confirmation) return;
        try {
               await axios.delete(`http://127.0.0.1:4000/SuppressionPersonnel/${id}`)
              getTasks();
        
      
        } catch (error) {
        
        }
      }
    const editerPersonne = async (id)=>{
      navigate (`/dashboard/editePersonnel/${id}`)
    }

      

  return (
    <div>
       <div class="container-xxl flex-grow-1 container-p-y">
       <h4 className="fw-bold py-3 mb-4">
  <span className="text-muted fw-light">Tableau de bord /</span> Personnels
</h4>
                  <center>
            <div style={{marginBottom:'10px'}} >
                        <a button type="button" href='/dashboard/createPersonnelles' class="btn btn-success">Ajouter un Personnel</a>
                        </div>
                        </center>

      <div className="card">
  <div className="table-responsive text-nowrap">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>_id</th>
          <th>NOM</th>
          <th>PRENOM</th>
          <th>TELEPHONE</th>
          <th>PHOTO</th>
          <th>ROLE</th>
          <th>AGE</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody className="table-border-bottom-0">
      {personnel.length > 0 ? (
        personnel.map((personnels, index) => (
        <tr>
        <td>  { personnels._id }    </td>
        <td>  {personnels.nom  }    </td>
        <td>  {personnels.prenom}   </td>
        <td>  {personnels.telephone} </td>
        <td>  {personnels.photo} </td>
        <td>  {personnels.role }</td>
        <td>  {personnels.age} </td>
         
      
        <td>
            <div className="dropdown">
              
              <div >
                <a className="dropdown-item" onClick={()=>editerPersonne(personnels._id )} >
                  <i className="bx bx-edit-alt me-1"/> Edit
                </a>
                <a className="dropdown-item" onClick={()=>supprimerPersonnels(personnels._id)} >
                  <i className="bx bx-trash me-1"/> Supprimer
                </a>
              </div>
            </div>
          </td>
        </tr>
      ))
          ) : (
            <p>Aucune donnée à afficher</p>
      )}
     </tbody>
    </table>
  </div>
</div>
</div>

    </div>
  );
}

export default Persons;

