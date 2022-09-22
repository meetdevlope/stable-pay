import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import TextError from "./TextError";
import cn from "classnames";

const FormikForm = ({ fields, action, formClass, ...props }) => {
  return (
    <Formik {...props}>
      {({ submitForm, handleChange, values }) => {
        return (
          <Form className={cn("flex", { [formClass]: !!formClass })}>
            {fields.map((x, id) => (
              <div key={id}>
                <Field
                  onChange={(e) => {
                    handleChange(e);
                    submitForm();
                  }}
                  key={id}
                  value={values}
                  {...x}
                />
                <ErrorMessage name={x.name} component={TextError} />
              </div>
            ))}
            {action && action()}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikForm;
