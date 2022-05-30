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
      }, 
      // () => {console.log(this.state)}
    ));
  };

  render() {
    return (
      <div className="App">
        <div>
          {this.state.students.students?.map((student) => {
            const avg =
            student.grades.reduce((sum, curr) => sum + Number(curr), 0) /
            student.grades.length;


            return (
              <div key={student.id} className='container'>
                <img src={student.pic} className='student-pic'/>

                <div className='student-info'>
                  <h1 className='student-name'>
                    {student.firstName} {student.lastName}
                  </h1>
                  <p>Email: {student.email}</p>
                  <p>Company: {student.company}</p>
                  <p>Skill: {student.skill}</p>
                  <p>Average: {avg}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default App;
