import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';

function CreateClins() {
  const [client, setClient] = useState([]);
  const [formData, setFormData] = useState({ libelle: "" ,});
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const getClient = async (params) => {
    try {
      const {data} = await axios.get('http://127.0.0.1:4000/listeDesClients')
      setClient(data)

    } catch (error) {
    
    }
  }
  
  useEffect(() => {
    getClient();
  },[]);

  const createClients = async (e) => {
    e.preventDefault();
    
    if (!formData.nom) {
      setError("Le champ Nom est obligatoire.");
      return;
    }
    if (!formData.prenom) {
      setError("Le champ Prenom est obligatoire.");
      return;
    }
    if (!formData.telephone) {
      setError("Le champ telephone est obligatoire.");
      return;
    }
    



    setError(""); // Clear any previous error

    try {
      await axios.post('http://127.0.0.1:4000/CreationClients',formData);
      setFormData({ nom: "",prenom: "",telephone: ""});
      navigate('/dashboard/clientt')
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
        <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Clients/</span> Creer Client</h4>
        <div className="row">
          <div className="col-xl">
                      <div className="card mb-4">
                        <div className="card-body">
                          <form onSubmit={createClients }>

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
                                  <label className="form-label" for="basic-icon-default-fullname">PRENOM</label>
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
                                      name='prenom'
                                      value={formData.prenom}
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
                              <label className="form-label" for="basic-icon-default-email">TELEPHONE</label>
                              <div className="input-group input-group-merge">
                                <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                                <input
                                  type="text"
                                  id="basic-icon-default-email"
                                  className="form-control"
                                  placeholder="john.doe"
                                  aria-label="john.doe"
                                  aria-describedby="basic-icon-default-email2"
                                  name='telephone'
                                  value={formData.telephone}
                                  onChange={handleInputChange}
                                />
                                <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                              </div>
                              <div className="form-text">You can use letters, numbers & periods</div>
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

export default CreateClins;