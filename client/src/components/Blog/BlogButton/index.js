// @flow
import React from 'react';
import type { BlogButtonType } from '../../../types/component';
import '../../../style/components/Blog/BlogButton.Module.scss';

const Button = (props: BlogButtonType): React$Element<any> => {
  const { onClick, label } = props;
  return (
    <button className="Button" type="button" onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
