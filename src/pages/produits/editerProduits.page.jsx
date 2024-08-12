import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditerProduit = () => {
  const [produit, setProduit] = useState({ nom: "", prix: "", quantite: "", description: "" });
  const [formData, setFormData] = useState({ nom: "", prix: "", quantite: "", description: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();  // Récupération de l'ID à partir de l'URL

  const getProduits = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:4000/DetaillProduit/${id}`);
      setProduit(data);
      setFormData(data);  // Initialiser le formulaire avec les données du client
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduits();
  }, [id]);

  const updateProduit = async (e) => {
    e.preventDefault();
    
    if (!formData.nom) {
      setError("Le champ Nom est obligatoire.");
      return;
    }

    if (!formData.prix) {
      setError("Le champ Prix est obligatoire.");
      return;
    }

    if (!formData.quantite) {
      setError("Le champ quantite est obligatoire.");
      return;
    }

    if (!formData.description) {
      setError("Le champ description est obligatoire.");
      return;
    }

    setError(""); // Clear any previous error

    try {
      await axios.put(`http://127.0.0.1:4000/MiseAJourProduit/${id}`, formData);
      setSuccessMessage("La mise à jour a été effectuée avec succès.");
      setTimeout(() => {
        setFormData({ nom: "", prix: "", quantite: "", description: "" });
        setSuccessMessage("");
        navigate('/dashboard/createProduits');
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
        <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Produits/</span> Editer Produits</h4>
        <div className="row">
          <div className="col-xl">
            <div className="card mb-4">
              <div className="card-body">
                {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
                <form onSubmit={updateProduit}>
                  <div className="row">
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Nom</label>
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
                            name="nom"
                            value={formData.nom}
                            onChange={handleInputChange}
                          />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Prix</label>
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
                            name="prix"
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
                        <label className="form-label" htmlFor="basic-icon-default-email">quantite</label>
                        <div className="input-group input-group-merge">
                          <span className="input-group-text"><i className="bx bx-envelope"></i></span>
                          <input
                            type="text"
                            id="basic-icon-default-email"
                            className="form-control"
                            placeholder="john.doe"
                            aria-label="john.doe"
                            aria-describedby="basic-icon-default-email2"
                            name="quantite"
                            value={formData.quantite}
                            onChange={handleInputChange}
                          />
                          <span id="basic-icon-default-email2" className="input-group-text">@example.com</span>
                        </div>
                        <div className="form-text">You can use letters, numbers & periods</div>
                      </div>
                    </div>

                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-phone">Description</label>
                        <div className="input-group input-group-merge">
                          <span id="basic-icon-default-phone2" className="input-group-text">
                            <i className="bx bx-phone"></i>
                          </span>
                          <input
                            type="text"
                            id="basic-icon-default-phone"
                            className="form-control phone-mask"
                            placeholder="658 799 8941"
                            aria-label="658 799 8941"
                            aria-describedby="basic-icon-default-phone2"
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

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

export default EditerProduit;
