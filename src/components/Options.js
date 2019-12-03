import React from 'react';
import Option from './Option';

const Options = props => (
  <div>
    <div className='widget-header'>
      <h3 className='widget-header__title'>Your Options</h3>
      <button className='button button--link' onClick={props.handleRemoveAll}>
        Remove All
      </button>
    </div>
    {props.opt.length === 0 && (
      <p className='widget-p'>Please add more options to get started</p>
    )}
    {props.opt.map((option, index) => (
      <Option
        key={option}
        optionText={option}
        count={index + 1}
        handleDeleteOption={props.handleDeleteOption}
      />
    ))}
  </div>
);

export default Options;
