import React from 'react';
const main={
    backgroundColor: 'red',
    display: 'grid',
}
const Country = (props) => {
    return (
        <div style={main}>
            <h1> {props.name}</h1>
            <img src={props.flag} alt="" />
        </div>
    );
};

export default Country;