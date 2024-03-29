import React from 'react';
import './ContactMe.css';
import ContactInfoCard from './ContactInfoCard/ContactInfoCard';
import ContactForm from '../ContactForm/ContactForm';
const ContactMe = () => {
  return ( 
    <section className='contact-container'>
      <h5>ContactMe</h5>
      <div className='contact-content'>
        <div style={{flex:1}}>
          <ContactInfoCard
            iconUrl="./assets/images/email.png"
            text="kaoutaramazzar@gmail.com"
          />
          <ContactInfoCard
            iconUrl="./assets/images/img06.png"
            text="https://github.com/kaoutar-am"
          />
        </div>
        <div style={{flex:1}}>
              <ContactForm/>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
