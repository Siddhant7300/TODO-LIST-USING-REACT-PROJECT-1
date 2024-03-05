import React from 'react';
import Item1 from './Item1';

function Items({ items, onDelete }) {
  return (
    <div>
      {items.map((item) => (
        <Item1 key={item.name} name={item.name} date={item.date} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default Items;
