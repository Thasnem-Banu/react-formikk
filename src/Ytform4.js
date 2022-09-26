import React from 'react';
import { Formik } from 'formik';
import './Fstyles.css';
import * as Yup from 'yup';

const initialValues = {
  name: 'Thasnem',
  email: '',
  pwd: '',
};

const onSubmit = (values) => {
  console.log('Form Data', values);
};

const validate = (values) => {
  let errors = {};
  if (!values.name) {
    errors.name = '*Required';
  }
  if (!values.email) {
    errors.email = '*Required';
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      values.email
    )
  ) {
    errors.email = 'Invalid email format';
  }
  if (!values.pwd) {
    errors.pwd = '*Required';
  }

  return errors;
};

const validationSchema = Yup.object({
  name: Yup.string().required('**Requireddsada'),
  email: Yup.string().email('Invalid email format').required('**Required'),
  pwd: Yup.string().required('***required'),
});

function Ytform4() {

  //console.log('Form Values', formi.errors);

  return (
    <Formik 
    initialValues = {initialValues}
    validationSchema = {validationSchema}
    onSubmit={onSubmit}
     >
      <form onSubmit={formik.handleSubmit}>
        <h1>Form</h1>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            {...formik.getFieldProps('name')}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="error">{formik.errors.name}</div>
          ) : null}
          <br />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="error">{formik.errors.email}</div>
          ) : null}
          <br />
        </div>
        <div className="form-control">
          <label htmlFor="pwd">Name</label>
          <input
            type="text"
            id="pwd"
            name="pwd"
            {...formik.getFieldProps('pwd')}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pwd}
          />
          {formik.touched.pwd && formik.errors.pwd ? (
            <div className="error">{formik.errors.pwd}</div>
          ) : null}
          <br />
        </div>

        <button type="submit">Submit</button>
      </form>
    </Formik>
  );
}

export default Ytform4;
