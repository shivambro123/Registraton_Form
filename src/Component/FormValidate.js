import React from 'react';
import './FormValidatecss.css'
import { Formik } from 'formik';

const FormValidate = () => (
  <>
  <div className='wrapper'>
    <div className='form-div'>
    <h1>REGISTRATION FORM</h1>
    <Formik
      initialValues={{ name:'',email: '', password: '',number:'' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        if(!values.password){
          errors.password="Required"
        }
        if(!values.number){
            errors.number="Required"      
        }
        if(!values.name){
            errors.name="Required"
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting ,resetForm}) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(true);
          resetForm();
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        resetForm,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <div className='form'>
        <form onSubmit={handleSubmit}>
          <label>Name: </label>
             <input
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          /><br/>
         <div style={{color:'rgb(227, 213, 195)',fontFamily:'inherit',display:'block'}}> {errors.name && touched.name && errors.name}</div>
          <label>Email: </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          /><br/>
          <div style={{color:'rgb(227, 213, 195)',fontFamily:'inherit',display:'block'}}>{errors.email && touched.email && errors.email}</div>
          <label>Password: </label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          /><br/>
         
         <div style={{color:'rgb(227, 213, 195)',fontFamily:'inherit',display:'block'}}>{errors.password && touched.password && errors.password }</div>
          <label>Contact: </label>
          <input
            type="tel"
            name="number"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.number}
          />
          <br/>
          <div style={{color:'rgb(227, 213, 195)',fontFamily:'inherit',display:'block'}}>{errors.number && touched.number && errors.number }</div>

          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
        </div>
      )}
    </Formik>
  </div>
  </div>
  </>
);

export default FormValidate;