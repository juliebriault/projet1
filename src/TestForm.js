import React {Component} from 'react'

class App extends Component {
    state = {
        prénom : null
    };

    change = e => {
        this.setState({
            [e.target.id]: e.target.value
     //   });
    /};

    submit = e => {
        e.preventDefault();
        console.log(this.state);
    };

    render() {
        return (
            <div>
                <form onSubmit={this.change}>
                    <label htmlFor="Prenom">Prenom</label>
                    <input type="text" id="Prenom" onChange={this.change} />
                    <button> Envoyer </button>
                </form>
            </div>
        );
    }
}

export default App;