import React, { Component } from 'react';

class Home extends Component {
  constructor() {
		super();

		this.state = {
      posts: []
		}
	}

  // handleHoverOff = (evt) => {
  //   clearTimeout(timer);
  //
  //   this.props.whenHoverOff()
  // }

   componentWillMount() {
     console.log("woo");
     fetch('http://localhost:8000/posts')
     .then((result) => {
       return result.json();
     }).then((jsonResult) => {
       console.log(jsonResult);
       this.setState({ posts: jsonResult })
     })
   }

  getAllPosts = () => {

  }

  render() {
    this.getAllPosts;
    return (
      <div>
        { /*this.state.posts != null? this.state.posts[1].title*/ }
      </div>
    )
  }
}

export default Home;
