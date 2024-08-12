import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {Commande} from '../index'

const EditerCommande = () => {
  const [commade, setCommande] = useState({ nom: ""});
  const [formData, setFormData] = useState({nom: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();  // Récupération de l'ID à partir de l'URL

  const getCommande = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:4000/DetaillCommande/${id}`);
      setCommande(data);
      setFormData(data);  // Initialiser le formulaire avec les données de commande
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommande();
  }, [id]);

  const updateComand = async (e) => {
    e.preventDefault();
    
    if (!formData.nomEtPrenomClient) {
      setError("Le champ Nom est obligatoire.");
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
      setError("Le champ montant est obligatoire.");
      return;
    }
    if (!formData.resteMontant) {
      setError("Le champ age est obligatoire.");
      return;
    }

    setError(""); // Clear any previous error

    try {
      await axios.put(`http://127.0.0.1:4000/MiseAJourCommande/${id}`, formData);
      setSuccessMessage("La mise à jour a été effectuée avec succès.");
      setTimeout(() => {
        setFormData({ nomEtPrenomClient: "", telephoneClient: "", montantCommande: "", produits: "", montantRecu: "" , resteMontant: "" });
        setSuccessMessage("");
        navigate('/dashboard/commande');
      }, 2000); // Redirige après 2 secondes
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
        <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Commande/</span> Editer Commande</h4>
        <div className="row">
          <div className="col-xl">
            <div className="card mb-4">
              <div className="card-body">
                {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
                <form onSubmit={updateComand}>
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">NOM ET PRENOM</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="John Doe"
                            aria-label="John Doe"
                            aria-describedby="basic-icon-default-fullname2"
                            name="nomEtPrenomClient"
                            value={formData.nomEtPrenomClient}
                            onChange={handleInputChange}
                          />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">TELEPHONE</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="John Doe"
                            aria-label="John Doe"
                            aria-describedby="basic-icon-default-fullname2"
                            name="telephoneClient"
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
                        <label className="form-label" htmlFor="basic-icon-default-fullname">MONTANT</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="John Doe"
                            aria-label="John Doe"
                            aria-describedby="basic-icon-default-fullname2"
                            name="montantCommande"
                            value={formData.montantCommande}
                            onChange={handleInputChange}
                          />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">PRODUITS</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="John Doe"
                            aria-label="John Doe"
                            aria-describedby="basic-icon-default-fullname2"
                            name="produits"
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
                        <label className="form-label" htmlFor="basic-icon-default-fullname">MONTANT RECU</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="John Doe"
                            aria-label="John Doe"
                            aria-describedby="basic-icon-default-fullname2"
                            name="montantRecu"
                            value={formData.montantRecu}
                            onChange={handleInputChange}
                          />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">RESTE MONTANT</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-fullname2" className="input-group-text">
                            <i className="bx bx-user"></i>
                          </span>
                          <input
                            type="text"
                            className="form-control"
                            id="basic-icon-default-fullname"
                            placeholder="John Doe"
                            aria-label="John Doe"
                            aria-describedby="basic-icon-default-fullname2"
                            name="resteMontant"
                            value={formData.resteMontant}
                            onChange={handleInputChange}
                          />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                      </div>
                    </div>
                  </div>


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

export default EditerCommande ;
