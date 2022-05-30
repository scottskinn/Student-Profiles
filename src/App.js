import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: []
    };
    // console.log('App constructor');
  };

  componentDidMount() {
    fetch('https://api.hatchways.io/assessment/students')
      .then((response) => response.json())
      .then((user) => this.setState(() => {
        return { students: user}
      }, () => {console.log(this.state)}
    ));
  };

  // average = student.grades.map((student) => {
  //   return student.grade;
  // )};
  

  render() {
    return (
      <div className="App">
        <h1>Student Profiles</h1>
        <div>
          {this.state.students.students?.map((student) => {
            const avg =
            student.grades.reduce((sum, curr) => sum + Number(curr), 0) /
            student.grades.length;


            return (
              <div key={student.id}>
                <img src={student.pic}/>
                <h2>{student.firstName} {student.lastName}</h2>
                <p>{student.email}</p>
                <p>{student.company}</p>
                <p>{student.skill}</p>
                <p>{avg}</p>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
