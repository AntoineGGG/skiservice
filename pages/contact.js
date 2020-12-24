import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';
import styles from '../styles/Contact.module.scss';

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

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
          {/* register your input into the hook by invoking the "register" function */}
          <label>Nom</label>
          <input name='nom' defaultValue='Votre nom' ref={register} />
          <label>Prénom</label>
          <input name='prenom' defaultValue='Votre prénom' ref={register} />
          <label>Email</label>
          <input name='email' defaultValue='Votre email' ref={register} />
          <label>Votre message</label>
          <textarea />

          {/* include validation with required or other standard HTML validation rules */}
          <input name='exampleRequired' ref={register({ required: true })} />
          {/* errors will return when field validation fails  */}
          {errors.exampleRequired && <span>This field is required</span>}

          <input type='submit' />
        </form>
      </div>
    </Layout>
  );
};

export default Contact;
