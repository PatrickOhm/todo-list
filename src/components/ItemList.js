import React from "react";
import Item from "./Item";
import { v4 as uuidv4 } from 'uuid';

class ItemList extends React.Component {

    handleDeleteClick = (term) => {
        this.props.onItemDelete(term);
    }

    handleChecked = (term) => {
        this.props.onItemChecked(term);
    }

    render() {
        const items = this.props.todos.map(todo => {
            return <Item
                key={uuidv4()}
                term={todo.term}
                checked={todo.checked}
                onItemDelete={this.handleDeleteClick}
                onItemCheck={this.handleChecked}
            />;
        });

        return (
            <div className="item-list">{items}</div>
        );
    }
}

export default ItemList;