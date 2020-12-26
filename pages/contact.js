import { useState } from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import styles from '../styles/Contact.module.scss';
import { init, sendForm } from 'emailjs-com';
init('user_b78znFVhzZgrBK0SPbrCm');

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    // Ici le data passe en argument n'est utile que pour
    // le reset du form.

    generateContactNumber();
    sendForm('SkiService45978664$', 'template_tbxw0uo', '#contact-form').then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text);
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
    e.target.reset();
  };
  // Generate contact number, pour avoir un identifiant unique
  // de message
  const [contactNumber, setContactNumber] = useState('000000');

  const generateContactNumber = () => {
    const numStr = '000000' + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };
  // Message d'erreur pour useForm
  const required = 'Ce champ est obligatoire';
  const maxLength = 'Vous avez dépassé le nombre maximal de caractères.';
  const wrongPatternEmail = "Mauvais format d'email";

  return (
    <Layout>
      <div className={styles.contactContainer}>
        <h3>Contact</h3>
        <p>
          Une demande d'informations, de tarifs, disponibilités, n'hésitez pas à
          nous contacter.
        </p>
      </div>
      <div className={styles.formContact}>
        <form id='contact-form' onSubmit={handleSubmit(onSubmit)}>
          <input type='hidden' name='contact_number' value={contactNumber} />

          <label>Nom</label>
          <input
            name='lastname'
            ref={register({ required: true, minLength: 2, maxLength: 40 })}
          />
          {errors.lastname && <p>Votre nom est requis !</p>}
          <label>Prénom</label>
          <input
            name='firstname'
            ref={register({ required: true, minLength: 2, maxLength: 20 })}
          />
          {errors.firstname && <p>Votre prénom est requis !</p>}

          <label>Email</label>
          <input
            name='email'
            ref={register({
              required: true,
              minLength: 2,
              maxLength: 99,
              pattern: /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/,
            })}
          />
          {errors.email && <p>L'email est requis !</p>}

          <label>Votre message</label>
          <textarea
            name='message'
            ref={register({ required: true, minLength: 10, maxLength: 200 })}
          />
          {errors.message && <p>Il n'y a pas de message !</p>}

          <input className={styles.submit} type='submit' />
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
