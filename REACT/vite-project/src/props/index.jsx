/*
i. components are functions
    input=> output
    input is data whilst output is UI

ii. to create reusable components yu need to understand props properties.

iii. each component you create in REACT will have props
iv. props are passed from parent to child
     all data types can be passed into props including other components
*/

function Parent(){
    // primitive data types
    const str = 'hello earth';
    const amount = 2000;
    const isOk = true;
    const notSet = null;
    
    return(
        <div>
            <h1>I am the parent component</h1>
            <Child str={str} amountInNumber={amount} isOk={isOk} notSet={notSet}/>
        </div>
    );
}

// rendering props using prop keyword
function Child(props){
    console.log(props);
    return(
        <div>
            <h1>I am the child component</h1>
            <ul>
                <li>Favorite string: <b>{props['str']}</b></li>
                <li>Amount: <b>{props['amountInNumber']}</b></li>
                <li>isOk: <b>{String(props['isOk'])}</b></li>
                <li>Not set: <b>{String(props['notSet'])}</b></li>
            </ul>
        </div>
    );
}

export default Parent;
