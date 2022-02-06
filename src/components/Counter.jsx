import React from 'react';
import Styles from './counter.module.css'

export const Counter = (props) => {
    const [count, setcount] = React.useState(0)
    return (

        <div className={Styles.wrapper}>
            <h1 className={Styles.name}>{props.name}</h1>
            <h1 className={Styles.value}>{count}</h1>
            <button className={Styles.button} onClick={() => setcount(count + 1)}>Increment</button>
            <button className={Styles.button} onClick={() => (count === 0) ? alert("Invalid Decrement") : setcount(count - 1)}>Decrement</button>
            <button className={Styles.button} onClick={() => setcount(count * 2)}>Double</button>
        </div>
    )
};

export default Counter


// another function to increment or decrement the count

// function increment(count) {
    //     setcount(count + 1)
    //     console.log(count)

    // }
    // function decrement(count) {
    //     if (count === 0) {
    //         alert("Invalid Decrement")
    //     }
    //     else {
    //         setcount(count - 1)
    //         console.log(count)
    //     }
    // }
