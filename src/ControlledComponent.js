import React, { useState, useEffect } from 'react'



function ControlledComponent(props) {
    const [name, setName] = useState('');
    const [sentence, setSentence] = useState('');
    
    function onTextChanged(e){
        
        setName(e.target.value)
        setSentence('')
        
    }

    useEffect(() => {
        let m = props.sent;
        setSentence(m.replace('name', name));
    }, [props.sent]);
    
    
    return (
        <div>
        
            <label htmlFor='name'>Your Name</label>
            <input value={name} onChange={onTextChanged} id='first-name' />

            <div>
                <span>{(sentence || name) === '' ? '' : sentence}</span>
            </div>

    </div>
  )
}

function MainComponent(){
    const [sentence, setSentence] = useState('Hi name How are you?');

    function changeSentence(){
        if (sentence === 'Hi name How are you?')
            setSentence('Hay name keep going')
        else
            setSentence('Hi name How are you?')
    }

    return (
        <div>
            <ControlledComponent sent={sentence}/>
            <button onClick={changeSentence}>Motivate</button>
        </div>
    )
}
export default MainComponent;