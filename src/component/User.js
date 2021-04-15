import React from 'react';

const renderpage = (props) => {
    const familiar = props.familiar;

    let greetings;
    if (familiar) {
        greetings = <p>Hello, friend, how are you?</p>
    }
    else {
        greetings = <p>Hey, what is your name?</p>;
    };


    const userStyle = { paddingTop: '2%', border: '1px solid green', margin: '2%' };

    return (
        <div>
            <div style={userStyle}>
                <h2><b>Greetings</b></h2>
                {
                    greetings
                }
            </div>
            <div style={userStyle}>
                <h2><b>Food</b></h2>
                {
                    familiar ? <p>please go for diner </p> : <p>Don't talk to strangers</p>
                }
            </div>
            <div style={userStyle}>
                <h2><b>Connection</b></h2>
                {
                    familiar && <p>Let's connected on facebook
                    </p>
                }
            </div>
        </div >
    );
};

export default renderpage;