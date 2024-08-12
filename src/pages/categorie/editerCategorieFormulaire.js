import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditerCategorie = () => {
  const [categorie, setCategorie] = useState({libelle: "" });
  const [formData, setFormData] = useState({libelle: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();  // Récupération de l'ID à partir de l'URL

  const getCategorie = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:4000/DetaillsCategorie/${id}`);
      setCategorie(data);
      setFormData(data);  // Initialiser le formulaire avec les données de categorie
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCategorie();
  }, [id]);

  const updateCategorie = async (e) => {
    e.preventDefault();
    
    if (!formData.libelle) {
      setError("Le champ libelle est obligatoire.");
      return;
    }


    setError(""); // Clear any previous error

    try {
      await axios.put(`http://127.0.0.1:4000/MiseAJourCategories/${id}`,formData);
      setSuccessMessage("La mise à jour a été effectuée avec succès.");
      setTimeout(() => {
        setFormData({ libelle: "" });
        setSuccessMessage("");
        navigate('/dashboard/categories');
      }, 2000); // Redirige après 2 secondes
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ marginLeft: '200px', marginRight: '200px', marginTop: '50px', marginBottom: '50px' }}>

    {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
     <form onSubmit={updateCategorie}>
        <div className="mb-3">
          <label className="form-label" htmlFor="basic-icon-default-company">Libelle</label>
          <div className="input-group input-group-merge">
            <span id="basic-icon-default-company2" className="input-group-text"><i className="bx bx-buildings" /></span>
            <input 
              type="text" 
              id="basic-icon-default-company" 
              className="form-control" 
              placeholder="ACME Inc." 
              aria-label="ACME Inc."
              aria-describedby="basic-icon-default-company2"
              name="libelle"
              value={formData.libelle}
              onChange={handleInputChange}
              required
            />
          </div>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <center>
          <button type="submit" className="btn btn-primary">
            Enregistrer
          </button>
        </center>
      </form>
    </div>
  );
}

export default EditerCategorie;
