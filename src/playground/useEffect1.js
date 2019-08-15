import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const App  = (props) => {
    const [ count, setCount ] = useState(props.count);
    const [text, setText ] = useState('')

    useEffect( () => {
        console.log('useEffect ran one time');
        document.title = count
    }, [])

    useEffect( () => {
        console.log('useEffect ran every time');
        document.title = count
    })

    useEffect( () => {
        console.log('useEffect ran on count update');
        document.title = count
    }, [count])
   

    function increment () { 
        // setCount(count => ++count)
        setCount(count+1)
    }
    const decrement = () => ( setCount(count => --count));
    const reset = () => ( setCount(props.count));
    // const setText = () => ( setCount(props.count));

    return (
        <div>
            <p>The current {text || 'count'} is {count}</p>
            <button onClick ={increment}>+ 1</button>
            <button onClick ={decrement}>- 1</button>
            <button onClick ={reset}> 0 </button>
            <input name='text' value={text} onChange={(e) => (setText(e.target.value))}/>
        </div>
    );
}

App.defaultProps = {
    count: 0
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
