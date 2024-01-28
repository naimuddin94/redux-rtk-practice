import { useSelector } from "react-redux";

function App() {
  const { todos, status } = useSelector((state) => state.todos);

  return (
    <div className="container">
      <div>
        <form>
          <input type="text" />
          <button>Add Todo</button>
        </form>
      </div>
      <div>
        <h2>Redux Toolkit Practice</h2>
        <div>
          {todos &&
            todos.map((todo) => (
              <article key={todo.id} className="article">
                <h1>{todo.id}</h1>
                <h3>{todo.text}</h3>
                <button>Update</button>
                <button>Delete</button>
              </article>
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
