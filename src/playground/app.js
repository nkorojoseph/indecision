class IndecisionApp extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      options: []
    }
    this.handlePick = this.handlePick.bind(this)
    this.handleRemoveAll = this.handleRemoveAll.bind(this)
    this.handleAddOptions = this.handleAddOptions.bind(this)
    this.handleDeleteOption = this.handleDeleteOption.bind(this)
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

  componentWillUnmount(){
    console.log('Will mount data')
  }

  componentDidUpdate(prevState,prevProps) {

    if(prevState.options.length !== this.state.options.length){
      const json = JSON.stringify(this.state.options);
      localStorage.setItem('options',json)
    }

  }

handleRemoveAll(){ this.setState(()=>({ options:[]}))}

handleDeleteOption(optionToRemove){
  this.setState((prevState)=> ({
    options: prevState.options.filter((option)=>{
      return optionToRemove !== option;
    })
  }))
}

handlePick(){
  const randomNum = Math.floor(Math.random()*this.state.options.length)
  const option = this.state.options[randomNum]
  alert(option)
}
handleAddOptions(option){
if(!option){
  return 'Enter Valid Value Item to Add';
}else if(this.state.options.indexOf(option) > -1){
  return 'This option already exists.';
}else
  this.setState((prevState)=>({ options: prevState.options.concat([option])}))}
  render(){
   const  title = "Indecision App";

    return ( 
      <div>
        <Header/>
        <Action 
        name='indecision dashboard' 
        hasOptions={this.state.options.length>0}
        handlePick = {this.handlePick}
        ></Action>
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
    )
  }
}

// IndecisionApp.defaultProps = {
// options: []
// };

const Header= (props) => {
  return (
    <h1>INDICISION</h1>
  )
}

const Options = (props) => {
  return ( 
    <div>
      <button onClick={props.handleRemoveAll}>
        Remove All
      </button>
      {props.opt.length === 0 && <p>Please add more options to get started</p>}
    {
    props.opt.map((option)=> (
      <Option 
      key={option} 
      optionText = {option}
      handleDeleteOption = {props.handleDeleteOption}
      />)
      )
  }
  </div>
  )
}
 
const Option = (props) => {
  return (
    <div>
      {props.key} {props.optionText} 
      <button 
        onClick= {(e)=>{
          props.handleDeleteOption(props.optionText)
        }}
        > Delete</button>       
    </div>
     
   )
}

const Action = (props) => {
return(
  <div> 
        <button 
        onClick={props.handlePick}
        disabled={!props.hasOptions}
        >
          Do Something. </button>
      </div>
)
}

class AddOption extends React.Component {
  constructor(props){
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.state= {
      error : undefined
    }
  }

   handleSubmit (e){
    e.preventDefault()
    let optValue  =  e.target.elements.option.value.trim()
    const error = this.props.handleAddOptions(optValue)
    this.setState(()=>({error}))
    if(!error){
      e.target.elements.option.value = '';
    }
  }
  
  render (){
    return (
    <div>
      {this.state.error && <p>{this.state.error}</p>}
      <form onSubmit={this.handleSubmit} >
        <input type='text' name='option'></input>
        <button >Add Option</button>
      </form>
    </div>
    )
  }
}


const User = (props) => {
  return (
    <div> 
      <p> Name: {props.name}</p>
      <p> Age: {props.age}</p>
    </div>
  )

}

ReactDOM.render(<IndecisionApp options={[]}/>,document.getElementById('app'))