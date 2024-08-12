import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', formData);
      
      // Gérer la réponse
      if (response.status === 200) {
        // Stockez le token JWT dans le localStorage ou le state management
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('nom', response.data.user.nom);
        localStorage.setItem('prenom', response.data.user.prenom);
        localStorage.setItem('username', response.data.user.username);
        // Redirection vers le tableau de bord
        navigate('/dashboard');
      }
    } catch (error) {
      if (error.response) {
        // Gérer les erreurs retournées par le serveur
        alert(error.response.data.message);
      } else {
        // Gérer les erreurs non liées à la réponse du serveur
        alert('Erreur de connexion');
      }
    }
  };

  return (
    <div>
      <center>
        <div className="container-xxl">
          <div className="authentication-wrapper authentication-basic container-p-y">
            <div className="authentication-inner">
              <div className="card" style={{ width: '500px' }}>
                <div className="card-body">
                  <div className="app-brand justify-content-center">
                    <a href="/" className="app-brand-link gap-2">
                      <span className="app-brand-logo demo">
                        {/* Logo SVG */}
                      </span>
                      <span className="app-brand-text demo text-body fw-bolder">
                        Sneat
                      </span>
                    </a>
                  </div>
                  <h4 className="mb-2">Welcome to Sneat! 👋</h4>
                  <p className="mb-4">
                    Please sign-in to your account and start the adventure
                  </p>
                  <form
                    id="formAuthentication"
                    className="mb-3"
                    onSubmit={handleSubmit}
                  >
                    <div className="mb-3">
                      <label htmlFor="username" className="form-label">
                        Utilisateur
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="username"
                        name="username"
                        placeholder="Enter your username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="mb-3 form-password-toggle">
                      <div className="d-flex justify-content-between">
                        <label className="form-label" htmlFor="password">
                          Mot de Passe
                        </label>
                        <a href="/auth-forgot-password-basic.html">
                          <small>Mot de passe oublier?</small>
                        </a>
                      </div>
                      <div className="input-group input-group-merge">
                        <input
                          type="password"
                          id="password"
                          className="form-control"
                          name="password"
                          placeholder="············"
                          value={formData.password}
                          onChange={handleChange}
                          required
                        />
                        <span className="input-group-text cursor-pointer">
                          <i className="bx bx-hide" />
                        </span>
                      </div>
                    </div>
                    <div className="mb-3">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="remember-me"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="remember-me"
                        >
                          {" "}
                          Remember Me{" "}
                        </label>
                      </div>
                    </div>
                    <div className="mb-3">
                      <button
                        className="btn btn-primary d-grid w-100"
                        type="submit"
                      >
                        Connexion
                      </button>
                    </div>
                  </form>
                  <p className="text-center">
                    <span>New on our platform?</span>
                    <a href="/formulaire">
                      <span>Create an account</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </center>
    </div>
  );
};

export default Login;
