/* eslint-disable no-param-reassign */
import InputPanel from '../new-task-form';
import FooterInformation from '../footer';
import TaskList from '../task-list';
import React, { useState } from 'react';

import './app.css';

function ConstructionDOM() {
  let numId = 1;

  const addTask = (str, min, sec) => {
    const minOfSec = min * 60;
    const timeLert = minOfSec + Number(sec);
    const ad = numId;
    numId += 1;
    return {
      editingTask: false,
      timeСreation: new Date(),
      lab: str,
      time: timeLert,
      important: false,
      done: false,
      id: ad,
    };
  };

  const [styleButFilter, setStyleButFilter] = useState(1);
  const [todoArr, setTodoarr] = useState([addTask('Создайте задачу', '00', '05')]);

  const completedTask = (str) => {
    const newArr = [...todoArr.slice(0)];
    const indexEl = newArr.findIndex((el) => el.id === str);
    const element = newArr[indexEl];
    element.important = !element.important;
    setTodoarr(newArr);
  };

  const delElement = (str) => {
    const indexEl = todoArr.findIndex((el) => el.id === str);
    const newArr = [...todoArr.slice(0, indexEl), ...todoArr.slice(indexEl + 1)];
    setTodoarr(newArr);
  };

  const deletingAllCompleted = () => {
    const copyArr = [...todoArr];
    const newArr = copyArr.filter((el) => !el.important);
    setTodoarr(newArr);
  };

  const allTasksFilter = () => {
    setStyleButFilter(1);
    const newArr = [...todoArr];
    newArr.forEach((el) => {
      el.done = false;
    });
    setTodoarr(newArr);
  };

  const activeTasksFilter = () => {
    allTasksFilter();
    setStyleButFilter(2);
    const newArr = [...todoArr];
    newArr.forEach((el) => {
      if (el.important) {
        el.done = true;
      }
    });
    setTodoarr(newArr);
  };

  const completedTasksFilter = () => {
    allTasksFilter();
    setStyleButFilter(3);
    const newArr = [...todoArr];
    newArr.forEach((el) => {
      if (!el.important) {
        el.done = true;
      }
    });
    setTodoarr(newArr);
  };

  const addTaskOfForm = (label, min, sec) => {
    const newArr = [...todoArr];
    newArr.push(addTask(label, min, sec));
    setTodoarr(newArr);
  };

  const editingTaskBut = (str) => {
    const indexEl = todoArr.findIndex((el) => el.id === str);
    const newArr = [...todoArr];
    newArr[indexEl].editingTask = !newArr[indexEl].editingTask;
    setTodoarr(newArr);
  };

  const newTextTask = (props) => {
    const { label, id } = props;
    const indexEl = todoArr.findIndex((el) => el.id === id);
    const newArr = [...todoArr];
    newArr[indexEl].lab = label;
    newArr[indexEl].editingTask = !newArr[indexEl].editingTask;
    setTodoarr(newArr);
  };

  const restOfTasks = todoArr.filter((el) => !el.important).length;

  return (
    <div>
      <InputPanel addTaskOfForm={addTaskOfForm} />
      <TaskList
        onSubmit={allTasksFilter}
        editingTaskBut={editingTaskBut}
        delEl={delElement}
        completedTask={completedTask}
        todos={todoArr}
        newTextTask={newTextTask}
      />
      <FooterInformation
        restOfTasks={restOfTasks}
        deletingAllCompleted={deletingAllCompleted}
        allTasksFilter={allTasksFilter}
        activeTasksFilter={activeTasksFilter}
        completedTasksFilter={completedTasksFilter}
        styleButFilter={styleButFilter}
      />
    </div>
  );
}

export default ConstructionDOM;
