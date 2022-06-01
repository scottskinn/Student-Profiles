import { Component } from "react";
import Tags from "../tags/tags.component";
import ExpandList from "../expandable-list/expand-list.component";


class Card extends Component {
    render() {
        const { students } = this.props;
        
        return (
            <div>
          {students?.map((student) => {
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
                  {/* <div className="grades">
                    {student.grades.map((grade, index) => 
                    <ul key={index}>Test {index + 1}: {grade}</ul>)}
                  </div> */}
                  <ExpandList students={student}/>

                  {/* Add Tags */}
                  <Tags />
                </div>                
              </div>
            );
          })}
        </div> 
        )
    }
    
}

export default Card;