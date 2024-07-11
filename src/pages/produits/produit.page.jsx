import axios from 'axios';
import React,{useState,useEffect} from 'react';


const  Produits = ()=> {
  const [produits,setProduits]=useState([]);

        const getTasks = async (params)=>{
    try {
       const {data} = await axios.get(`http://127.0.0.1:4000/listeDesProduits`)
       setProduits(data)

      } catch (error){

      }
      }
      useEffect(()=>{
        getTasks ();
       },[]);
       console.log(produits)

       const supprimerProduits = async (id) => {
        try {
               await axios.delete(`http://127.0.0.1:4000/SuppressionProduits/${id}`)
              getTasks();
        
      
        } catch (error) {
        
        }
      }
      

  return (
    <div>
       <div class="container-xxl flex-grow-1 container-p-y">
       <h4 className="fw-bold py-3 mb-4">
  <span className="text-muted fw-light">Tableau de bord /</span> Produits
</h4>
                  <center>
            <div style={{marginBottom:'10px'}} >
                        <a button type="button" href='/dashboard/creerProduits' class="btn btn-success">Ajouter un Produit</a>
                        </div>
                        </center>

      <div className="card">
  <div className="table-responsive text-nowrap">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>_id</th>
          <th>NOM</th>
          <th>PRIX</th>
          <th>QUANTITE</th>
          <th>DESCRIPTION</th>
          <th>PHOTO</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody className="table-border-bottom-0">
      {produits.length > 0 ? (
        produits.map((produits, index) => (
        <tr>
        <td>  { produits._id }    </td>
        <td>  {  produits.nom  }    </td>
        <td>  { produits.prix   }    </td>
        <td>  {produits.quantite}    </td>
        <td>  {produits.description} </td>
        <td>  { produits.photo }    </td>
         <td>  {produits.action}    </td>
      
        <td>
            <div className="dropdown">
              
              <div >
                <a className="dropdown-item" >
                  <i className="bx bx-edit-alt me-1"/> Edit
                </a>
                <a className="dropdown-item" onClick={()=>supprimerProduits(produits._id)} >
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

export default Produits;

