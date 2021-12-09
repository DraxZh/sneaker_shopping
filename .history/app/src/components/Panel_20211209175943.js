import React from 'react';
import {render} from 'react-dom';

class Panel extends React.Component{
    state={
        active:false
    };
    

    
    render(){
        const panelState = {
            true:'panel-wrapper active',
            false:'panel-wrapper'
        };
        const open = () =>{
                this.setState({
                active: true
        })
        };
        const close = ()=>{
        this.setState({
            active: false
        })
        };
        return(
            
    
            <div className={'panel-wrapper'}>
                <div className="over-layer" onClick={close()}></div>
                    {/*这是一个遮罩层 */}
                <div className="panel" >
                    <div className="head">
                        <span className="close" onClick={close()}>x</span>
                        <p className="has-text-centered">Children component</p>
                    </div>
                </div>
            </div>
        )
    };
}

const _div = document.createElement('div')
document.body.appendChild(_div)
const _panel = render(<Panel/>,_div)
export default _panel;