import React from 'react';

let people = [
  {
    id:0,
    name: "Sasha",
    avatar: "http://lorempixel.com/400/400/"
  },
  {
    id:1,
    name: "Ivan",
    avatar: "http://lorempixel.com/400/400/"
  },
  {
    id:2,
    name: "Den",
    avatar: "http://lorempixel.com/400/400/"
  },
  {
    id:3,
    name: "Andrew",
    avatar: "http://lorempixel.com/400/400/"
  },
  {
    id:4,
    name: "Boris",
    avatar: "http://lorempixel.com/400/400/"
  }
];

class Card extends React.Component {

  render(){
     return <div>
       <h2>{this.props.name}</h2>
       <img src={this.props.avatar} alt=""/>
       <div></div>
       <button onClick={this.props.onClick}>Delete</button>
     </div>
  }
}

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      people
    };
  }
  deletePerson(person) {
    this.state.people.splice(this.state.people.indexOf(person), 1);

    this.setState({
      people: this.state.people
    });
  }

  render() {
    return (
      <div>
        {this.state.people.map((person) => <Card key={person.id} onClick={() => this.deletePerson(person)} name={person.name} avatar={person.avatar}> </Card>
        )}
      </div>
    );
  }
}

App.propTypes = {};
App.defaultProps = {};

export default App
