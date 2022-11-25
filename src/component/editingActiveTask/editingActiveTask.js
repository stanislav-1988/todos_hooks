import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './editingActiveTask.css';

function EditingActiveTask({ newTextTask, id, lab }) {
  const [label, setLabel] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    if (label === '') {
      setLabel('Пустая задача');
      newTextTask({ label, id });
    } else {
      newTextTask({ label, id });
    }
  };

  const inputValue = (e) => {
    setLabel(e.target.value);
  };

  return (
    <form onSubmit={onSubmit}>
      <input onChange={inputValue} type="text" className="edit" defaultValue={lab} />
    </form>
  );
}

EditingActiveTask.defaultProps = {
  newTextTask: () => {},
};

EditingActiveTask.propTypes = {
  newTextTask: PropTypes.func,
};

export default EditingActiveTask;
