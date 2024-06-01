import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <ul className={css.list}>
      {visibleContacts.map(({ id, name, phone }) => {
        return (
          <li key={id}>
            <Contact id={id} name={name} phone={phone} />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
