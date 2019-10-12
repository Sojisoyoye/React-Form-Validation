import React, { Component } from 'react';
import { PropTypes } from 'prop-types';

class Form extends Component {
    render() {
        return (
            <div className="row">
            <h1 className="text-center">Form Validation</h1>
            <form onClick={this.props.isFormValid}>
                <h3>Name:
                </h3>
                <input
                type="text"
                id="name"
                name="name"
                className="name"
                value={this.props.name}
                onChange={this.props.onChange} />
                <h3>Email:
                </h3>
                <input
                type="text"
                name="email"
                className="email"
                value={this.props.email}
                onChange={this.props.onChange} />
                <h3>Phone:
                </h3>
                <input
                type="text"
                name="phone"
                className="phone"
                value={this.props.phone}
                onChange={this.props.onChange} />
                <h3>Blog URL:
                </h3>
                <input
                type="text"
                name="url"
                className="url"
                value={this.props.url}
                onChange={this.props.onChange} />
                <div className="small-6 small-centered text-center columns">
                    <a href="/" className="button success expand round text-center">Verify</a>
                    {/* <button type="button" className="button success expand round text-center">Verify</button> */}
                </div>
            </form>
        </div>);
    }
}

Form.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
    url: PropTypes.string,
    isFormValid: PropTypes.func,
    onChange: PropTypes.func
}

export default Form;

