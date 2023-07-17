import PropTypes from 'prop-types';

const TodoItem = ({ title }) => (
  <li>
    <input type="checkbox" />
    {title}
  </li>
);

TodoItem.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TodoItem;
