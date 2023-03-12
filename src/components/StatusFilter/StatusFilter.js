import { useSelector } from 'react-redux';
import { getStatusFilters } from '../../redux/selector';
import { statusFilters } from '../../redux/constants';
import { Button } from '../../components/Button/Button';
import css from '../StatusFilter/StatusFilter.module.css';

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilters);

  return (
    <div className={css.wrapper}>
      <Button selected={filter === statusFilters.all}>All</Button>
      <Button selected={filter === statusFilters.active}>Active</Button>
      <Button selected={filter === statusFilters.completed}>Completed</Button>
    </div>
  );
};
