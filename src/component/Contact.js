
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function contact() {
    const [nom, setNom] = useState('');
    const [email, setEmail] = useState('');
  
    const handleSubmit = () => {
      if (nom !== '' && email !== '') {
        alert(`Nom: ${nom}\nEmail: ${email}\nVotre formulaire a été soumis avec succès !`);
        
        setNom('');
        setEmail('');
      } else {
       
        alert('Veuillez remplir tous les champs du formulaire.');
      }
    };
  
    return (
        <Link to="contact"> 
        
        
      <div className='pl-2'>
        <h2 className='text-red'>Formulaire</h2>
        <form>
          <label htmlFor="nom">Nom:</label><br />
          <input type="text" id="nom" name="nom" value={nom} onChange={(e) => setNom(e.target.value)} /><br />
          <label htmlFor="email">Email:</label><br />
          <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} /><br /><br />
          <button type="button" onClick={handleSubmit}>Soumettre</button>
        </form>
      </div>
      </Link>
    );
  }
  
  export default contact;
  