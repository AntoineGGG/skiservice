import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <Layout>
      <h1>Contactez-nous</h1>
      <p>
        Une demande d'informations, de tarifs, disponibilités, n'hésitez pas à
        nous contacter.
      </p>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <input name='example' defaultValue='test' ref={register} />

        {/* include validation with required or other standard HTML validation rules */}
        <input name='exampleRequired' ref={register({ required: true })} />
        {/* errors will return when field validation fails  */}
        {errors.exampleRequired && <span>This field is required</span>}

        <input type='submit' />
      </form>
    </Layout>
  );
};

export default Contact;
