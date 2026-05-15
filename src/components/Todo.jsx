import { useEffect, useState } from "react";
import { supabase } from "../config/supabase-config";




export const Todo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [todo, setTodo] = useState([]);

  const [editId, setEditId] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const getAllTodo = async () => {
    const { data, error } = await supabase.from("todos").select("*");
    if (!error) setTodo(data);
  };

  useEffect(() => {
    getAllTodo();
  }, []);

  const AddTodos = async () => {
    await supabase.from("todos").insert([{ title, description }]);
    getAllTodo();
  };

  const deleteTodo = async (id) => {
    await supabase.from("todos").delete().eq("id", id);
    getAllTodo();
  };

  const startEdit = (todo) => {
    setEditId(todo.id);
    setEditTitle(todo.title);
    setEditDescription(todo.description);
  };

  const updateTodo = async (id) => {
    await supabase
      .from("todos")
      .update({
        title: editTitle,
        description: editDescription,
      })
      .eq("id", id);

    setEditId(null);
    setEditTitle("");
    setEditDescription("");
    getAllTodo();
  };

  return (
    <div style={{}}>
      <h2>Todo App</h2>


    <h3>Title</h3>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="title"
      />
      <h3>Description</h3>
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="description"
      />
      <button onClick={AddTodos}>Add</button>

      

      {todo.map((v) => (
        <li key={v.id}>
          {editId === v.id ? (
            <>
              <input
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
              />
              <input
                value={editDescription}
                onChange={(e) => setEditDescription(e.target.value)}
              />

              <button onClick={() => updateTodo(v.id)}>
                Update
              </button>

              <button onClick={() => setEditId(null)}>
                Cancel
              </button>
            </>
          ) : (
            <>
              <b>{v.title}</b> - {v.description}

              <button onClick={() => startEdit(v)}>Edit</button>
              <button onClick={() => deleteTodo(v.id)}>Delete</button>
            </>
          )}
        </li>
      ))}
    </div>
  );
};