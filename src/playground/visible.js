class Visibility extends React.Component{
    constructor(props){
        super(props)
        this.handleVisibilityToggle = this.handleVisibilityToggle.bind(this)
        this.state= {
            visibility : false
        }
    }

    handleVisibilityToggle(){
        this.setState((prevState)=>{
            return {
                visibility : !prevState.visibility 
            }
           
        })
    }

    render(){

        return(
            <div> 
            <h1>Visibility Toggle</h1>
            <button onClick={this.handleVisibilityToggle}> 
            {this.state.visibility ? 'Show how it works' : 'Hide how it works'}
            </button>
            {this.state.visibility && (<div>
                <p>These are some details you can now see</p>
            </div>)}
        </div>
        )
    }

    
}

ReactDOM.render(<Visibility />, document.getElementById('app'))

// let visibility = false;

// const toggleVisibility = () => {
//     visibility = !visibility;
//     render();
// }

// const render = () => {
// const vJsx = (
//     <dvi> 
//         <h1>Visibility Toggle</h1>
//         <button onClick={toggleVisibility}> 
//         {visibility ? 'Show how it works' : 'Hide how it works'}
//         </button>
//         {visibility && (<div>
//             <p>These are some details you can now see</p>
//         </div>)}
//     </dvi>
// );

//     ReactDOM.render(vJsx,appRoot)
// }
// const appRoot = document.getElementById('app');
// render();