import axios from 'axios';
import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


const  Fournisseur = ()=> {
  const [fournisseur,setFournisseur]=useState([]);
  const navigate = useNavigate();
        const getFournisseur = async (params)=>{
    try {
       const {data} = await axios.get(`http://127.0.0.1:4000/listeDesFournisseurs`)
       setFournisseur(data)

      } catch (error){

      }
      }
      useEffect(()=>{
        getFournisseur ();
       },[]);
       console.log(fournisseur)

        const editerFournisseurs = async (id) => {
          try {
            const { data } = await axios.get(` http://127.0.0.1:4000/DetailsFournisseurs/${id} `);
              setFournisseur(data);
              navigate('/dashboard/creerFournisseur')
          } catch (error) {
            console.log(error);
          }
        };
       
        const supprimerFournisseur = async (id) => {
        const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?');
    if (!confirmation) return;
        try {
               await axios.delete(`http://127.0.0.1:4000/SuppressionFournisseurs/${id}`)
               getFournisseur();
        
      
        } catch (error) {
        
        }
      }
      

  return (
    <div>
       <div class="container-xxl flex-grow-1 container-p-y">
       <h4 className="fw-bold py-3 mb-4">
  <span className="text-muted fw-light">Tableau de bord /</span>Fournisseur
</h4>
                  <center>
            <div style={{marginBottom:'10px'}} >
                        <a button type="button" href='/dashboard/creerFournisseur' class="btn btn-success">Ajouter un Fournisseur</a>
                        </div>
                        </center>

      <div className="card">
  <div className="table-responsive text-nowrap">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>_id</th>
          <th>NOM</th>
          <th>TELEPHONE</th>
          <th>EMAIL</th>
          <th>ACTION</th>

        </tr>
      </thead>
      <tbody className="table-border-bottom-0">
      {fournisseur.length > 0 ? (
        fournisseur.map((fournisseur, index) => (
        <tr>
        <td> { fournisseur._id } </td>
       <td> {fournisseur.Nom} </td>
        <td> {fournisseur.telephone} </td>
        <td> {fournisseur.email} </td>
       
       <td>
            <div className="dropdown">
              
              <div >
                <a className="dropdown-item" onClick={()=>editerFournisseurs(fournisseur._id)}>
                  <i className="bx bx-edit-alt me-1"/> Edit
                </a>
                <a className="dropdown-item" onClick={()=>supprimerFournisseur(fournisseur._id)} >
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

export default Fournisseur;

