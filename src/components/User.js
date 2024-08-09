
import { Component } from 'react';

import classes from './User.module.css';


// =======================Class based component==================

class User extends Component {
  componentWillUnmount(){
    console.log('User will unmount!');
  }

  render() {
    return <li className={classes.user}>{this.props.name}</li>;
  }
} 

// =======================Function based component==================
// const User = (props) => {
//   return <li className={classes.user}>{props.name}</li>;
// };

export default User;
