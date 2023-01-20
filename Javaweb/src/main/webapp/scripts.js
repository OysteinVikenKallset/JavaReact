const Heading = () => {
    return (
        <h1>React and Java application</h1>
    );
}

class Form extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event.target[0].value)
        console.log(event.target[1].value)
        console.log(event.target[2].value)
        console.log(event.target[3].value)
        /*console.log(event.target.elements.username.value)
        console.log(event.target.username.value)*/
    }


    render() {
        return (
            <form className="contactForm" onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Name:
                    </label>
                    <input type="text" name="username" defaultValue="Ole" />

                </div>
                <div>
                    <label>
                        Adress:
                    </label>
                    <input type="text" name="adress" defaultValue="Tiller" />

                </div>
                <div>
                    <label>
                        Phonenumber:
                    </label>
                    <input type="text" name="phonenumber" defaultValue="123456789" />

                </div >
                <div>
                    <label>
                        Date of birth:
                    </label>
                    <input type="text" name="dateOfBirth" defaultValue="08082021" />

                </div >
                <button type="submit">Submit</button>
            </form>
        )
    }
}

class Table extends React.Component {
    state = {
        people: [
            { id: 1, name: "Ole", Adresse: "Blåveien 1", phoneNumber: "12345678", dateOfBirth: "12345678" },
            { id: 2, name: "Ola", Adresse: "Blåveien 2", phoneNumber: "22345678", dateOfBirth: "12345678" },
            { id: 3, name: "Lena", Adresse: "Blåveien 3", phoneNumber: "32345678", dateOfBirth: "12345678" },
            { id: 4, name: "Lene", Adresse: "Blåveien 4", phoneNumber: "42345678", dateOfBirth: "12345678" }
        ]
    };
    render(){
        return (
            <div>
                <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Navn</th>
                        <th>Telefonnummer</th>
                        <th>Fødselsdato</th>
                        <th>Score</th>
                        <th>Tversummen av tlf</th>
                        <th>Navn baklengs</th>
                        <th>Født i skuddår</th>
                    </tr>
                </thead>
                <tbody>
                        {this.state.people.map(person =>
                        <TBody
                            id={person.id}
                            key={person.id.toString()}
                            name={person.name}
                            phoneNumber={person.phoneNumber}
                            dateOfBirth={person.dateOfBirth}
                        />
                    )}
                </tbody>
                </table> 
                <Statistics
                    title="Statistikk"
                    totalPlayers={this.state.people.length}
                />
            </div>
        );
    }
}

const Statistics = (props) => {
    return (
        <header>
            <h2>{props.title}</h2>
            <span className="stats">Antall personer: {props.totalPlayers}</span>
            <p>Antall personer født i skuddår: Her må det skrives en funksjon </p>
            <p>Gjennomsnittlengde på navn: Her må det skrives en funksjon</p>
        </header>
    );
}


const TBody = (props) => {
    return (
         
                        <tr>
                            <td>{props.id}</td>
                            <td>{props.name}</td>
                            <td>{props.phoneNumber}</td>
                            <td>{props.dateOfBirth}</td>
                            <Counter />
                            <td>-</td>
                            <td>-</td>
                        <td>-</td>
                        </tr>
            
        );
    
}



class Counter extends React.Component {
    state = {
        score: 0
    };

    incrementScore = () => {
        this.setState(prevState => ({
            score: prevState.score + 1
        }));
    }

     decrementScore = () => {
    this.setState( prevState => ({
      score: prevState.score - 1
    }));
  }
    render() {
        return (

            
                <td>
                <button className="counter-action decrement" onClick={this.decrementScore}> - </button>
                    <span className="counter-score">{this.state.score}</span>
                    <button className="counter-action increment" onClick={this.incrementScore}> + </button>
                </td>
          

        );
    }
}





class App extends React.Component {

    render(){
    return (
        <div className="app">
            <Heading />
            <Form />
            <Statistics />
            <Table />
        </div>
        );
    }
}


ReactDOM.render(
    <App />,
    document.getElementById('root')
);

