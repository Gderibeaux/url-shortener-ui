import React, { Component } from 'react';
import './App.css';
import { getUrls } from '../../apiCalls';
import UrlContainer from '../UrlContainer/UrlContainer';
import UrlForm from '../UrlForm/UrlForm';

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urls: []
    }
  }

  componentDidMount() {
    getUrls()
    .catch((error) => {
      console.error(error.message);
      this.setState({ error: error.message });
    })
    .then((data) => {
      this.setState({ urls: data.urls });
    });
  }

  addUrl = url => {
    this.setState({ urls: [...this.state.urls, url] });
  }

  render() {
    return (
      <main className="App">
        <h1>{console.log('PROPS', this.state.urls)}</h1>
        <header>
          <h1>URL Shortener</h1>
          <UrlForm addUrl={this.addUrl}/>
        </header>

        <UrlContainer urls={this.state.urls}/>
      </main>
    );
  }
}

export default App;
