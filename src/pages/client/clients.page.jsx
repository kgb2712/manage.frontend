import axios from 'axios';
import React,{useState,useEffect} from 'react';


const  Article = ()=> {
  const [personnels,setPersonnels]=useState([]);

        const getTasks = async (params)=>{
    try {
       const {data} = await axios.get(`http://127.0.0.1:4000/listeDesPersonnes`)
       setPersonnels(data)

      } catch (error){

      }
      }
      useEffect(()=>{
        getTasks ();
       },[]);
       console.log(personnels)

       const supprimerPersonnels = async (id) => {
        try {
               await axios.delete(`http://127.0.0.1:4000/SuppressionPersonnel/${id}`)
              getTasks();
        
      
        } catch (error) {
        
        }
      }
      

  return (
    <div>
       <div class="container-xxl flex-grow-1 container-p-y">
       <h4 className="fw-bold py-3 mb-4">
  <span className="text-muted fw-light">Tableau de bord /</span> Personnels
</h4>
                  <center>
            <div style={{marginBottom:'10px'}} >
                        <a button type="button" href='/dashboard/creerarticle' class="btn btn-success">Ajouter un Personnel</a>
                        </div>
                        </center>

      <div className="card">
  <div className="table-responsive text-nowrap">
    <table className="table table-hover">
      <thead>
        <tr>
          <th>_id</th>
          <th>nom</th>
          <th>prenom</th>
          <th>telephone</th>
          <th>photo</th>
          <th>role</th>
          <th>age</th>
          <th>action</th>
        </tr>
      </thead>
      <tbody className="table-border-bottom-0">
      {personnels.length > 0 ? (
        personnels.map((personnels, index) => (
        <tr>
        <td>  { personnels._id }    </td>
        <td>  {  personnels.nom  }    </td>
        <td>  { personnels.prenom   }    </td>
        <td>  {personnels.telephone }    </td>
        <td>  { personnels.photo   }    </td>
         <td>  {  personnels.role  }    </td>
        <td>  { personnels.age }    </td>
        <td>
            <div className="dropdown">
              
              <div >
                <a className="dropdown-item" >
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

export default Article;
