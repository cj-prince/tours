import React, {useState, useEffect} from 'react';
import './App.css';
import Tours from './Tours';
import Loading from './Loading'
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tour = await response.json();
      setLoading(false)
      setTours(tour)
    } catch (error){
      setLoading(false)
      console.log(error)
    }    
    
  }
  useEffect(() => {
    fetchTours()
  },[])

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
