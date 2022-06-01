import { Component } from 'react';
import './App.css';
import Card from './components/card/card.component';
import SearchBox from './components/search-box/search-box.component';

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

  // search for students by name in input field
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

    // // filter students by searchField in input field
    const filteredStudents = students.students?.filter((student) => {
      return student.firstName.toLocaleLowerCase().includes(searchField) ||
        student.lastName.toLocaleLowerCase().includes(searchField);
    });


    return (
      <div className="App">
        <SearchBox onChangeHandler={onSearchChange} placeholder='Search by name' className='search-box'/>
        <Card students={ filteredStudents } />      
      </div>
    );
  }
}

export default App;
