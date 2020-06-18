import React from 'react';
import logo from './logo.svg';
import './App.css';

import ListSelect from "./ListSelect";
import TodoList from "./TodoList";
import PopupDialog from './PopupDialog';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateListDialog: false,
      listNameInput: "",
      selectedList: -1,
      mostUsed: [4,2,1],
      todoLists: [
        {
          name: "default list",
          items: [
            "make breakfast",
            "go to work now",
            "get married",
            "don't be gay",
          ],
        },
        {
          name: "fun times",
          items: [
            "do something fun",
            "treat yourself",
            "have a nice meal",
          ],
        },
        {
          name: "programming",
          items: [
            "todo list",
            "incremental",
          ],
        },
        {
          name: "gay shit",
          items: [
            "fuq u",
          ],
        },
        {
          name: "no hate",
          items: [
            "jus tb8",
          ],
        },
      ],
    };
    this.adList = this.adList.bind(this);
    this.displayList = this.displayList.bind(this);
    this.addToMostUsed = this.addToMostUsed.bind(this);
    this.removeFromMostUsed = this.removeFromMostUsed.bind(this);
  }
  adList(listName) {
    let todoListsCopy = [...this.state.todoLists,{name: listName,items: []}];
    this.setState({todoLists: todoListsCopy, showCreateListDialog: false});
  }
  displayList(num) {
    this.setState({selectedList: num ?? -1});
    // this.onPin(num);
  }
  addToMostUsed(num) {
    if (this.state.mostUsed.length < 3) {
      let mostUsedCopy = this.state.mostUsed.concat([num]).sort(
        (a,b)=>Math.sign(a-b)
      );
      this.setState({mostUsed: mostUsedCopy});
    }
  }
  removeFromMostUsed(num) {
    this.setState({mostUsed: this.state.mostUsed.filter(x=>x!==num)});
  }
  render() {
    const selectedList = this.state.todoLists[this.state.selectedList];

    return (
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            My Todos
          </h1>
        </header>

        <ListSelect
          lists={this.state.todoLists}
          mostUsed={this.state.mostUsed}
          setList={this.displayList}
          adPin={this.addToMostUsed}
          unPin={this.removeFromMostUsed}
          showCreateListDialog={()=>this.setState({showCreateListDialog: true})}
        />

        <PopupDialog id="Create-list-dialog" hidden={!this.state.showCreateListDialog}>
          <div>
            <label>List name: </label>
            <input
              type="text"
              value={this.state.listNameInput}
              onChange={(ev)=>this.setState({listNameInput: ev.target.value})}
            />
          </div>
          <div>
            <button className="Button-confirm" onClick={()=>this.adList(this.state.listNameInput)}>Create</button>
            <button className="Button-cancel" onClick={()=>this.setState({showCreateListDialog: false})}>Back</button>
          </div>
        </PopupDialog>
        
        {
          this.state.selectedList === -1 &&
          <div>Select a list!</div>
        }

        {
          this.state.selectedList !== -1 &&
          <TodoList
            todoList={selectedList}
            addItemToList={
              (newItem) => {
                let todoListsCopy = [...this.state.todoLists];
                todoListsCopy[this.state.selectedList] = {
                  name: selectedList.name,
                  items: selectedList.items.concat(newItem)
                };
                this.setState({
                  todoLists: todoListsCopy,
                });
              }
            }
          />
        }

      </div>
    );
  }
}

export default App;
