import React, { Component } from 'react';
import './App.css';
import NewsList from './components/news-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p><a href="https://newsapi.org"> Used newsapi.org</a></p>
        <NewsList />
      </div>
    );
  }
}

export default App;
