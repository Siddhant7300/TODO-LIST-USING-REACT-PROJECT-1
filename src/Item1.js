import React from 'react';
import { MdDelete } from 'react-icons/md';

function Item1({ name, date, onDelete }) {
  function deleteCalled() {
    onDelete(name);
  }

  return (
    <div>
      <div className="added_item-1">
        <div className='item-name'>
          <p>{name}</p>
        </div>
        <div className='item-date'>
          <p>{date}</p>
        </div>
        <div>
          <button onClick={deleteCalled}>
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Item1;
