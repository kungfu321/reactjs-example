import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadPosts } from './redux/actions/exampleAction';

function App() {
  const data = useSelector((state) => state.example.data);
  const requesting = useSelector((state) => state.example.requesting);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadPosts());
  }, [dispatch]);

  return (
    <div className="App">
      <header className="App-header">
        {
          requesting ?
            <img src={logo} className="App-logo" alt="logo" />
            :
            (data && data.length > 0) ? <div>
              <ul className="list-group">
                {data.map(item =>
                  <li key={item.id} className="list-group-item">{item.title}</li>
                )}
              </ul>
            </div>
              : <div>Data is empty</div>
        }
      </header>
    </div>
  );
}

export default App;
