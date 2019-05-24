import React from 'react';

let input = (props) => {
    return (
        <div>
            <label>{props.label}</label>
            <input type={props.type} name={props.name}
                   id={props.id} placeholder={props.placeholder}
                   value={props.value} onChange={props.onChange}
                   required
            />
        </div>
    )
};

export default input;