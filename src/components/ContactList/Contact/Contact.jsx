import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../../redux/contactsSlice";

function Contact({ id, name, phone }) {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.item}>
      <div>
        <p className={css.contact}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.contact}>
          <FaPhone className={css.icon} />
          {phone}
        </p>
      </div>
      <button className={css.button} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
