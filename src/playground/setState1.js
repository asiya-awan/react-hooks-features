//can merge the states of two different things into one and when you are updating the state of any one item you can spread all existing state and update just the current one but that's not a good approach
// 1state doesn't need to be an object with useState
// 2can call useState as many times as you need to in agiven componetn for all different things you want to keep track of
// 3when you are using useState and update the state, it completely replaces what was there before. to only replace the particular item state, we can use spred object operator as first argument. [...state, name: 'kainat']

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App  = (props) => {

    const [state, setState ] = useState({
        count:props.count,
        text:''
    });


    return (
        <div>
            <p>The current {state.text || 'count'} is {state.count}</p>
            <button onClick ={() => setState({...state, count: state.count + 1})}>+ 1</button>
            <button onClick ={() => setState({...state, count: state.count - 1})}>- 1</button>
            <button onClick ={() => setState({...state, count: props.count})}> 0 </button>
            <input name='text' value={state.text} onChange={(e) => (setState({...state, text : e.target.value}))}/>
        </div>
    );
}

App.defaultProps = {
    count: 0
}

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
