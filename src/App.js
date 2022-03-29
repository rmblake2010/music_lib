import { useState, useRef} from 'react'
import Gallery from './components/Gallery'
import Searchbar from './components/Searchbar';
import { DataContext } from './contexts/DataContext';
import { SearchContext } from './contexts/SearchContext';
import './App.css';

function App() {
  //because other items will need to pass down data use states will be defined in 
  //app so it can be passed down to both searchbar and gallery

  // setting use state for search bar
  let [search, setSearch] = useState('')
  //setting state for message
  let [message, setMessage] = useState('Search for Music!')
  //data we take in API call
  const [data, setData] = useState([])

  let searchInput = useRef('');

  const API_URL = 'https://itunes.apple.com/search?term='
/*
  //API call using use effect
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${API_URL}${search}`)
      const resData = await response.json()
      if(resData.results.length > 0){
        setData(resData.results)
      }else {
        setMessage('Results not Found')
      }
    }
    fetchData()
  }, [search])
*/ 
  const handleSearch = (e, userInput) => {
    //prevents full page re render
    e.preventDefault();
    const fetchData = async () => {
      const response = await fetch(`${API_URL}${userInput}`)
      const resData = await response.json()
      if(resData.results.length > 0){
        setData(resData.results)
      }else {
        setMessage('Results not Found')
      }
    }
    fetchData()
    setSearch(userInput);
  }
    
  

  return (
    <div className="App">
      <SearchContext.Provider value={{term: searchInput, handleSearch}}>
      <Searchbar handleSearch={handleSearch}/>
      </SearchContext.Provider>
      <h2>{message}</h2>
      <DataContext.Provider value={data}>
        <Gallery />
      </DataContext.Provider>  
    </div>
  );
}

export default App;
