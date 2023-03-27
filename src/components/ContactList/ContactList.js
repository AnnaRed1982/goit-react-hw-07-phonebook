import { useSelector } from 'react-redux';

import { ContactItem } from 'components/ContactItem/ContactItem';
import PropTypes from 'prop-types';

export const ContactList = () => {
  const contacts = useSelector(state => state.contacts.items);
  console.log(contacts)
  const filter = useSelector(state => state.filter);

  // const getVisibleContacts = () => {
  //   const normalizedFilter = filter.toLowerCase();

  //   return contacts.filter(contact =>
  //     contact.name.toLowerCase().includes(normalizedFilter)
  //   );
  // };

  return (
    <ul>
      {
        //getVisibleContacts()
        contacts.map(({ id, name, phone }) => {
          return (
            <li key={id}>
              <ContactItem id={id} name={name} number={phone} />
            </li>
          );
        })
      }
    </ul>
  );
};

ContactList.propTypes = {
  onDelete: PropTypes.func,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
};
