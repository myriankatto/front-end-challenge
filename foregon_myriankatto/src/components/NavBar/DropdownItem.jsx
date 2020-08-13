import React from 'react';
import { components } from 'react-select';
import './styles.scss';

const Option = (props) => {
  return (
      <div className="dropdown__item">
    <components.Option {...props}>
        <div style={props.data.style} className="dropdown__title">
          {props.data.label}
        </div>
        <div className="dropdown__subtitle">{props.data.subLabel}</div>
    </components.Option>
      </div>
  );
};


export default Option;
