import React from "react";

import PopupDialog from "./PopupDialog";

import TodoItem from "./TodoItem";

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.resetDialog = {
            showNewItemDialog: false,
            newItemText: "",
        }
        // this.defaultState = {...this.resetDialog};
        // this.state = {...this.defaultState};
        this.state = {...this.resetDialog};
    }
    render() {
        const props = {...this.props};
        return <div>
            <ol id="Todo-list">
                {props.todoList.items.map((item, index) => (
                    <TodoItem data={item} key={index} />
                ))}
            </ol>
            <button
                className="Button-create"
                onClick={()=>this.setState({showNewItemDialog: true})}
            >+ Add item</button>
            <PopupDialog id="New-item-dialog" hidden={(!this.state.showNewItemDialog)}>
                <div>
                    <label>Todo: </label>
                    <input
                        type="text"
                        value={this.state.newItemText}
                        onChange={(ev)=>
                            this.setState({newItemText: ev.target.value})
                        }
                    />
                </div>
                <div>
                    <button className="Button-confirm" onClick={()=>{
                        props.addItemToList(this.state.newItemText);
                        this.setState(this.resetDialog);
                    }}>Add to list</button>
                    <button className="Button-cancel" onClick={()=>this.setState(this.resetDialog)}>Back</button>
                </div>
            </PopupDialog>
        </div>;
    }
}

export default TodoList;
