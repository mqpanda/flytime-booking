import './App.css';

function App() {
  return (
    <div className="wrapper clear">
      <header className='d-flex justify-between align-center'>
        <div className='header-left'>
          <div className='logo'>
            <span className='fly'>fly</span>time
          </div>
        </div>
        <ul className='d-flex header-right'>
          <li>Flights</li>
          <li>Packages</li>
          <li>Settings</li>
          <li>Sign in</li>
          <li><button className='sign cu-p'>Sign up</button></li>
        </ul>
      </header>



      <div className='flight-search'>
        <input placeholder='From where?' >
          
        </input>
        <input placeholder='Where-to' >
        </input>
        <input type="date">
        
        </input>
        <input placeholder='1 adult'>
        
        </input>
        <button>
          Search
        </button>
        
        
      </div>  

    </div>
  );
}

export default App;
