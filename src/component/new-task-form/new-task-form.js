/* eslint-disable no-alert */
import React, { useState } from 'react';
import PropTypes from 'prop-types';

import './new-task-form.css';

function InputPanel({ addTaskOfForm }) {
  const [lab, setLab] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (min === '' || sec > 60) {
      alert('НЕ КОРРЕКТНО ВВЕДЕННОЕ ВРЕМЯ ВЫПОЛНЕНИЯ ЗАДАЧИ');
    } else if (lab === '') {
      alert('НЕ ВВЕЛИ ЗАДАЧУ!');
    } else if (sec === '') {
      addTaskOfForm(lab, min, 0);
    } else {
      addTaskOfForm(lab, min, sec);
    }
    setLab('');
    setMin('');
    setSec('');
  };

  const inputValueTask = (e) => {
    const label = e.target.value;
    setLab(label);
  };

  const inputMinTask = (e) => {
    const minut = e.target.value;
    setMin(minut);
  };

  const inputSecTask = (e) => {
    const second = e.target.value;
    setSec(second);
  };

  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmitCapture={onSubmit} className="new-todo-form">
        <input type="submit" className="display-none" />
        <input key="text" onChange={inputValueTask} className="new-todo" placeholder="Добавить задачу" value={lab} />
        <input
          type="number"
          key="min"
          onChange={inputMinTask}
          className="new-todo-form__timer"
          placeholder="Min"
          onClick={onSubmit}
          value={min}
        />
        <input
          type="number"
          key="sec"
          onChange={inputSecTask}
          className="new-todo-form__timer"
          placeholder="Sec"
          value={sec}
        />
      </form>
    </header>
  );
}

InputPanel.defaultProps = {
  addTaskOfForm: () => {},
};

InputPanel.propTypes = {
  addTaskOfForm: PropTypes.func,
};

export default InputPanel;
