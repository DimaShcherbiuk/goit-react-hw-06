import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";
import InnitContacts from "../contactlist.json";
import { useState, useEffect } from "react";
import css from "./App.module.css";

function App() {
  const [contacts, setContacts] = useState(() => {
    const contactLists = localStorage.getItem("contacts");
    return JSON.parse(contactLists) ?? InnitContacts;
  });

  const [search, setSearch] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact];
    });
  };

  const deleteContact = (contactIdDel) => {
    setContacts((prevContact) => {
      return prevContact.filter((contact) => contact.id !== contactIdDel);
    });
  };

  const visibleContact = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(visibleContact));
  }, [visibleContact]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={addContact} />
      <SearchBox value={search} onSearch={setSearch} />
      <ContactList contacts={visibleContact} onDelete={deleteContact} />
    </div>
  );
}

export default App;
