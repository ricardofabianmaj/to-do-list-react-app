import React, { useState, useRef } from "react";
import "./Adicionar.css";

const Aplication = (props) => {
  const [Lista, setLista] = useState([]);
  const inputRef = useRef();

  const AdicionarTarefa = () => {
    const novaTarefa = { texto: inputRef.current.value.trim(), classe: '' };
    if (novaTarefa.texto !== '') {
      setLista([...Lista, novaTarefa]);
      inputRef.current.value = '';
    }
  };

  const RemoverTarefa = (index) => {
    const novaLista = [...Lista];
    novaLista.splice(index, 1);
    setLista(novaLista);
  };

  const MudarCor = (index) => {
    const novaLista = [...Lista];
    novaLista[index].classe = novaLista[index].classe === 'marcado' ? '' : 'marcado';
    setLista(novaLista);
  };

  return (
    <>
      <div id="AdicionarTarefasDiv">
        <h3>Adicionar Tarefa</h3>
        <input ref={inputRef} placeholder={props.ph} id="paraAdd" name="paraAdd" />
        <button onClick={AdicionarTarefa}>Adicionar</button>
      </div>

      <div id="TarefasDiv">
        <h3>Tarefas</h3>
        <ul>
          {Lista.length !== 0 ? (
            Lista.map((tarefa, index) => (
              <li key={index} className={tarefa.classe}>
                <input type="checkbox" onChange={() => MudarCor(index)} />
                <p>{tarefa.texto}</p>
                <button onClick={() => RemoverTarefa(index)}>Remover</button>
              </li>
            ))
          ) : (
            <p>Lista Vazia</p>
          )}
        </ul>
      </div>
    </>
  );
};

export default Aplication;
