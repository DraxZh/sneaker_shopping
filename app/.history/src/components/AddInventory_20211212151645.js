import React from 'react';

class AddInventory extends React.Component{
    state={
        name: '',
        price: 0,
        tags: '',
        image: '',
        status: 'available'
    }

    handleChange = e =>{
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    render(){
        return(
            <div className="inventory">
                <p className="title has-text-centered">Add Product</p>
                <div className="field">
                    <div className="control">
                        <label className="label">Name</label>
                        <textarea className="textarea" name="name" value={this.state.name} onChange={this.handleChange} placeholder="e.g. Nike Air Max 97"/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="label">Price</label>
                        <input type="text" className="input" name="price(in AUD)" placeholder="e.g. 140"/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="label">Tags</label>
                        <input type="text" className="input" name="tags" placeholder="e.g. 5 colors"/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="label">Image</label>
                        <input type="text" className="input" name="image"/>
                    </div>
                </div>
                <div className="field">
                    <div className="control">
                        <label className="label">Status</label>
                        <div className="select is-fullwidth">
                            <select name="status" id="">
                                <option>available</option>
                                <option>unavailable</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="field is-grouped is-grouped-centered">
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