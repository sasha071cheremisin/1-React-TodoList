(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),i=(a(17),a(7)),l=a(10),s=a(6),m=a(1),d=a(2),u=a(4),p=a(3),f=a(5),h=(a(18),function(e){var t=e.moreToDo,a=e.doneItems;return o.a.createElement("div",{className:"app-header"},o.a.createElement("div",{className:"app-header__title"},"Todo list"),o.a.createElement("div",{className:"app-header__info"},t," more to do, ",a," done"))}),b=(a(19),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={searchTerm:""},a.buttons=[{name:"all",label:"All"},{name:"active",label:"Active"},{name:"done",label:"Done"}],a.searchChange=function(e){var t=e.target.value;a.setState({searchTerm:t}),a.props.searchChange(t)},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.changeFilter,a=e.filterTerm,n=this.buttons.map(function(e){var n=e.name===a?"btn-primary":"btn-secondary";return o.a.createElement("button",{type:"button",className:"btn ".concat(n),onClick:function(){return t(e.name)},key:e.name},e.label)});return o.a.createElement("div",{className:"app-info-panel"},o.a.createElement("input",{className:"app-info-panel__search form-control",type:"text",name:"",placeholder:"type to serach",onChange:this.searchChange,value:this.state.searchTerm}),o.a.createElement("div",{className:"app-info-panel__buttons-list btn-group"},n))}}]),t}(n.Component)),v=(a(20),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={addItemLabel:""},a.changeInputAdd=function(e){a.setState({addItemLabel:e.target.value})},a.submitForm=function(e){e.preventDefault(),""!==a.state.addItemLabel&&(a.props.addItem(a.state.addItemLabel),a.setState({addItemLabel:""}))},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return o.a.createElement("form",{className:"app-add-item",onSubmit:this.submitForm},o.a.createElement("input",{className:"app-add-item__input form-control",type:"text",name:"",placeholder:"What needs to be done",value:this.state.addItemLabel,onChange:this.changeInputAdd}),o.a.createElement("button",{type:"submit",className:"app-add-item__button btn btn-outline-success"},"Add item"))}}]),t}(n.Component)),I=(a(21),a(22),function(e){var t=e.label,a=e.important,n=e.done,r=e.replacePropsItem,c=e.deleteItem,i="";return a&&(i+=" app-todo-item__label--important"),n&&(i+=" app-todo-item__label--done"),o.a.createElement("div",{className:"app-todo-item list-group-item"},o.a.createElement("span",{className:"app-todo-item__label ".concat(i),onClick:function(){return r("done")}},t),o.a.createElement("div",{className:"app-todo-item__buttons-list"},o.a.createElement("div",{className:"app-todo-item__button app-todo-item__button--trash fa fa-trash-o",onClick:function(){return c()}}),o.a.createElement("div",{className:"app-todo-item__button app-todo-item__button--exclamation fa fa-exclamation",onClick:function(){return r("important")}})))}),g=function(e){var t=e.todoData,a=e.replacePropsItem,n=e.deleteItem,r=t.map(function(e){return o.a.createElement(I,{label:e.label,key:e.id,done:e.done,important:e.important,replacePropsItem:function(t){return a(t,e.id)},deleteItem:function(){return n(e.id)}})});return o.a.createElement("div",{className:"app-todo-list list-group"},r)},_=(a(23),function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).idCount=100,a.state={todoData:[{label:"Drink coffee",important:!1,done:!0,id:1},{label:"Learn React",important:!0,done:!1,id:2},{label:"Learn Redux",important:!1,done:!1,id:3}],searchTerm:"",filterTerm:"all"},a.searchChange=function(e){a.setState({searchTerm:e})},a.changeFilter=function(e){a.setState({filterTerm:e})},a.deleteItem=function(e){a.setState(function(t){var a=t.todoData,n=a.findIndex(function(t){return t.id===e});return{todoData:[].concat(Object(s.a)(a.slice(0,n)),Object(s.a)(a.slice(n+1)))}})},a.addItem=function(e){a.setState(function(t){var n=t.todoData;return{todoData:[].concat(Object(s.a)(n),[{label:e,important:!1,done:!1,id:a.idCount++}])}})},a.replacePropsItem=function(e,t){a.setState(function(a){var n=a.todoData,o=n.findIndex(function(e){return e.id===t}),r=n[o],c=Object(l.a)({},r,Object(i.a)({},e,!r[e]));return{todoData:[].concat(Object(s.a)(n.slice(0,o)),[c],Object(s.a)(n.slice(o+1)))}})},a}return Object(f.a)(t,e),Object(d.a)(t,[{key:"searchItems",value:function(e,t){return""===t?e:e.filter(function(e){return e.label.toLowerCase().indexOf(t.toLowerCase())>-1})}},{key:"filter",value:function(e,t){switch(t){case"all":return e;case"active":return e.filter(function(e){return!1===e.done});case"done":return e.filter(function(e){return!0===e.done})}}},{key:"render",value:function(){var e=this.state,t=e.todoData,a=e.searchTerm,n=e.filterTerm,r=this.state.todoData.filter(function(e){return!0===e.done}).length,c=this.state.todoData.length-r,i=this.filter(this.searchItems(t,a),n);return o.a.createElement("div",{className:"app"},o.a.createElement(h,{moreToDo:c,doneItems:r}),o.a.createElement(b,{searchChange:this.searchChange,changeFilter:this.changeFilter,filterTerm:n}),o.a.createElement(g,{todoData:i,replacePropsItem:this.replacePropsItem,deleteItem:this.deleteItem}),o.a.createElement(v,{addItem:this.addItem}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[11,1,2]]]);
//# sourceMappingURL=main.86e8c0ee.chunk.js.map