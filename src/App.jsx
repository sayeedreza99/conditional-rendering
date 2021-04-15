import React, { useState } from 'react';
import User from './component/User'

const App = () => {
    const [familiar, setFamiliar] = useState(false)
    return (
        <div>
            <div style={{ textAlign: 'center', paddingTop: '1%' }}>
                <h1>Is Familiar: {familiar.toString()}</h1>
                <button onClick={() => setFamiliar(!familiar)}>Toggle Friend</button>
                <User familiar={familiar}></User>
            </div>
        </div>
    );
};

export default App;