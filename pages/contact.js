import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
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
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Nom</label>
          <input
            name='lastname'
            ref={register({ required: true, minLength: 2, maxLength: 40 })}
          />
          {errors.lastname && <p>Ce champ est requis !</p>}
          <label>Prénom</label>
          <input
            name='firstname'
            ref={register({ required: true, minLength: 2, maxLength: 20 })}
          />
          {errors.firstname && <p>Ce champ est requis !</p>}

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
          {errors.email && <p>Ce champ est requis !</p>}

          <label>Votre message</label>
          <textarea
            name='message'
            ref={register({ required: true, minLength: 10, maxLength: 200 })}
          />
          {errors.message && <span>This field is required</span>}

          <input type='submit' />
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
