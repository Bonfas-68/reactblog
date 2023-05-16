import './App.css';
import Blog from './blog';
import Highlights from './highlights';

const App = ({appLogo}) =>{
  
  const date = new Date();
  const day = date.getDay()
  const year = date.getFullYear()
  const month = date.getMonth()
  const myDate = `${year} / ${month} / ${day}`;
  console.log(`${year} / ${month} / ${day}`)
  console.log(myDate)
  return(
    <main className='app-content'>
      <div className="logo"><h1>{appLogo} Billionaire Blogs</h1></div>
      <div className="grid-container">
          <Blog />
          <Highlights />
        </div>
        <footer>
          <span className="myname">BonfasOluoch@theJitu</span>
          <span className="myname">
            {myDate}
          </span>
        </footer>
    </main>
  )
}

export default App