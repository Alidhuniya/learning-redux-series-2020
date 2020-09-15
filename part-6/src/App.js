import React from "react";
import "./App.scss";

import { connect } from 'react-redux';
import { addPost } from "./redux/actions";
import { loadPost } from './redux/actions/index';

class App extends React.Component {
  constructor() {
    super()
    this.state = { value: '' }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => {
        this.props.dispatch(loadPost(json))
	  })
	  
	 
  }

  handleChange(event) {
    this.setState({ value: event.target.value })
  }

  handleSubmit(event) {
	event.preventDefault()

	//inline way doing dispatch
	// this.props.dispatch({
	// 	type: 'ADD_TO_DO',
	// 	payload: { id: this.state.postId, title: this.state.value }
	//   })


	/* external way doing dispatch from actions folder*/
	  this.props.dispatch(addPost({ id: this.state.postId, title: this.state.value }));

	 
  
	  this.setState({ postId: this.state.postId + 1 })
  
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <form onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
            />
            <div>
              <button type="submit" onClick={this.handleSubmit}>
                Submit
              </button>
            </div>
          </form>
          <ul>
            {this.props.posts.map(post => (
              <li key={post.id}>{post.title}</li>
            ))}
          </ul>
        </header>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return { posts: state.posts }
}

const mapDispatchToProps = dispatch => {
	return {
	  dispatch
	}
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)