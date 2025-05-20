import { useEffect, useState } from 'react';
import { getPosts, getRandomUser } from './Api';
import './App.css';
import { PostCard } from './components/PostCard';
import { UserCard } from './components/UserCard';

function App() {
    const [data,setData] = useState(null)
    const [userdata, setUserdata] = useState(null)
  useEffect(()=>{
    getPosts().then((posts) => setData(posts));
  },[]);

  useEffect(()=>{
    getRandomUser().then((user) => setUserdata(user.results[0]))
  },[])
  const refresh = ()=>{
    getRandomUser().then((user) => setUserdata(user.results[0]))
  }

  return <div className='App'>
   {userdata && <UserCard  data = {userdata}/>}
   <button onClick={refresh}>Refresh me</button>
  {
   data 
     ? data.map((e) => <PostCard  title={e.title} body = {e.body}/>) : <p> NO DATA </p>
  }
  </div>
}

export default App;
