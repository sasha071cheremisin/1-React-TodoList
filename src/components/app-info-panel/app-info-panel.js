import React, {Component} from 'react';
import './app-info-panel.scss';

export default class AppInfoPanel extends Component {

    state = {
        searchTerm: '',
    }

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ];

    searchChange = (e) => {
        const searchTerm = e.target.value;

        this.setState({
            searchTerm
        });

        this.props.searchChange(searchTerm);
    }

    render() {
        const {changeFilter,filterTerm} = this.props;
        const buttonsList = this.buttons.map((el) => {
            const activeBtn = el.name === filterTerm;
            const btnClassName = activeBtn? 'btn-primary' : 'btn-secondary';
            return (
                <button 
                    type="button" 
                    className={`btn ${btnClassName}`}
                    onClick={()=>changeFilter(el.name)}
                    key={el.name}>
                        {el.label}
                </button>
            )
        });

        return (
            <div className='app-info-panel'>
                <input 
                    className='app-info-panel__search form-control' 
                    type="text" name="" 
                    placeholder="type to serach"
                    onChange={this.searchChange}
                    value={this.state.searchTerm}/>
                <div className="app-info-panel__buttons-list btn-group">
                    {buttonsList}
                </div>
            </div>
        );
    }
}