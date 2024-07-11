import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Categorie() {

  const [categorie,setCategorie] = useState([]);

  const getTasks = async (params) => {
    try {
      const {data} = await axios.get(`http://127.0.0.1:4000/listeDesCategories`)
      setCategorie(data)

    } catch (error) {
    
    }
  }
  
  useEffect(() => {
   getTasks();
  },[]);
console.log(categorie)

const supprimerCategorie = async (id) => {
  const confirmation = window.confirm('Êtes-vous sûr de vouloir supprimer cette catégorie ?');
    if (!confirmation) return;
  try {
         await axios.delete(`http://127.0.0.1:4000/SuppressionCategorie/${id}`)
        getTasks();
  

  } catch (error) {
  
  }
}


  return (
 <div>
       <div class="container-xxl flex-grow-1 container-p-y">
       <h4 className="fw-bold py-3 mb-4">
  <span className="text-muted fw-light">Tableau de bord /</span> Categorie
</h4>
                  <center>
            <div style={{marginBottom:'10px'}} >
                        <a button type="button" href='/dashboard/createCategorie' class="btn btn-success">Ajouter une Categorie</a>
                        </div>
                        </center>
      <div className="card">
  <div className="table-responsive text-nowrap">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>id</th>
          <th>Libelle</th>
          <th>Action</th>
       </tr>
      </thead>
      <tbody className="table-border-bottom-0">

      {categorie.length > 0 ? (
        categorie.map((categorie, index) => (

            <tr>
              <td>{categorie._id}</td>
              <td>{categorie.libelle}</td>
           <td>
            <div>
             
              <div>
                <a className="dropdown-item" href="javascript:void(0);">
                  <i className="bx bx-edit-alt me-1" /> Editer
                </a>
                <a className="dropdown-item" onClick={()=>supprimerCategorie(categorie._id)}>
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
  )
   };
export default Categorie;
