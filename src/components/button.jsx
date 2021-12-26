import React from 'react';
import pt from 'prop-types';
import cn from 'classnames';

const Button = ({ onClick, className, outline, children }) => {
  return (
    <button
      onClick={onClick}
      className={cn('button', className, {
        'button--outline': outline,
      })}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  onClick: pt.func,
  className: pt.string,
  outline: pt.bool,
  children: pt.node,
};

export default Button;
