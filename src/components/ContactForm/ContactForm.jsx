import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsSlice";

const UserSchema = Yup.object().shape({
  name: Yup.string().min(3, "Min. 3 characters!").required("Required"),
  phone: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, "Number format: 000-00-00")
    .required("Required"),
});

const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    const { name, phone } = values;
    dispatch(addContact(name, phone));
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
          <label htmlFor="username">Name</label>
          <Field className={css.field} type="text" name="name" id="username" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>
        <div className={css.input}>
          <label htmlFor="phone">Number</label>
          <Field className={css.field} type="tel" name="phone" id="phone" />
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
