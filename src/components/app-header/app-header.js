import React from 'react';
import './app-header.scss';

const AppHeader = ({moreToDo,doneItems}) => {
    
    return (
        <div className='app-header'>
            <div className='app-header__title'>Todo list</div>
            <div className='app-header__info'>{moreToDo} more to do, {doneItems} done</div>
        </div>
    );
}

export default AppHeader;