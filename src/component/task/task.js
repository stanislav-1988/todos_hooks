/* eslint-disable no-unused-expressions */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';

import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

import './task.css';

function OneTask({ timeСreation, time, lab, delEl, completedTask, editingTaskBut }) {
  const [date, setDate] = useState('less than 5 seconds ago');
  const [timer, setTimer] = useState(time);
  const [timeIsStop, setTimeIsStop] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // eslint-disable-next-line no-shadow
      timeIsStop && setTimer((timer) => (timer >= 1 ? timer - 1 : 0));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timeIsStop]);

  const taskCreationTimeUpdate = () => {
    const createdTaim = `${formatDistanceToNow(timeСreation, {
      includeSeconds: true,
    })}`;
    setDate(createdTaim);
  };

  const hendelStart = () => {
    setTimeIsStop(true);
  };

  const hendelStop = () => {
    setTimeIsStop(false);
  };

  const minut = Math.floor(timer / 60);
  const min = minut.toString().padStart(2, '0');
  const second = timer - minut * 60;
  const sec = second.toString().padStart(2, '0');
  setInterval(taskCreationTimeUpdate, 5000);

  return (
    <div className="view">
      <input onChange={completedTask} className="toggle" type="checkbox" />
      <label>
        <span className="title">{lab}</span>
        <span className="description description-timer">
          <button onClick={hendelStart} type="button" className="icon icon-play" />
          <button onClick={hendelStop} type="button" className="icon icon-pause" />
          <div className="timeOfimer">{`${min}:${sec}`}</div>
        </span>

        <div className="taim-created">
          <span className="description">{`Created ${date}`}</span>
        </div>
      </label>
      <button type="button" onClick={editingTaskBut} className="icon icon-edit" />
      <button type="button" onClick={delEl} className="icon icon-destroy" />
    </div>
  );
}

OneTask.defaultProps = {
  delEl: () => {},
  completedTask: () => {},
  editingTaskBut: () => {},
};

OneTask.propTypes = {
  delEl: PropTypes.func,
  completedTask: PropTypes.func,
  editingTaskBut: PropTypes.func,
};

export default OneTask;
