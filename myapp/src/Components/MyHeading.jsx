import React from 'react'

const MyHeading = () => {
    const a = 232;

    return(
        <>
         <h1>This is heading</h1>
        <div>This is the div container</div>
        <p>{a}</p>
        <MyHeading2/>
        </>
    );
};
const MyHeading2 = () => <h4>This is MyHeading2</h4>;  


export default MyHeading;
export {MyHeading2};