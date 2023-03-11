// import { clsx } from 'clsx';
import css from '../Button/Button.module.css';

export const Button = ({
  selected = false,
  type = 'button',
  children,
  ...otherProps
}) => {
  return (
    <button
      className={css.btn}
      // className={clsx(css.btn, {
      //   [css.isSelected]: selected,
      // })}
      type={type}
      {...otherProps}
    >
      {children}
    </button>
  );
};
