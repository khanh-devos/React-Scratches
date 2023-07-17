import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const InputTodo = ({ setTodos }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.currentTarget[0].value;

    if (title.trim()) {
      const newTodo = {
        id: uuidv4(),
        title,
        completed: false,
      };

      setTodos((state) => [...state, newTodo]);
      e.currentTarget.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input className="input" type="text" placeholder="Add Todo..." />
      <button type="submit">Submit</button>
    </form>
  );
};

InputTodo.propTypes = {
  setTodos: PropTypes.func.isRequired,
};

export default InputTodo;
