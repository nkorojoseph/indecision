import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Options from './Options';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    // constructor(props){
    //   super(props)
    //   this.handlePick = this.handlePick.bind(this)
    //   this.handleRemoveAll = this.handleRemoveAll.bind(this)
    //   this.handleAddOptions = this.handleAddOptions.bind(this)
    //   this.handleDeleteOption = this.handleDeleteOption.bind(this)
    // }

    state = {
      options: [],
      selectedOption: undefined
    }

    //create function to clear the state of the selected option. dont use the prevState attribute
    // since we are just clearing the state no matter what is stored in the selectedOption state
    handleClearSelectedOption = () => {
      this.setState(()=>({
        selectedOption:undefined
      }))
    }

    // create function to remove all the elements in the options state array 
    handleRemoveAll = () => { this.setState(()=>({ options:[]}))}
  
    
    handleDeleteOption = (optionToRemove) => {
      //use prevState.options and use filter to find the first instance where the selected opyion is
      this.setState((prevState)=> ({
        options: prevState.options.filter((option)=>{
          return optionToRemove !== option;
        })
      }))
    }
    
    handlePick = () => {
      const randomNum = Math.floor(Math.random()*this.state.options.length)
      const option = this.state.options[randomNum]
      this.setState(()=>({
        selectedOption : option}
      ))
    }

    handleAddOptions = (option) => {
    if(!option){
      return 'Enter Valid Value Item to Add';
    }else if(this.state.options.indexOf(option) > -1){
      return 'This option already exists.';
    }else
      this.setState((prevState)=>({ options: prevState.options.concat([option])}))
      }
  
    componentDidMount(){
      try {
          const json = localStorage.getItem('options');
        const options = JSON.parse(json);
        
        if(options){
          this.setState(()=>({options}))
        }
      } catch (e) {
        
      }  
    }
  
    // componentWillUnmount(){
    //   console.log('Will mount data')
    // }
  
    componentDidUpdate(prevState,prevProps) {
  
      if(prevState.options.length !== this.state.options.length){
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options',json)
      }
  
    }

  
    render(){
     const  title = "Indecision Application";
  
      return ( 
        <div>
          <Header title={title} subtitle="Put your life in the hands of your computer"/>
          <div className='container'>
          <Action 
          name='Indecision dashboard' 
          hasOptions={this.state.options.length>0}
          handlePick = {this.handlePick}
          ></Action>
          <div className='widget'>
          <Options 
          opt={this.state.options} 
          handleRemoveAll={this.handleRemoveAll}
          handleDeleteOption={this.handleDeleteOption}
          />
          <AddOption
          handleAddOptions={
            this.handleAddOptions
          } 
          />
          </div>
          
          </div>
          <OptionModal 
            selectedOption={this.state.selectedOption} 
            handleClearSelectedOption={this.handleClearSelectedOption}
            />
        </div>
      )
    }
  }