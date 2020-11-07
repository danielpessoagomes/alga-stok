import React from 'react';
import './ClassComponent.css';

class ClassComponent extends React.Component<{name: string}> {

    constructor(props: any){
        super(props)
        console.log('Contructor reached')
    }

    state = {
        name: 'Mundo!!!!'
    }

    componentDidMount(){
        console.log('Did mount reached');
        
    }

    componentDidUpdate(){
        console.log('Did update reached');
        
    }

    render() {
        console.log('Render reached');
        
        return (
             <div>
                 <p>name: {this.state.name}</p>
                 <button onClick={() => {
                     this.setState({ name: 'Daniel' })
                 }}>Click me</button>
             </div>
        );
    }
}

export default ClassComponent;