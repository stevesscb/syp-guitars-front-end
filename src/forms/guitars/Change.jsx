import React from 'react'
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  type: '',
  make: '',
  model: '',
  year: '',
  price: '',
  description: '',
  images: [{ url: null }]
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
        ({ values: v, errors: e, touched: t, isSubmitting, setFieldValue }) => (
          <Form>
            <div className="mb-3">
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

            <FieldArray name="images">
              {
                ({ remove, push }) => (
                  <div className="images-wrapper">
                    <div className="d-flex justify-content-start flex-wrap">
                      {
                        v.images.map((image, i) => (
                          <div key={i} className="col col-md-6">
                            <div className="input-group mb-3 justify-content-center">
                              <label
                                className="input-group-text overflow-hidden"
                                htmlFor={`images-${i}-url`}
                                style={{ width: 'calc(100% - 35px)' }}
                              >
                                {
                                  image?.url?.name || `Choose file ${i + 1}`
                                }
                              </label>
                              <input
                                id={`images-${i}-url`}
                                className={`form-control ${e?.images?.[i]?.url && t?.images?.[i]?.url && 'is-invalid'} d-none`}
                                type="file"
                                onChange={(event) => setFieldValue(`images[${i}].url`, event.currentTarget.files[0])}
                              />
                              <button
                                className="btn btn-danger"
                                type="button"
                                onClick={() => remove(i)}
                              >X</button>
                              <ErrorMessage
                                className="invalid-feedback text-center"
                                name={`images[${i}].url`}
                                component="div"
                              />
                            </div>
                          </div>
                        ))
                      }
                    </div>

                    <div className="text-center mb-3">
                      <button
                        id="addButton"
                        className="btn btn-info"
                        type="button"
                        onClick={() => push({ url: null })}
                      >Add Image</button>
                    </div>
                  </div>
                )
              }
            </FieldArray>

            <button className="btn btn-success" type="submit" disabled={isSubmitting}>POST</button>
          </Form>
        )
      }
    </Formik>
  )
}

export default FormsGuitarsChange
