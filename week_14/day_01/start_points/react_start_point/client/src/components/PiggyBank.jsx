import React from 'react';

class PiggyBank extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            total: 0
        };

        this.changeSavingsAmount = this.changeSavingsAmount.bind(this);
    }

    changeSavingsAmount(amount) {
        this.setState( (prevState) => {

            let newTotal = prevState.total + amount;

            if(newTotal < 0) {
                newTotal = 0
            }

            return { total: newTotal };
        })
    };

    render() {
        return (
            <div className='bank-box'>
            <h1> { this.props.title } </h1>
            <p> Total: £{ this.state.total } </p>
            <button onClick={ () => this.changeSavingsAmount(this.props.amount) }> Add </button>
            <button onClick={ () => this.changeSavingsAmount(this.props.amount / -1) }> Withdraw </button>
            </div>
        )
    };

};

export default PiggyBank;