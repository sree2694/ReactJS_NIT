export function EventBindingRest()
{
    // function InsertClick(msg, product){
    //      document.write(`
    //          ${msg} <br>
    //          ${product.Name} <br>
    //      `);
         
    // }

    function InsertClick(...args){
        var [msg, product] = args;
        document.write(`
            ${msg} <br>
            ${product.Name}
        `);
    }
    return(
        <div className="container-fluid">
            <h2>Events</h2>
            <button id="btnInsert" onClick={()=>{InsertClick('Welcome',{'Name':'TV'})}} name="InsertButton" value="Insert">Insert</button>
        </div>
    )
}