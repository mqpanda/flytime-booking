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
          <div className='from'>
            <img className='icon' width={21} height={18} src='/IMG/Union.svg' alt='union'/>
            <h6>From where?</h6>
          </div>
          <div className='from'>
            <img className='icon' width={21} height={18} src='/IMG/Union.svg' alt='union'/>
            <h6>Where to?</h6>
          </div>
          <div className='from'>
            <img className='icon' width={21} height={18} src='/IMG/Union.svg' alt='union'/>
            <h6>Depart - Return</h6>
          </div>
          <div className='from'>
            <img className='icon' width={21} height={18} src='/IMG/Union.svg' alt='union'/>
            <h6>1 adult</h6>
          </div>
          <div className='from'>
            <div className='btn'>
              Search
            </div>
          </div>
        </div>
      </div>



      
    </div>
  );
}

export default App;
