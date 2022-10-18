import PropTypes from 'prop-types';
import { Item, Button } from './ContactItem.styled';

export const ContactItem = ({
  contact: { name, number, id },
  onDeleteContact,
}) => {
  return (
    <Item>
      {name}: {number}
      <Button type="button" onClick={() => onDeleteContact(id)}>
        Remove
      </Button>
    </Item>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
  onDeleteContact: PropTypes.func.isRequired,
};
