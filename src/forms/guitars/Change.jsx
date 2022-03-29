import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  type: '',
  make: '',
  model: '',
  year: '',
  price: '',
  description: ''
}

function FormsGuitarsChange(props) {
  return (
    <Formik
      initialValues={props.initialValues || initialValues}
      onSubmit={props.onSubmit}
      enableReinitialize
      validationSchema={
        Yup.object({
          type: Yup.string().required().label('Type'),
          make: Yup.string().required().label('Make'),
          model: Yup.string().required().label('Model'),
          year: Yup.number().label('Year'),
          price: Yup.number().label('Price'),
          description: Yup.string().label('Description'),
          images: Yup.array().of(Yup.object({
            url: Yup.mixed().required().label('Image File')
          }))
        })
      }
    >
      {
        ({ errors: e, touched: t, isSubmitting }) => (
          <Form>
            <div className="mb-3">
              <label />
              <Field
                className={`form-control ${e?.type && t?.type && 'is-invalid'}`}
                name="type"
                placeholder="Type: 'Fender'"
                as="select"
              >
                <option value="">Select One Type</option>
                <option value="ACOUSTIC">Acoustic</option>
                <option value="ELECTRIC">Electric</option>
              </Field>
              <ErrorMessage
                className="invalid-feedback"
                name="type"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label />
              <Field
                className={`form-control ${e?.make && t?.make && 'is-invalid'}`}
                name="make"
                placeholder="Make: 'Fender'"
                as="select"
              >
                <option value="">Select One Maker</option>
                <option value="Fender">Fender</option>
                <option value="Gibson">Gibson</option>
                <option value="Others">Others</option>
              </Field>
              <ErrorMessage
                className="invalid-feedback"
                name="make"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label />
              <Field
                className={`form-control ${e?.model && t?.model && 'is-invalid'}`}
                name="model"
                placeholder="Model: 'Stratocaster'"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="model"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label />
              <Field
                className={`form-control ${e?.year && t?.year && 'is-invalid'}`}
                name="year"
                placeholder="Year: (YYYY)"
                type="number"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="year"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label />
              <Field
                className={`form-control ${e?.price && t?.price && 'is-invalid'}`}
                name="price"
                placeholder="Price: (HKD)"
                type="number"
              />
              <ErrorMessage
                className="invalid-feedback"
                name="price"
                component="div"
              />
            </div>

            <div className="mb-3">
              <label />
              <Field
                as="textarea"
                className={`form-control ${e?.description && t?.description && 'is-invalid'}`}
                name="description"
                placeholder="Description: ..."
              />
              <ErrorMessage
                className="invalid-feedback"
                name="description"
                component="div"
              />
            </div>

            <button className="btn btn-primary" type="submit" disabled={isSubmitting}>Submit</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsGuitarsChange
