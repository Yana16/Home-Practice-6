import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/actions';
import { getStatusFilters } from '../../redux/selector';
import { statusFilters } from '../../redux/constants';
import { Button } from '../../components/Button/Button';
import css from '../StatusFilter/StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = (filter = dispatch(setStatusFilter.all));

  const filter = useSelector(getStatusFilters);

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        All
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => handleFilterChange(statusFilters.active)}
      >
        Active
      </Button>
      <Button
        selected={filter === statusFilters.completed}
        onClick={() => handleFilterChange(statusFilters.all)}
      >
        Completed
      </Button>
    </div>
  );
};
