import { Formik, Form, Field, ErrorMessage } from "formik";
// import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";
import { useId } from "react";

const UserSchema = Yup.object().shape({
  name: Yup.string().min(3, "Min. 3 characters!").required("Required"),
  phone: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number format: 000-00-00")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const nameId = useId();
  const phoneId = useId();

  const handleSubmit = (values, actions) => {
    dispatch(addContact(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
      }}
      validationSchema={UserSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.input}>
          <label htmlFor={nameId}>Name</label>
          <Field className={css.field} type="text" name="name" id={nameId} />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.input}>
          <label htmlFor={phoneId}>Number</label>
          <Field className={css.field} type="tel" name="phone" id={phoneId} />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>
        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
