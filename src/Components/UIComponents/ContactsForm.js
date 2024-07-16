import React from 'react';
import '../Styles/ContactsForm.css';
import * as yup from 'yup';
import { Formik , Form, Field, ErrorMessage} from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ContactsForm = () => {
  const initialValues = {
    firstname:'',
    lastname:'',
    email:'',
    phonenumber:'',
    message:''
  };

  const validationSchema = yup.object ({
    firstname: yup.string().required('First Name Is Required').matches(/^[A-Za-z]+$/, 'Invalid Input'),
    lastname: yup.string().required('Last Name Is Required').matches(/^[A-Za-z]+$/, 'Invalid Input'),
    email: yup.string().required('Last Name Is Required').email('Invalid Email'),
    phonenumber: yup.string().required('Phone No.. Is Required').matches(/^0\d{10}$/, 'Invalid Input'),
    message: yup.string().required('Message Is Required'),
  });

  const messageSuccess = () => {
    toast.success('Message Sent', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
      theme: "light",
      });
  }

  const submit = (values, {resetForm}) => {
    messageSuccess();
    console.log(values);
    resetForm();
  }

  return (
    <div className='contacts-form'>
      <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={submit}>
        {() => (
          <Form className='contacts-form__form-wrapper'>
            <div className='contacts-form__input-field-wrapper'>
              <i className="contacts-form__input-field-icon fa-solid fa-user-tie"></i>
              <Field name='firstname' placeholder='Enter Firstname' className='contacts-form__input-field'/>
              <ErrorMessage name='firstname' component='span' className='contacts-form__error-message'/>
            </div>
            <div className='contacts-form__input-field-wrapper'>
              <i className="contacts-form__input-field-icon fa-solid fa-user-tie"></i>
              <Field name='lastname' placeholder='Enter Lastname' className='contacts-form__input-field'/>
              <ErrorMessage name='lastname' component='span' className='contacts-form__error-message'/>
            </div>
            <div className='contacts-form__input-field-wrapper'>
              <i className="contacts-form__input-field-icon fa-solid fa-envelope"></i>
              <Field name='email' placeholder='Enter Email' className='contacts-form__input-field'/>
              <ErrorMessage name='email' component='span' className='contacts-form__error-message'/>
            </div>
            <div className='contacts-form__input-field-wrapper'>
              <i className="contacts-form__input-field-icon fa-solid fa-phone-volume"></i>
              <Field name='phonenumber' placeholder='Enter Phone No..' className='contacts-form__input-field'/>
              <ErrorMessage name='phonenumber' component='span' className='contacts-form__error-message'/>
            </div>
            <div className='contacts-form__input-field-wrapper'>
              <Field as='textarea' name='message' placeholder='Enter Message' className='contacts-form__input-field'/>
              <ErrorMessage name='message' component='span' className='contacts-form__error-message'/>
            </div>
            <div className='contacts-form__submit-wrapper'>
              <button type='submit' className='contacts-form__submit'>Submit</button>
            </div>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  )
}

export default ContactsForm
