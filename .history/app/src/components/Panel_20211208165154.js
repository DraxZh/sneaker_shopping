import React from 'react';

class Panel extends React.Component{

    render(){
        return(
            <div className="panel-wrapper">
                <div className="over-layer">
                    <div className="head">
                        <span className="close">x</span>
                        <p className="has-text-centered">Children component</p>
                    </div>
                </div>
            </div>
        )
    }
}