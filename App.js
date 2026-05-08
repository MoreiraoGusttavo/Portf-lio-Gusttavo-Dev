import React, { useState } from 'react';

function App() {
  // Lista de todas as tarefas
  const [tasks, setTasks] = useState([]);
  // Texto que o usuário está escrevendo no momento
  const [txt, setTxt] = useState('');

  // Adiciona a tarefa se o usuário apertar Enter
  function handleAdd(evento) {
    if (evento.key === 'Enter' && txt.trim() !== '') {
      // Cria um objeto para a nova tarefa
      const brandnew = { 
        id: Date.now(), 
        txt: txt, 
        done: false 
      };

      // Adiciona na lista e limpa o campo de texto
      setTasks([...tasks, brandnew]);
      setTxt('');
    }
  }

  // Remove uma tarefa da lista usando o ID
  function remove(id) {
    const remainingTasks = tasks.filter(item => item.id !== id);
    setTasks(remainingTasks);
  }

  // Marca como feita ou desfaz a marcação
  function toggle(id) {
    const updatedTasks = tasks.map(item => {
      if (item.id === id) {
        return { ...item, done: !item.done };
      }
      return item;
    });
    setTasks(updatedTasks);
  }

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'flex-start', // Agora começa no topo
      paddingTop: 50, // Dá um espaço do topo da página
      paddingLeft: 20,
      paddingRight: 20,
      minHeight: '100vh', 
      fontFamily: 'Arial, sans-serif',
      padding: 20
    }}>
      <h1>Bem-Vindo ao seu App de Tarefas!</h1>
      <h2>Lista de Tarefas</h2>

      {/* Campo para digitar novas tarefas */}
      <div style={{ width: '100%', maxWidth: 400, display: 'flex' }}>
        <input
          value={txt}
          onChange={(e) => setTxt(e.target.value)}
          onKeyDown={handleAdd}
          placeholder="O que você precisa fazer?"
          style={{ padding: 10, flex: 1, marginBottom: 20 }}
        />
      </div>

      {/* Mostra a lista na tela */}
      <ul style={{ listStyle: 'none', padding: 0, width: '100%', maxWidth: 400 }}>
        {tasks.map(item => (
          <li 
            key={item.id} 
            style={{ 
              margin: '10px 0', 
              padding: 10, 
              background: item.done ? '#35a107' : '#f8f9fa',
              borderRadius: 5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {/* Checkbox para marcar como concluído */}
              <input 
                type="checkbox" 
                checked={item.done} 
                onChange={() => toggle(item.id)} 
              />

              {/* O texto da tarefa com risco se estiver pronta */}
              <span style={{ 
                marginLeft: 10, 
                textDecoration: item.done ? 'line-through' : 'none' 
              }}>
                {item.txt}
              </span>
            </div>

            {/* Botão para apagar a tarefa */}
            <button 
              onClick={() => remove(item.id)} 
              style={{ 
                marginLeft: 15, 
                cursor: 'pointer',
                backgroundColor: 'red',
                color: 'white',
                border: 'none',
                padding: '5px 10px',
                borderRadius: 4 
              }}
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;