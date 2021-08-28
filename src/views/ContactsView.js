import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import s from '../app.module.css';

export default function ContactsView() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>Phonebook</h1>
      <ContactForm />
      <h2 className={s.subtitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}
