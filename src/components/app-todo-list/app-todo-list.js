import React from 'react';
import './app-todo-list.scss';
import AppTodoItem from '../app-todo-item';

const AppTodoList = ({todoData,replacePropsItem,deleteItem}) => {

    const todoDataList = todoData.map((el) => {
        return (
            <AppTodoItem 
                label={el.label} 
                key={el.id} 
                done={el.done} 
                important={el.important} 
                replacePropsItem={(prop)=>replacePropsItem(prop, el.id)}
                deleteItem={() => deleteItem(el.id)}
            />
        )
    });

    return (
        <div className='app-todo-list list-group'>
            { todoDataList }
        </div>
    );
}

export default AppTodoList;