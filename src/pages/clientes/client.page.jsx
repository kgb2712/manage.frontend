import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate} from 'react-router-dom'


const  Clien = ()=> {
  const [cliente,setCliente]=useState([]);
 const navigate = useNavigate();
 
        const getTasks = async (params)=>{
    try {
       const {data} = await axios.get(`http://127.0.0.1:4000/listeDesClients`)
       setCliente(data)

      } catch (error){

      }
      }
      useEffect(()=>{
        getTasks ();
       },[]);
       console.log(cliente)

       const supprimerClientes = async (id) => {
        const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cet client ?');
    if (!confirmation) return;
        try {
               await axios.delete(`http://127.0.0.1:4000/SuppressionClient/${id}`)
              getTasks();
        
      
        } catch (error) {
        
        }
      }
    const editerCliente = async (id)=>{
      navigate (`/dashboard/editionClien/${id}`)
    }

      

  return (
    <div>
       <div class="container-xxl flex-grow-1 container-p-y">
       <h4 className="fw-bold py-3 mb-4">
  <span className="text-muted fw-light">Tableau de bord /</span> Clients
</h4>
                  <center>
            <div style={{marginBottom:'10px'}} >
                        <a button type="button" href='/dashboard/ajouterClient' class="btn btn-success">Ajouter un Client</a>
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
          <th>action</th>
        </tr>
      </thead>
      <tbody className="table-border-bottom-0">
      {cliente.length > 0 ? (
        cliente.map((cliente, index) => (
        <tr>
        <td>  { cliente._id }    </td>
        <td>  {cliente.nom  }    </td>
        <td>  {cliente.prenom}   </td>
        <td>  {cliente.telephone} </td>
         
      
        <td>
            <div className="dropdown">
              
              <div >
                <a className="dropdown-item" onClick={()=>editerCliente(cliente._id )} >
                  <i className="bx bx-edit-alt me-1"/> Edit
                </a>
                <a className="dropdown-item" onClick={()=>supprimerClientes(cliente._id)} >
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

export default Clien;

