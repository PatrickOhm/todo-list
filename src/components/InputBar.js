import React from "react";

class InputBar extends React.Component {
    state = { term: '' };

    onFormSubmit = (event) => {
        event.preventDefault();

        if (this.state.term === '') return;

        this.props.onSubmit({ term: this.state.term, checked: false });
        this.setState({ term: '' });
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-bar-form">
                <input
                    type='text'
                    value={this.state.term}
                    onChange={e => this.setState({ term: e.target.value })}
                />
                <button>Add</button>
            </form>
        )
    }
}

export default InputBar;