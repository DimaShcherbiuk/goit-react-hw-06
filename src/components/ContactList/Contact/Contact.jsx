import { FaUser, FaPhone } from "react-icons/fa6";
import css from "./Contact.module.css";

function Contact({ id, name, number, onDelete }) {
  return (
    <div className={css.item}>
      <div>
        <p className={css.contact}>
          <FaUser className={css.icon} />
          {name}
        </p>
        <p className={css.contact}>
          <FaPhone className={css.icon} />
          {number}
        </p>
      </div>
      <button className={css.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </div>
  );
}

export default Contact;
