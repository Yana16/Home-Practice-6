import { useSelector } from 'react-redux';

import { getTasks, getStatusFilters } from '../../redux/selector';
import { statusFilters } from '../../redux/constants';
import { Task } from '../Task/Task';
import css from '../TaskList/TaskList.module.css';

const getVisibleTasks = (tasks, statusFilters) => {
  switch (statusFilters) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilters = useSelector(getStatusFilters);
  const visibleTasks = getVisibleTasks(tasks, statusFilters);
  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
