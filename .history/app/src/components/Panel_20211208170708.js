import React from 'react';
import {render} from 'react-dom';

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

const _div = document.createElement('div')
document.body.appendChild(_div)
const _panel = render(<Panel />,_div)
export default _panel;