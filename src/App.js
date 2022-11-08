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

      <div className='intro'>
        <div>
          <img src='/IMG/intro.png' className='wind' alt='intro'></img>
        </div>
        <div className='question'>
          <h1>Ready for an <span className='fly'>adventure?</span></h1>
        </div>

        <div className='flight-search'>
          <div className='search-block from '>
            <div>
              <img className='icon' src='/IMG/Union.svg' alt='union'/>
              <input placeholder='From where?'></input>
            </div>
          </div>
          <div className='search-block from'>
            <div>
              <img className='icon'  src='/IMG/where.svg' alt='union'/>
              <input placeholder='Where to?'></input>
            </div>
            
          </div>
          <div className='search-block depart'>
            <div>
              <img className='icon' src='/IMG/calendar.svg' alt='union'/>
              <input className='date'  placeholder='Depart - Return'></input>
            </div>
          </div>
          <div className='search-block adult'>
            <div>
              <img className='icon'  src='/IMG/person.svg' alt='union'/>
              <input placeholder='1 adult'></input>
            </div>
          </div>
          <div className='search-block'>
            <div className='btn'>
              <img src='/IMG/Search.svg' className='mr-10'></img>
              <span className='search'>Search</span>
            </div>
          </div>
        </div>
      </div>

      <div className='recomended'>

      </div>

      

      
    </div>
  );
}

export default App;
