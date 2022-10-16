import { Box } from '../Box';
import { ContactItem } from '../ContactItem/ContactItem';
import { nanoid } from 'nanoid';
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
            key={nanoid()}
            onDeleteContact={onDeleteContact}
          />
        ))}
      </List>
    </Box>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
