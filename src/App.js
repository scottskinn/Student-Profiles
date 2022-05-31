import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      searchField: ''
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

  onSearchChange = (event) => {
    console.log(event.target.value)
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField };
    });
  }

  render() {
    const { students, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredStudents = students.students?.filter((student) => {
      return student.firstName.toLocaleLowerCase().includes(searchField) ||
        student.lastName.toLocaleLowerCase().includes(searchField);
    });
    return (
      <div className="App">
        <input
          className='search-box'
          type='search'
          placeholder='Search by name'
          onChange={onSearchChange}  
        />
        <div>
          {filteredStudents?.map((student) => {
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
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
