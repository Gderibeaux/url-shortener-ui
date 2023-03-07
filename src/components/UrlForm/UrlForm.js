import React, { Component } from 'react';

class UrlForm extends Component {
  constructor(props) {
    super();
    this.props = props;
    this.state = {
      title: '',
      urlToShorten: ''
    };
  }

  handleNameChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleInputChange = e => {
    this.setState({ [e.target.input]: e.target.value });
  }
  handleSubmit = e => {
    e.preventDefault();
    fetch('http://localhost:3001/api/v1/urls', {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        title: this.state.title,
        long_url: this.state.urlToShorten
      })
    })
      .then(response => {
      if (!response.ok) {
      throw new Error('Network response was not ok');
        }
        return response.json()
    })
    .then(data => {
      this.props.addUrl(data);
    })
    .catch(error => {
      console.error('There was a problem with the fetch operation:', error);
  });
  this.clearInputs();
}
  clearInputs = () => {
    this.setState({title: '', long_url: ''});
  }

  render() {
    return (
      <form>
        <input
          type='text'
          placeholder='Title...'
          name='title'
          value={this.state.title}
          onChange={e => this.handleNameChange(e)}
        />

        <input
          type='text'
          placeholder='URL to Shorten...'
          name='title'
          value={this.state.long_url}
          onChange={e => this.handleInputChange(e)}
        />

        <button onClick={e => this.handleSubmit(e)}>
          Shorten Please!
        </button>
      </form>
    )
  }
}

export default UrlForm;
