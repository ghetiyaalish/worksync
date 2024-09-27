import React from 'react';
import Cards from './Cards';

const Alltask = ({ tasks, onDelete, onEdit, onAdd }) => {
  return (
    <div>
      <Cards tasks={tasks} onDelete={onDelete} onEdit={onEdit} onAdd={onAdd} />
    </div>
  );
};

export default Alltask;
