import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const EditerPersonnel = () => {
  const [personnel, setPersonnel] = useState({ nom: "", prenom: "", telephone: "", photo: "", role: "", age: "" });
  const [formData, setFormData] = useState({nom: "", prenom: "", telephone: "", photo: "", role: "", age: "" });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();  // Récupération de l'ID à partir de l'URL

  const getPersonnels = async () => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:4000/DetailPersonnel/${id}`);
      setPersonnel(data);
      setFormData(data);  // Initialiser le formulaire avec les données du personnel
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPersonnels();
  }, [id]);

  const updatePersonnels = async (e) => {
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

    if (!formData.photo) {
      setError("Le champ role est obligatoire.");
      return;
    }
    
    if (!formData.role) {
      setError("Le champ role est obligatoire.");
      return;
    }
    if (!formData.age) {
      setError("Le champ age est obligatoire.");
      return;
    }

    setError(""); // Clear any previous error

    try {
      await axios.put(`http://127.0.0.1:4000/MiseAJourDesPersonnels/${id}`, formData);
      setSuccessMessage("La mise à jour a été effectuée avec succès.");
      setTimeout(() => {
        setFormData({ nom: "", prenom: "", telephone: "", photo: "", role: "" ,age: ""});
        setSuccessMessage("");
        navigate('/dashboard/personn');
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
        <h4 className="fw-bold py-3 mb-4"><span className="text-muted fw-light">Personnels/</span> Editer Personnel</h4>
        <div className="row">
          <div className="col-xl">
            <div className="card mb-4">
              <div className="card-body">
                {successMessage && <div className="alert alert-success" role="alert">{successMessage}</div>}
                <form onSubmit={updatePersonnels}>
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
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Prenom</label>
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
                            name="prenom"
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
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Telephone</label>
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
                            name="telephone"
                            value={formData.telephone}
                            onChange={handleInputChange}
                          />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Photo</label>
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
                            name="photo"
                            value={formData.photo}
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
                        <label className="form-label" htmlFor="basic-icon-default-fullname">role</label>
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
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                          />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="basic-icon-default-fullname">Age</label>
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
                            name="age"
                            value={formData.age}
                            onChange={handleInputChange}
                          />
                        </div>
                        {error && <p style={{ color: 'red' }}>{error}</p>}
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

export default EditerPersonnel;
