import React from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { loadPosts } from './redux/actions/exampleAction';

class App extends React.Component {
  componentDidMount() {
    this.props.loadPosts();
  }

  render() {
    const { data, requesting } = this.props.example;

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
}

const mapStateToProps = state => {
  return {
    example: state.example
  }
}

const mapDispatchToProps = {
  loadPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
