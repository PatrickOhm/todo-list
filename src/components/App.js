import React from 'react';
import InputBar from './InputBar';
import ItemList from './ItemList';

class App extends React.Component {
    state = { todos: [] };

    componentDidMount() {
        const localStorageState = localStorage.getItem('todos');
        if (localStorageState) {
            this.setState(JSON.parse(localStorageState));
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState !== this.state) {
            localStorage.setItem('todos', JSON.stringify(this.state));
        }
    }


    onItemSubmit = (term) => {
        this.setState({
            todos: [...this.state.todos, term]
        })
    }

    handleItemDelete = (term) => {
        setTimeout(() => {
            this.setState({
                todos: this.state.todos.filter((todo) => todo.term !== term)
            });
        }, '1');
    }

    handleItemChecked = (term) => {
        this.setState({
            todos: this.state.todos.map((todo) => {
                if (todo.term === term) {
                    if (todo.checked === true) {
                        return Object.assign({}, todo, {
                            checked: false
                        });
                    } else {
                        return Object.assign({}, todo, {
                            checked: true
                        });
                    }
                } else {
                    return todo;
                }
            })
        });
    }

    render() {
        return (
            <div>
                <InputBar onSubmit={this.onItemSubmit} />
                <ItemList
                    todos={this.state.todos}
                    onItemDelete={this.handleItemDelete}
                    onItemChecked={this.handleItemChecked}
                />
            </div>

        )
    }
}

export default App;

