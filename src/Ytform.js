import React from 'react';
import { useFormik } from 'formik';
import './Fstyles.css';
import * as Yup from 'yup;'

function Ytform() {
  const formi = useFormik({
    initialValues: {
      name: 'Thasnem',
      email: '',
      pwd: '',
    },
    onSubmit: (values) => {
      console.log('Form Data', values);
    },
    validate: (values) => {
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
    },
  });

  //console.log('Form Values', formi.errors);
  console.log('Form Values', formi.touched);

  return (
    <div>
      <form onSubmit={formi.handleSubmit}>
        <h1>Form</h1>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formi.handleChange}
            onBlur={formi.handleBlur}
            value={formi.values.name}
          />
          {formi.touched.name && formi.errors.name ? (
            <div className="error">{formi.errors.name}</div>
          ) : null}
          <br />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formi.handleChange}
            onBlur={formi.handleBlur}
            value={formi.values.email}
          />
          {formi.touched.email && formi.errors.email ? (
            <div className="error">{formi.errors.email}</div>
          ) : null}
          <br />
        </div>
        <div className="form-control">
          <label htmlFor="pwd">Name</label>
          <input
            type="text"
            id="pwd"
            name="pwd"
            onChange={formi.handleChange}
            onBlur={formi.handleBlur}
            value={formi.values.pwd}
          />
          {formi.touched.pwd && formi.errors.pwd ? (
            <div className="error">{formi.errors.pwd}</div>
          ) : null}
          <br />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Ytform;
