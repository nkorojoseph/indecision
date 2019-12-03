let app = {
    title: 'Indicision App',
    subtitle: 'Put your life in the hands of your computer',
    options: []
  };
  
  const onFormSubmit = e => {
    e.preventDefault();
    let option = e.target.elements.option.value;
    if (option) {
      app.options.push(option);
      e.target.elements.option.value = '';
    }
    renderOptionArrayAdd();
  };
  
  
  const onClearAll = () => {
    app.options = [];
    renderOptionArrayAdd();
  };
  
  const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random()*app.options.length)
    const option = app.options[randomNum]
    alert(option)
  }
  
  const renderOptionArrayAdd = () => {
    let template = (
      <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are some options for you to choose from.' : 'No options'}</p>
        <button disabled={app.options.length===2} onClick={onMakeDecision}>What should I do.? </button>
        <button onClick={onClearAll}>Clear List</button>;
        <ol>
          {app.options.map(item => {
            return <li key={item}>{item}</li>;
          })}
        </ol>
        <form onSubmit={onFormSubmit}>
          <input type='text' name='option' />
          <button>Add option</button>
        </form>
      </div>
    );
    ReactDOM.render(template, appRoot);
  };
  
  const appRoot = document.getElementById('app');
  
  renderOptionArrayAdd();
  