import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import PropTypes from 'prop-types';

export const Filter = () => {
  const filter = useSelector(selectFilter);

  const dispatch = useDispatch();
  const onCnange = evt => dispatch(setFilter(evt.target.value));

  return (
    <label htmlFor="filter">
      Find contact by name
      <input type="text" name="filter" value={filter} onChange={onCnange} />
    </label>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
