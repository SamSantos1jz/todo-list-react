import React, { useState } from 'react';
import './style.css'

function ListaDeTarefas() {

  function IconPlus(props) {
    return (
      <svg
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="2em"
        width="3em"
        {...props}
      >
        <defs>
          <style />
        </defs>
        <path d="M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z" />
        <path d="M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z" />
      </svg>
    );
  }
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const removerTarefa = (index) => {
    const novaListaDeTarefas = tarefas.filter((_, i) => i !== index);
    setTarefas(novaListaDeTarefas);
  };

  return (
    <div>
      <h2>Task Test</h2>
      <div className='task-input-btn'>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
        />
        <button className='addTarefa' onClick={adicionarTarefa}>{IconPlus()}</button>
      </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li className='text-li' key={index}>
            {tarefa}
            <button className='btn-delete' onClick={() => removerTarefa(index)}>Delete</button>
          </li> 
        ))}
      </ul>
    </div>
  );
}

export default ListaDeTarefas;
