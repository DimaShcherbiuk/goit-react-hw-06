import { useSelector } from "react-redux";
import Contact from "./Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filters = useSelector(selectNameFilter);
  const visibleContacts = contacts.filter(({ id, name, phone }) => {
    return (
      typeof id === "string" &&
      typeof name === "string" &&
      typeof phone === "string" &&
      name.toLowerCase().includes(filters.toLowerCase())
    );
  });
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
