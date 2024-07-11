import React from 'react';

const  CreateArticle = ()=> {
  return (
    <div>
 
    <div style={{marginLeft:'200px',marginRight:'200px',marginTop:'50px',marginBottom:'50px'}}>
             <form>
   
   <div className="row">
    
   </div>
   
   <div className="mb-3">
   <label
       className="form-label"
       htmlFor="basic-icon-default-company"
   >
       Libelle
   </label>
   <div className="input-group input-group-merge">
       <span
       id="basic-icon-default-company2"
       className="input-group-text"
       >
       <i className="bx bx-buildings" />
       </span>
       <input
       type="text"
       id="basic-icon-default-company"
       className="form-control"
       placeholder="ACME Inc."
       aria-label="ACME Inc."
       aria-describedby="basic-icon-default-company2"
       />
   </div>
   </div>
   
   
   <center>
   <button type="submit" className="btn btn-primary">
   Enregistrer
   </button>
   </center>
      </form>
   
       </div>
   
   
       </div>
  );
}

export default CreateArticle;
