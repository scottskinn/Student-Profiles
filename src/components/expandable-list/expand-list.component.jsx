
import { useState } from "react";
import { ImPlus, ImMinus } from "react-icons/im";

const ExpandList = ({ students }) => {

    const { grades }  = students;
    const [isExpanded, setIsExpanded] = useState(false);

    function HandleClick() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="grades-container">
            <button onClick={HandleClick} className='grade-button'>
                { isExpanded ? <ImMinus/> : <ImPlus/> }
            </button>
            {isExpanded ? (
                <div className="grades">
                    {grades.map((grade, index) => 
                        <ul key={index} className='grade-text'>
                            <p>Test {index + 1}:</p> 
                            <p>{grade}%</p>
                        </ul>)
                    }
                </div>
            ) : null}
            
        </div>
    )
};

export default ExpandList;
