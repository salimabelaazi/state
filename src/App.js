
import './App.css';
import React from 'react';
import Profile from './Profile';

class App extends React.Component {  

          constructor(props) {
              super(props)
              this.state = {
                shows: false
              }
            }
            toggleShows= () => {
              this.setState({shows: !this.state.shows})
              console.log(this.state.shows);
            }
            render(){
              return(
                <div className='App'>
                <button onClick={this.toggleShows}>
                  {this.state.shows ? "Hide" : "show"}
                </button>

            {this.state.shows && <Profile/>}
                </div>
               
          )
        }
  }


export default App;
