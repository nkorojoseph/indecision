import React from 'react';
import Modal from 'react-modal';

//create a function called OptionModal 
//Call the Modal component with props {isOpen,contentLabel,onRequestClose}
//export the function component I just created
const OptionModal = (props) =>  (
        <Modal 
            className='modal'
            closeTimeoutMS={200}
            isOpen={!!props.selectedOption}
            contentLabel='Selected Option'
            onRequestClose={props.handleClearSelectedOption}
            >
            <h3 className='modal__title'>Selected Option</h3>
            {props.selectedOption && <p className='modal__body'>{props.selectedOption}</p>}
            <button className='button' onClick={props.handleClearSelectedOption}>Okay</button>
        </Modal>
    )

 
export default OptionModal; 