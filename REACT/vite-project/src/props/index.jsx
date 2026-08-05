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
    const colors=['blue', 'green', 'yellow'];

    const car={
        model: 'renault truck',
        manufacturer: 'renault',
        engine:{
            cc: 2500,
        },
    };

    return(
        <div>
            <h1>I am the parent component</h1>
            <Child str={str} amountInNumber={amount} isOk={isOk} notSet={notSet}/>
            <Child2 str= {str} amountInNumber={amount}isOk={isOk} notSet={notSet} car={car}/>
            colors={colors}
            obj={{name: "", value: ""}} // ensure you use double brackets
            <Child3 str= {str} amountInNumber={amount}isOk={isOk} notSet={notSet}/>
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

// rendering props using prop keyword => destructuring method
function Child2(props){
    console.log(props);
    const {str,amountInNumber,isOk, notSet,car,colors}= props;
    return(
        <div>
            <h1>I am the child component</h1>
            <ul>
                <li>Favorite string: <b>{str}</b></li>
                <li>Amount: <b>{amountInNumber}</b></li>
                <li>isOk: <b>{isOk}</b></li>
                <li>Not set: <b>{notSet}</b></li>
                <li>Car model: <b>{car.model}</b></li>
                <li>Manufacturer: <b>{car.manufacturer}</b></li>
                <li>Engine: <b>{car.engine.cc}</b></li>
                <li>color <b>{colors[0]}</b></li>
                <li>color <b>{colors[1]}</b></li>
            </ul>
        </div>
    );
}

// direct destructuring
function Child3({str,amountInNumber,isOk, notSet}){
    console.log(props);
    const {str,amountInNumber,isOk, notSet}= props;
    return(
        <div>
            <h1>I am the child component</h1>
            <ul>
                <li>Favorite string: <b>{str}</b></li>
                <li>Amount: <b>{amountInNumber}</b></li>
                <li>isOk: <b>{isOk}</b></li>
                <li>Not set: <b>{notSet}</b></li>
            </ul>
        </div>
    );
}

export default Parent;
