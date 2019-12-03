//JSX - Javascript xml
//use live-server public to present your public folder to the browser.
//use babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch  to run your file and include --watch to track changes in the background
let app = {
  title: 'Indicision App',
  subtitle: 'Put your life in the hands of your computer',
  options: []
};

// let template = (
//   <div>
//     <hi>{app.title}</hi>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? 'Here are some options ' : 'No options'}</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// );

// let user = {
//   name:'Nkoro Joseph',
//   location: 'Lagos'
// };

// function getLocation(location) {
//   if (location) {
//     return <p>Location: {location}</p>;
//   } else {
//     return 'Unknown';
//   }
// }

// let tempTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {user.age >= 18 && user.age && <p>{user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );
// let count = 0;
// const addOne = () => {
//   count++;
//   renderCounterApp();
// };


// const subOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// let appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const template2 = (
//     <div>
//       <h1>Increment part 1</h1>
//       <h1>Count: {count}</h1>
//       <button id='my-id' className='button' onClick={addOne}>
//         +1
//       </button>{' '}
//       <button id='my-id' className='button' onClick={subOne}>
//         -1
//       </button>{' '}
//       <button id='my-id' className='button' onClick={reset}>
//         reset
//       </button>
//     </div>
//   );

//   ReactDOM.render(template2, appRoot);
// };

// renderCounterApp();

class Counter extends React.Component{
  constructor(props){
    super(props)

    this.handleAddOne = this.handleAddOne.bind(this)
    this.handleMinusOne = this.handleMinusOne.bind(this)
    this.handleReset = this.handleReset.bind(this)

    this.state = {
      count:0
    }

  }

handleAddOne(){
this.setState((prevState)=>{
  return {
    count: prevState.count+1
  }
})
}

handleMinusOne(){
this.setState((prevState)=>{
  return {
    count: prevState.count - 1
  }
})
}

handleReset(){
this.setState((prevState)=>{
  return{
    count: 0
  }
})
}

render(){
  return(
      <div>
      <h1>Increment part 1</h1>
      <h1>Count: {this.state.count}</h1>
      <button id='my-id' className='button' onClick={this.handleAddOne}>
        +1
      </button>{' '}
      <button id='my-id' className='button' onClick={this.handleMinusOne}>
        -1
      </button>{' '}
      <button id='my-id' className='button' onClick={this.handleReset}>
        reset
      </button>
    </div>
  )
}


}

ReactDOM.render(<Counter />,document.getElementById('app'))