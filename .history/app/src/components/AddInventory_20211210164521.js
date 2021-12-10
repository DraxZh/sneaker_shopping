import React from 'react';

class AddInventory extends React.Component{
    render(){
        return(
            <div className="inventory">
                <p className="title has-text-centered">Inventory</p>
                <div className="field">
                    <label className="label">Name</label>
                    <div className="control">
                        <textarea className="textarea" name="name"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Price</label>
                    <div className="control">
                        <input type="text" className="input" name="price"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Tags</label>
                    <div className="control">
                        <input type="text" className="input" name="tags"/>
                    </div>
                </div>
                <div className="field">
                    <label className="label">Image</label>
                    <div className="control">
                        <input type="text" className="input" name="image"/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="label">
                            Status
                        </label>
                        <div className="select isfullwidth">
                            <select name="status" id="">
                                <option>available</option>
                                <option>unavailable</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field is-grouped-centered">
                    <div className="control">
                        <button className="button is-link">Submit</button>
                    </div>
                    <div className="control">
                        <button className="button">Cancel</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default AddInventory;