import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import {Commande} from '../index'

function CreateCommande() {
  const [commande, setCommande] = useState([]);
  const [formData, setFormData] = useState({ libelle: "" ,});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getCommande = async (params) => {
    try {
      const {data} = await axios.get('http://127.0.0.1:4000/listeDesCommandes')
      setCommande(data)

    } catch (error) {
    
    }
  }
  
  useEffect(() => {
    getCommande();
  },[]);

  const createCommandes = async (e) => {
    e.preventDefault();
    
    if (!formData.nomEtPrenomClient) {
      setError("Le champ Nom et prenom est obligatoire.");
      return;
    }
    if (!formData.telephoneClient) {
      setError("Le champ telephone est obligatoire.");
      return;
    }
    if (!formData.montantCommande) {
      setError("Le champ commande est obligatoire.");
      return;
    }
    if (!formData.produits) {
      setError("Le champ produits est obligatoire.");
      return;
    }
    if (!formData.montantRecu) {
      setError("Le champ montant recu est obligatoire.");
      return;
    }
    if (!formData.resteMontant) {
      setError("Le champ reste montant est obligatoire.");
      return;
    }



    setError(""); // Clear any previous error

    try {
      await axios.post('http://127.0.0.1:4000/CreationCommandes',formData);
      setFormData({ nomEtPrenomClient: "",telephoneClient: "",montantCommande: "",produits: "",montantRecu: "",resteMontant: "" });
      navigate('/dashboard/commande')
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
        <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Commandes/</span> Creer Commande</h4>
        <div className="row">
          <div className="col-xl">
                      <div className="card mb-4">
                        <div className="card-body">
                          <form onSubmit={createCommandes}>

                            <div className="row">
                              <div className="col-6">
                                <div className="mb-3">
                                <label className="form-label" for="basic-icon-default-fullname">NOM ET PRENOM</label>
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
                                      name='nomEtPrenomClient'
                                      value={formData.nomEtPrenomClient}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                              </div>
                              <div className="col-6">                            
                                <div className="mb-3">
                                  <label className="form-label" for="basic-icon-default-fullname">TELEPHONE</label>
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
                                      name='telephoneClient'
                                      value={formData.telephoneClient}
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
                              <label className="form-label" for="basic-icon-default-email">MONTANT COMMANDE</label>
                              <div className="input-group input-group-merge">
                                <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                                <input
                                  type="text"
                                  id="basic-icon-default-email"
                                  className="form-control"
                                  placeholder="john.doe"
                                  aria-label="john.doe"
                                  aria-describedby="basic-icon-default-email2"
                                  name='montantCommande'
                                  value={formData.montantCommande}
                                  onChange={handleInputChange}
                                />
                                <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                              </div>
                              <div className="form-text">You can use letters, numbers & periods</div>
                            </div>
                              </div>
                              <div className="col-6">                            
                                <div className="mb-3">
                                  <label className="form-label" for="basic-icon-default-fullname">PRODUITS</label>
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
                                      name='produits'
                                      value={formData.produits}
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
                                <label className="form-label" for="basic-icon-default-fullname">MONTANT RECU</label>
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
                                      name='montantRecu'
                                      value={formData.montantRecu}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                              </div>
                              <div className="col-6">                            
                                <div className="mb-3">
                                  <label className="form-label" for="basic-icon-default-fullname">RESTE MONTANT</label>
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
                                      name='resteMontant'
                                      value={formData.resteMontant}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                  {error && <p style={{ color: 'red' }}>{error}</p>}
                                </div>
                              
                              </div>
                            </div>
                            
                            
                           
                            {/* <button type="submit" className="btn btn-primary">Annuler</button> */}
                            <button type="submit" className="btn btn-primary">ENREGISTRER</button>
                          </form>
                        </div>
                      </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateCommande;