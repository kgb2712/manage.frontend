import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function CreateCategorie() {
  const [formData, setFormData] = useState({ libelle: "" ,});
  const [error, setError] = useState("");
  const [categorie,setCategorie] = useState([]);
  const navigate = useNavigate();
  const getCategories = async (params) => {
    try {
      const {data} = await axios.get('http://localhost:4000/listeDesCategories')
      setCategorie(data)

    } catch (error) {
    
    }
  }
  
  useEffect(() => {
    getCategories();
  },[]);

  const createCategorie = async (e) => {
    e.preventDefault();
    
    if (!formData.libelle) {
      setError("Le champ Libelle est obligatoire.");
      return;
    }

    setError(""); // Clear any previous error

    try {
      await axios.post('http://127.0.0.1:4000/CreationCategories',formData);
      setFormData({ libelle: "" });
      navigate('/dashboard/categories')
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ marginLeft: '200px', marginRight: '200px', marginTop: '50px', marginBottom: '50px' }}>
     <form onSubmit={createCategorie}>
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

export default CreateCategorie;
