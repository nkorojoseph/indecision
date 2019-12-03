import React from 'react';

const Action = (props) => {
    return(
      <div > 
            <button 
            className='big-button' 
            onClick={props.handlePick}
            disabled={!props.hasOptions}
            >
              Suggest Activity for me </button>
          </div>
    )
}

export default Action