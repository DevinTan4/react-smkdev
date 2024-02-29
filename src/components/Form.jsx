const Form = (input, setInput, todos, setTodos) => {
  const onFormSubmit = (event) => {
    event.preEventDefault();
    setTodos([...todos, { id: uuidv4(), title: input, completed: false }]);
  };
  return (
    <form action="">
      <input type="text" placeholder="Enter a Todo..." className="task-input" />
      <button className="button-add" type="submit">
        Add
      </button>
    </form>
  );
};

export default Form;
