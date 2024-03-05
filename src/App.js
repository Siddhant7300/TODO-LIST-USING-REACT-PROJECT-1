import React, { useState, useRef } from 'react';
import './App.css';
import Add from './Add';
import Items from './Items';

const App = () => {
  const [items, setItems] = useState([
    { name: 'first', date: '04/08/2002' },
    { name: 'second', date: '04/08/2002' },
    { name: 'third', date: '04/08/2002' },
  ]);

  const itemsRef = useRef(items);

  function handleData(name, date) {
    // Update the state with the new item
    setItems([...itemsRef.current, { name, date }]);
  }

  function handleDelete(name) {
    // Filter out the item with the given name
    const updatedItems = items.filter(item => item.name !== name);
    setItems(updatedItems);
  }
  

  return (
    <center className='container'>
      <header>
        <h1>Todo App</h1>
      </header>
      <Add addFun={handleData} />
      <Items items={items} onDelete={handleDelete} />
    </center>
  );
};

export default App;
