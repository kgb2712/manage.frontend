import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function CreateProduits() {
  const [produit, setProduit] = useState([]);
  const [formData, setFormData] = useState({ libelle: "" ,});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getProduit = async (params) => {
    try {
      const {data} = await axios.get('http://127.0.0.1:4000/listeDesProduits')
      setProduit(data)

    } catch (error) {
    
    }
  }
  
  useEffect(() => {
    getProduit();
  },[]);

  const createProduits = async (e) => {
    e.preventDefault();
    
    if (!formData.nom) {
      setError("Le champ Libelle est obligatoire.");
      return;
    }
    if (!formData.prix) {
      setError("Le champ Libelle est obligatoire.");
      return;
    }
    if (!formData.quantite) {
      setError("Le champ Libelle est obligatoire.");
      return;
    }
    if (!formData.description) {
      setError("Le champ Libelle est obligatoire.");
      return;
    }



    setError(""); // Clear any previous error

    try {
      await axios.post('http://127.0.0.1:4000/CreationProduits',formData);
      setFormData({ nom: "",prix: "",quantite: "" ,description: ""});
      navigate('/dashboard/createProduits')
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
 
  return (
    <div className="content-wrapper">
      <div className="container-xxl flex-grow-1 container-p-y">
        <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Produits/</span> Creer Produits</h4>
        <div className="row">
          <div className="col-xl">
                      <div className="card mb-4">
                        <div className="card-body">
                          <form onSubmit={createProduits}>

                            <div className="row">
                              <div className="col-6">
                                <div className="mb-3">
                                <label className="form-label" for="basic-icon-default-fullname">NOM</label>
                                  <div className="input-group input-group-merge">
                                    <span id="basic-icon-default-fullname2" className="input-group-text"
                                      ><i className="bx bx-user"></i
                                    ></span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basic-icon-default-fullname"
                                      placeholder="John Doe"
                                      aria-label="John Doe"
                                      aria-describedby="basic-icon-default-fullname2"
                                      name='nom'
                                      value={formData.nom}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                              </div>
                              <div className="col-6">                            
                                <div className="mb-3">
                                  <label className="form-label" for="basic-icon-default-fullname">PRIX</label>
                                  <div className="input-group input-group-merge">
                                    <span id="basic-icon-default-fullname2" className="input-group-text"
                                      ><i className="bx bx-user"></i
                                    ></span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basic-icon-default-fullname"
                                      placeholder="John Doe"
                                      aria-label="John Doe"
                                      aria-describedby="basic-icon-default-fullname2"
                                      name='telephone'
                                      value={formData.prix}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                              
                              </div>
                            </div>
                            
                            <div className="row">
                              <div className="col-6">
                              <div className="mb-3">
                              <label className="form-label" for="basic-icon-default-email">QUNATITE</label>
                              <div className="input-group input-group-merge">
                                <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                                <input
                                  type="text"
                                  id="basic-icon-default-email"
                                  className="form-control"
                                  placeholder="john.doe"
                                  aria-label="john.doe"
                                  aria-describedby="basic-icon-default-email2"
                                  name='email'
                                  value={formData.quantite}
                                  onChange={handleInputChange}
                                />
                                
                              </div>
                              <div className="form-text">You can use letters, numbers & periods</div>
                            </div>
                              </div>
                              <div className="col-6">                            
                                <div className="mb-3">
                                  <label className="form-label" for="basic-icon-default-fullname">DESCRIPTION</label>
                                  <div className="input-group input-group-merge">
                                    <span id="basic-icon-default-fullname2" className="input-group-text"
                                      ><i className="bx bx-user"></i
                                    ></span>
                                    <input
                                      type="text"
                                      className="form-control"
                                      id="basic-icon-default-fullname"
                                      placeholder="John Doe"
                                      aria-label="John Doe"
                                      aria-describedby="basic-icon-default-fullname2"
                                      name='telephone'
                                      value={formData.description}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                              
                              </div>


                             
                            </div>
                            
                            
                            
                           
                            {/* <button type="submit" className="btn btn-primary">Annuler</button> */}
                            <button type="submit" className="btn btn-primary">Enregistrer</button>
                          </form>
                        </div>
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateProduits;
