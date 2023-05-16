import { useState } from "react";


function App() {

  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);

  function registro (valor){
    valor.preventDefault();

    setTarefas([...tarefas, input]);
    setInput('')
    

  }


  return (
    <div >
      <h1>To-do List</h1>

      <form onSubmit={registro}>
        <label>Nome da tarefa:</label>
        <br/>
        <input placeholder="digite uma tarefa"
        value = {input}
        onChange={(valor)=> setInput(valor.target.value)}
        ></input>
        <button type="submit">ok</button>
      </form>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
