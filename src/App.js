import logo from './logo.svg';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import ImageComponent from './components/ImageComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Primo giorno di react
        </p>
        <div className='d-flex'>
        <ButtonComponent buttonName ="React DOM" buttonLink="https://it.legacy.reactjs.org/docs/react-dom.html"/>
        <ButtonComponent buttonName ="Lodash" buttonLink="https://lodash.com/  "/>
        <ButtonComponent buttonName ="Git Bash" buttonLink="https://www.timschaeps.be/post/adding-git-bash-to-windows-terminal/ "/>
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div className="react-img-div">
          <ImageComponent
           className="react-img"
           src="https://kinsta.com/it/wp-content/uploads/sites/2/2022/07/what-is-react-js-feature-image.png"
          alt="React-Img"
         />
          <ImageComponent
           className="react-img"
           src="https://kinsta.com/it/wp-content/uploads/sites/2/2023/06/install-react-2.jpg"
          alt="React"
         />
        </div>
      </header>
    </div>
  );
}

export default App;
