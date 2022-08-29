import { Field, Form, Formik, ErrorMessage } from "formik";
import React from "react";
import TextError from "./TextError";
import cn from "classnames";

const FormikForm = ({ fields, action, formClass, ...props }) => {
  return (
    <Formik {...props}>
      {({ submitForm, handleChange }) => {
        return (
          <Form className={cn("flex", { [formClass]: !!formClass })}>
            {fields.map((x, id) => (
              <>
                <Field
                  onChange={(e) => {
                    handleChange(e);
                    submitForm();
                  }}
                  key={id}
                  {...x}
                />
                <ErrorMessage name={x.name} component={<TextError />} />
              </>
            ))}
            {action && action()}
          </Form>
        );
      }}
    </Formik>
  );
};

export default FormikForm;
