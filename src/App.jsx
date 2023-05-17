import './App.css';
import Blog from './blog';
import Highlights from './highlights';

const App = ({appLogo}) =>{
  
  const date = new Date();
let text = date.toString();
const myDate = text.slice(0, 15);
  
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
