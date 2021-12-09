import React from 'react';
import {render} from 'react-dom';

class Panel extends React.Component{
    state={
        active: false
    }
    close=()=>{
        this.setState({
            active: false
        })
    }

    open = () =>{
        this.setState({
            active: true
        })
    }
    render(){
        const _class = {
            true:'panel-wrapper active',
            false:'panel-wrapper'
        }
        return(
            <div className="panel_wrapper">
                <div className="over-layer" onClick={this.close}></div>
                    {/*这是一个遮罩层 */}
                <div className="panel" >
                    <div className="head">
                        <span className="close" onClick={this.close}>x</span>
                        <p className="has-text-centered">Children component</p>
                    </div>
                </div>
            </div>
        )
    }
}

const _div = document.createElement('div')
document.body.appendChild(_div)
const _panel = render(<Panel/>,_div)
export default _panel;