import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const UserSchema = Yup.object().shape({
  name: Yup.string().min(3, "Min. 3 characters!").required("Required"),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number format: 000-00-00")
    .required("Required"),
});

const ContactForm = ({ onAddContact }) => {
  const fieldId = useId();
  const contactId = nanoid(10);

  const handleSubmit = (values, actions) => {
    onAddContact({
      id: contactId,
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.input}>
          <label htmlFor={`${fieldId}-name`}>Name</label>
          <Field
            className={css.field}
            type="text"
            name="name"
            id={`${fieldId}-name`}
          />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.input}>
          <label htmlFor={`${fieldId}-number`}>Number</label>
          <Field
            className={css.field}
            type="tel"
            name="number"
            id={`${fieldId}-number`}
          />
          <ErrorMessage className={css.error} name="number" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
