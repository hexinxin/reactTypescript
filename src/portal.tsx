 import React from "react";
 import ReactDOM from "react-dom";
export default class portal extends React.Component{
    public state = {counter : 0}
    increase (){
        this.setState((prevState:any) => ({
            counter:prevState.counter + 1
        })
        )
    }
    render() {
        // ReactDOM.render( <button>Click</button>,document.getElementById('portal'))
        return (
            <div id = "father" onClick={this.increase.bind(this)}>
                <div>counter：{this.state.counter}</div>
                {ReactDOM.createPortal(<button>Click</button>,document.getElementById('portal') as HTMLElement)}
            </div>
        );
    }
}