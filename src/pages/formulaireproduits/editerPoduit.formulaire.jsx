import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function EditerProduits() {
  const [romData, setRomData] = useState({ libelle: "" });
  const [error, setError] = useState("");
  const [produit,setProduit] = useState([]);
  const navigate = useNavigate();
  const getProduits = async (params) => {
    try {
      const {data} = await axios.get('http://localhost:4000/listeDesProduits')
      setProduit(data)

    } catch (error) {
    
    }
  }
  
  useEffect(() => {
    getProduits();
  },[]);

  const createProduits = async (e) => {
    e.preventDefault();
    
    if (!romData.libelle) {
      setError("Le champ Libelle est obligatoire.");
      return;
    }

    setError(""); // Clear any previous error

    try {
      await axios.post('http://127.0.0.1:4000/CreationProduits',romData);
      setRomData({ libelle: "" });
      navigate('/dashboard/createProduits')
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setRomData({ ...romData, [e.target.name]: e.target.value });
  };

  return (
    <div style={{ marginLeft: '200px', marginRight: '200px', marginTop: '50px', marginBottom: '50px' }}>
     <form onSubmit={createProduits}>
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
              value={romData.libelle}
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

export default EditerProduits;
