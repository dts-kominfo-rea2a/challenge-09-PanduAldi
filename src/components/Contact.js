// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import './Contact.css';

const Contact = ({gambar, nama, noHp, email}) => {
    return (
        <>
            <div className='container'>
                <div className='card'>
                    <img className='img' src={gambar} alt={nama} />
                    
                    <div className="content">
                        <h3>{nama}</h3>
                        <p>{noHp}</p>
                        <p>{email}</p>
                    </div>
                </div>  
            </div>
        </>
    )
}

export default Contact;