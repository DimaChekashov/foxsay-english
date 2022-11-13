import React, { useState } from 'react';
import { getWord } from '../../api/openApi';
import { Input, Button } from 'antd';
import './Dictionary.scss';

const Dictionary: React.FC = () => {
    const [input, setInput] = useState("");
    const [word, setWord] = useState();
    
    const searchWord = () => {
        getWord(input)
        .then((data) => {
            setWord(data);
            console.log(data);
        });
    }

    return (
        <div className="container">
            <div className="dictionary">
                <Input placeholder="Search word" value={input} onChange={(e) => setInput(e.target.value)} />
                <Button type="primary" onClick={searchWord}>Search</Button>
            </div>
        </div>
    );
}

export default Dictionary;