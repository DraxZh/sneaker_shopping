import React from 'react';

class AddInventory extends React.Component{
    render(){
        return(
            <div className="inventory">
                <p className="title has-text-centered">Inventory</p>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <textarea className="Textarea" name="name"/>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddInventory;