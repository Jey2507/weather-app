import { useEffect, useState } from 'react';
import SearchBar from '../SearchBar/SearchBar'
import WeatherCard from '../WeatherCard/WeatherCard'
import './App.css'
import { fetchWeather } from '../../weather-api';

function App() {
  const [query, setQuery] = useState("");
  const [spinner, setSpinner] = useState(false);
  const [error, setError] = useState(false);
  const [storage, setStorage] = useState({})

  const handleSearch = async (newQuery) => {
    setStorage({})
    setQuery(newQuery)
  }

  useEffect(() => {
    async function getInfo() {
      if (query === "") {
        return;
      }
      setError(false)
      try {
        setSpinner(true)
        const data = await fetchWeather(query);
        setStorage(data)
      } catch (error) {
        setError(true)
      } finally {
        setSpinner(false)
      }
    }
    getInfo()
  },[query])

const {
  weather: [{ description, icon } = {}] = [],
} = storage;

  return (
    <>
     <SearchBar onSearch={handleSearch} controlSpiner={spinner} description={description} icon={icon}/>
     {query.length > 0 && <WeatherCard items={storage}/>}
    </>
  )
}

export default App
