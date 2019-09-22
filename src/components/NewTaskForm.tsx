import React, { StatelessComponent } from 'react';
import { Task } from '../models/task';

interface NewTaskFormProps {
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onAdd?: (event: React.FormEvent<HTMLFormElement>) => void;
  task: Task;
}

export const NewTaskForm: StatelessComponent<NewTaskFormProps> = ({
  onChange,
  onAdd,
  task
}) => (
  <form onSubmit={onAdd}>
    <input placeholder="Learn TypeScript" onChange={onChange} value={task.name} />{' '}
    <button type="submit">Add a task</button>
  </form>
);