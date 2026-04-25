import { useState } from "react";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [valorEntrada, setValorEntrada] = useState("");

  const adicionarTarefa = () => {
    if (valorEntrada.trim() !== "") {
      const novaTarefa = {
        id: Date.now(),
        texto: valorEntrada,
        concluida: false,
      };
      setTarefas([...tarefas, novaTarefa]);
      setValorEntrada("");
    }
  };

  const removerTarefa = (id) => {
    const tarefasAtualizadas = tarefas.filter((tarefa) => tarefa.id !== id);
    setTarefas(tarefasAtualizadas);
  };

  const alternarConclusao = (id) => {
    const tarefasAtualizadas = tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        return { ...tarefa, concluida: !tarefa.concluida };
      }
      return tarefa;
    });
    setTarefas(tarefasAtualizadas);
  };

  const gerenciarPressionarTecla = (e) => {
    if (e.key === "Enter") {
      adicionarTarefa();
    }
  };

  return (
    <main>
      <h1>Lista de Tarefas</h1>

      <div className="area-entrada">
        <button onClick={adicionarTarefa}>Adicionar</button>
        <input
          type="text"
          placeholder="Digite nova Tarefa:"
          value={valorEntrada}
          onChange={(e) => setValorEntrada(e.target.value)}
          onKeyPress={gerenciarPressionarTecla}
        />
      </div>

      <ul>
        {tarefas.map((tarefa) => (
          <li key={tarefa.id}>
            <div className="conteudo-tarefa">
              <input
                type="checkbox"
                className="marcar-tarefa"
                checked={tarefa.concluida}
                onChange={() => alternarConclusao(tarefa.id)}
              />
              <span
                className={tarefa.concluida ? "texto-tarefa concluida" : "texto-tarefa"}
              >
                {tarefa.texto}
              </span>
            </div>
            <button className="botao-remover" onClick={() => removerTarefa(tarefa.id)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default App;