import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react';


function App() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios.get('/urls').then(res => {
      console.log(res.data);
      setUrls(res.data.urlsDatabase);
    })
  }, [])

  return (
    <div className="App">
      <h1>HEllo World</h1>
      <h1>Short Urls</h1>
      {Object.keys(urls).map(shortURL => <li>{shortURL} {urls[shortURL]} </li>)}
    </div>
  );
}

export default App;
