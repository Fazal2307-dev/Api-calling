import { useEffect, useState } from 'react';
import { getPosts, getRandomUser } from './Api';
import './App.css';
import { PostCard } from './components/PostCard';

function App() {
    const [data,setData] = useState(null)
  useEffect(()=>{
    getPosts().then((posts) => setData(posts));
  },[]);

  useEffect(()=>{
    getRandomUser().then((user) => console.log(user))
  },[])

  return <div className='App'>
  {
   data 
     ? data.map((e) => <PostCard  title={e.title} body = {e.body}/>) : <p> NO DATA </p>
  }
  </div>
}

export default App;
