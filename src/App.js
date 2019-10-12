import React, {Component} from 'react';
import Form from './components/Form'
import Message from './components/Message'

class App extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        url: '',
        message: 'Form is Incomplete!',
        isEmailValid: false,
        isNameValid: false,
        isPhoneValid: false,
        isUrlValid: false,
        isFormValid: false
    }

    onChange = (event) => {
       const name = event.target.name;
       const value = event.target.value;
        this.setState({[name]: value},
            () => { this.validateFormField(name, value) }
        );
    };

    onSubmit = (event) => {
        event.preventDefault();
        if (this.validateForm()) {
            this.setState({
                message: 'Form is Complete!'
            })
        } else {
            this.setState({
                message: 'Form is Incomplete!'
            })
        }
    }

    validateFormField(fieldName, value) {
        let isEmailValid = this.state.isEmailValid;
        let isNameValid = this.state.isNameValid;
        let isPhoneValid = this.state.isPhoneValid;
        let isUrlValid = this.state.isUrlValid;

        if (fieldName === 'name') {
            const pattern = new RegExp(/^([a-zA-Z]{3,30})$/);
            isNameValid = pattern.test(value);
        };


        if (fieldName === 'email') {
            const pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,9}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            isEmailValid = pattern.test(value);
        }

        if (fieldName === 'phone') {
            const pattern = new RegExp(/^([2-9][0-9]{9})$/);
            isPhoneValid = pattern.test(value);
        };

        if (fieldName === 'url') {
            const pattern = new RegExp(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,9}(:[0-9]{1,5})?(\/.*)?$/gm);
            isUrlValid = pattern.test(value);
        };

        this.setState({
            isEmailValid: isEmailValid,
            isNameValid: isNameValid,
            isPhoneValid: isPhoneValid,
            isUrlValid: isUrlValid   
        }, this.validateForm);
    }

    validateForm() {
        let isFormValid = this.state.isFormValid;

        this.setState({
            isFormValid: this.state.isEmailValid && this.state.isNameValid && this.state.isPhoneValid && this.state.isUrlValid
        })

        return isFormValid
    }

    render() {
        const { name, email, phone, url } = this.state;

        return (<div>
            <Form
            name={name}
            email={email}
            phone={phone}
            url={url}
            isFormValid={this.onSubmit}
            onChange={this.onChange} />
            <Message message={this.state.message} />
        </div>);
    }
}

export default App;

