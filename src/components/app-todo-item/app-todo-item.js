import React from 'react';
import './app-todo-item.scss';

const AppTodoItem = ( { label,important,done,replacePropsItem,deleteItem } ) => {

    let classLabel = '';

    if(important) {
        classLabel += ' app-todo-item__label--important';
    } 
    
    if(done) {
        classLabel += ' app-todo-item__label--done';
    }

    return (
        <div className="app-todo-item list-group-item">
                <span 
                    className={`app-todo-item__label ${classLabel}`} 
                    onClick={() => replacePropsItem('done')}>
                    { label }
                </span>
                <div className='app-todo-item__buttons-list'>
                    <div 
                        className="app-todo-item__button app-todo-item__button--trash fa fa-trash-o"
                        onClick={() => deleteItem()}>
                    </div>
                    <div 
                        className="app-todo-item__button app-todo-item__button--exclamation fa fa-exclamation"
                        onClick={() => replacePropsItem('important')}>
                    </div>
                </div>
        </div>
    );
}

export default AppTodoItem;