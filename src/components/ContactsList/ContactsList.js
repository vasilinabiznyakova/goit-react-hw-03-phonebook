import { Box } from '../Box';
import { ContactItem } from '../ContactItem/ContactItem';
// import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { List } from './ContactList.styled';

export const ContactsList = ({ contacts, onDeleteContact }) => {
  return (
    <Box>
      <h2>Contacts</h2>
      <List>
        {contacts.map(contact => (
          <ContactItem
            contact={contact}
            key={contact.id}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </List>
    </Box>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
