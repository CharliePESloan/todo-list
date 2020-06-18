import React from "react";

import ListTab from "./ListTab";
import ListButton from "./ListButton";

import IconDots from "./Icons/IconDots";

import "./List-select.css";

class ListSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showAllLists: false};
  }
  render() {
    const props = {...this.props};
    return <div id="List-select">

      {
        props.mostUsed.map(
          (indexOfList) => ({index: indexOfList,list: props.lists[indexOfList]})
        ).map(
          (listData,index) => 
            <ListTab
              key={index}
              listName={listData.list.name}
              unPin={(ev)=>{
                props.unPin(listData.index);
                ev.stopPropagation();
              }}
              setList={()=>{
                this.setState({showAllLists: false});
                props.setList(listData.index);
              }}
            />
        )
      }

      <IconDots
        className={this.state.showAllLists ? "selected" : ""}
        onClick={()=>{
          this.setState({showAllLists: !this.state.showAllLists});
        }}
      />

      <div id="Todo-all-lists-box" className={this.state.showAllLists ? "" : "hidden"}>
        { props.lists.map(
          (list,index) => {

            const selected = this.props.mostUsed.includes(index);
            return <ListButton
              key={index}
              onSelect={() => {
                this.setState({showAllLists: false});
                props.setList(index);
                props.adPin(index);
              }}
              onPin={selected ?
                  ( () => this.props.unPin(index) )
                /*else*/ :
                  ( () => this.props.adPin(index) )
              }
              selected={selected}
            >{list.name}</ListButton>;
          }

        ) }
        <button className="Button-create" onClick={()=>{
          this.setState({showAllLists: false});
          this.props.showCreateListDialog();
        }}>+ New Todo List</button>
      </div>

      <div
        id="Todo-list-select-box-grey"
        className={this.state.showAllLists ? "" : "hidden"}
        onClick={()=>{
          this.setState({showAllLists: false});
        }}
      >&nbsp;</div>
      
    </div>;
  }
}

export default ListSelect;
