import React, {Component} from 'react';
import './app-add-item.scss';

export default class AppAddItem extends Component {
    
    state = {
        addItemLabel: ''
    }

    changeInputAdd = (e) => {
        this.setState({
            addItemLabel: e.target.value
        })
    }

    submitForm = (e) => {
        e.preventDefault();
        if(this.state.addItemLabel === '') return;
        this.props.addItem(this.state.addItemLabel);
        this.setState({addItemLabel: ''});
    }

    render() {
        return (
            <form className='app-add-item' onSubmit={this.submitForm}>
                <input 
                    className='app-add-item__input form-control' 
                    type="text" name="" 
                    placeholder="What needs to be done"
                    value={this.state.addItemLabel}
                    onChange={this.changeInputAdd}/>
                <button 
                    type="submit" 
                    className="app-add-item__button btn btn-outline-success"
                >
                    Add item
                </button>
            </form>
        );
    }
}