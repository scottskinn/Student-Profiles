import { useState } from "react";


function Tags() {
        const [tags, setTags] = useState([]);

        function handleKeyDown(e){
            if(e.key !== 'Enter') return;
            const value = e.target.value;
            if(!value.trim()) return;
            setTags([...tags, value]);
            e.target.value = '';
        }

        return (
        <div>
            <div className='student-tags'>
                {tags?.map((tag, index) => (
                    <div className="tag-item" key={index}>
                    <p className="tag-text">{tag}</p>
                </div>
                ))}
            </div>
            <input onKeyDown={handleKeyDown} className="tag-input" placeholder="Add a tag"/>
        </div>
    )
};


export default Tags;