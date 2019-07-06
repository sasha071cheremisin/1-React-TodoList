import React, { Component } from 'react';

import AppHeader from '../app-header';
import AppInfoPanel from '../app-info-panel';
import AppAddItem from '../app-add-item';
import AppTodoList from '../app-todo-list';
import './app.scss';

export default class App extends Component {

    idCount = 100;

    state = {
        todoData: [
            {
                label: 'Drink coffee',
                important: false,
                done: true,
                id: 1
            },
            {
                label: 'Learn React',
                important: true,
                done: false,
                id: 2
            },
            {
                label: 'Learn Redux',
                important: false,
                done: false,
                id: 3
            },
        ],
        searchTerm: '',
        filterTerm: 'all'
    }

    searchChange = (term) => {
        this.setState({
            searchTerm: term
        });
    }

    searchItems (items, term) {
        if(term === '') return items;

        return items.filter((el) => el.label.toLowerCase().indexOf(term.toLowerCase()) > -1);
    }

    filter (items,filterTerm) {
        switch (filterTerm) {
            case 'all':
                return items;
            case 'active':
                return items.filter((el) => el.done === false);
            case 'done':
                return items.filter((el) => el.done === true);
            default:
                break;
        }
    }

    changeFilter = (filterTerm) => {
        this.setState({filterTerm});
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const newArray = [
                ...todoData.slice(0,idx),
                ...todoData.slice(idx+1),
            ];

            return {
                todoData: newArray
            }
        });
    }

    addItem = (label) => {
        this.setState(({ todoData }) => {
            
            const newArray = [
                ...todoData,
                {
                    label: label,
                    important: false,
                    done: false,
                    id: this.idCount++
                },
            ];

            return {
                todoData: newArray
            }
        });
    }

    replacePropsItem = (prop,id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            const oldItem = todoData[idx];
            const newItem = {...oldItem, [prop]: !oldItem[prop]}
            const newArray = [
                ...todoData.slice(0,idx),
                newItem,
                ...todoData.slice(idx+1),
            ];
            return {
                todoData: newArray
            }
        });
    }

    render() {
        const {todoData,searchTerm,filterTerm} = this.state;

        const doneItemCount = this.state.todoData.filter((el) => el.done === true).length;
        const notDoneItemCount = this.state.todoData.length - doneItemCount;
        
        const visibleItems = this.filter(this.searchItems(todoData,searchTerm), filterTerm);

        return (
            <div className="app">
                <AppHeader 
                    moreToDo={notDoneItemCount} 
                    doneItems={doneItemCount}/>
                <AppInfoPanel 
                    searchChange={this.searchChange}
                    changeFilter={this.changeFilter}
                    filterTerm={filterTerm}/>
                <AppTodoList 
                    todoData={visibleItems} 
                    replacePropsItem={this.replacePropsItem}
                    deleteItem={this.deleteItem}/>
                <AppAddItem 
                    addItem={this.addItem}/>
            </div>
        )
    };
}
