import axios from 'axios';
import React, {useEffect,useState} from 'react';

const  Commande = ()=> {
  const [commande,setCommande] = useState([]);

  const getTasks = async (params) => {
    try {
      const {data} = await axios.get(`http://127.0.0.1:4000/listeDesCommandes`)
      setCommande(data)

    } catch (error) {
    
    }
  }
  
  useEffect(() => {
   getTasks();
  },[]);
console.log(commande)

const supprimerCommande = async (id) => {
  try {
         await axios.delete(`http://127.0.0.1:4000/SuppressionCommande/${id}`)
        getTasks();
  

  } catch (error) {
  
  }
}

const modifierCommande = async (id) => {
  try {
         await axios.put(`http://127.0.0.1:4000/MiseAJourCommande/${id}`)
        getTasks();
  

  } catch (error) {
  
  }
}



 return (
    <div>
       <div class="container-xxl flex-grow-1 container-p-y">
       <h4 className="fw-bold py-3 mb-4">
  <span className="text-muted fw-light">Tableau de bord /</span> Commande
</h4>
                  <center>
            <div style={{marginBottom:'10px'}} >
                        <a button type="button" href='/dashboard/creercommande' class="btn btn-success">Ajouter une commande</a>
                        </div>
                        </center>

      <div className="card">
  <div className="table-responsive text-nowrap">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>_id</th>
          <th>nomEtPrenomClient</th>
          <th>telephoneClent</th>
          <th>montantCommande</th>
          <th>produit</th>
          <th>montantRecu</th>
          <th>resteMontant</th>
        </tr>
      </thead>
      <tbody className="table-border-bottom-0">
       
      {commande.length > 0 ? (
        commande.map((commande, index) => (

            <tr>
              <td>{commande._id}</td>
              <td>{commande.nomEtPrenomClient}</td>
              <td>{commande.telephoneClient}</td>
              <td>{commande.montantCommande}</td>
              <td>{commande.produits}</td>
              <td>{commande.montantRecu}</td>
              <td>{commande.resteMontant}</td>
           <td>
            <div>
             
              <div>
                <a className="dropdown-item" onClick={()=>modifierCommande(commande._id)}>
                  <i className="bx bx-edit-alt me-1" /> Editer
                </a>
                <a className="dropdown-item" onClick={()=>supprimerCommande(commande._id)}>
                  <i className="bx bx-trash me-1" /> Supprimer
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

export default Commande ;
