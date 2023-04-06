export function EventBindingSpread()
{
    function InsertClick(msg, product){
       document.write(`
          ${msg} <br>
          ${product.Name}
       `);
    }
    return(
        <div className="container-fluid">
            <h2>Events</h2>
            <button id="btnInsert" onClick={()=>{InsertClick(...['Welcome', {'Name':'Samsung'}])}} name="InsertButton" value="Insert">Insert</button>
        </div>
    )
}