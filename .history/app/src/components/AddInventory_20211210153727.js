import React from 'react';

class AddInventory extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="inventory">
                <p className="title has-text-centered">Inventory</p>
                <br/>
                <div className="control">
                    <button className="button" onClick={close}>Cancel</button>
                </div>
            </div>
        );
    }
}

export default AddInventory;