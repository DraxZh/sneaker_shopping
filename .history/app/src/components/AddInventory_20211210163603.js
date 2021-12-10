import React from 'react';

class AddInventory extends React.Component{
    render(){
        return(
            <div className="inventory">
                <p className="title has-text-centered">Inventory</p>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <textarea name="" id="" cols="30" rows="10" className="Textarea"></textarea>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddInventory;