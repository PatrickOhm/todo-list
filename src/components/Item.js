import React from 'react';

class Item extends React.Component {

    handleDelete = () => {
        this.props.onItemDelete(this.props.term);
    }

    handleChecked = () => {
        this.props.onItemCheck(this.props.term);
    }

    render() {
        return (
            <div
                ref={this.itemRef}
                className={`item ${this.props.checked ? 'item-checked' : ''}`}
                onClick={this.handleChecked}
            >
                {this.props.term}
                <i
                    className="icon-trash"
                    onClick={this.handleDelete}
                ></i >
            </div>
        );
    }
}

export default Item;


