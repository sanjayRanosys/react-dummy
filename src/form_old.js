import React from 'react';
import { ButtonInput } from 'react-bootstrap';
 
// Import Form and ValidatedInput components. Notice that you need to use 
// this ValidatedInput component instead of the original one to have 
// validation and other features working 
import { Form, ValidatedInput } from 'react-bootstrap-validation';
 
// There's also a wrapper for radio inputs that react-bootstrap 
// doesn't (yet) have 
import { Radio, RadioGroup } from 'react-bootstrap-validation';
 
class NameForm extends React.Component {
 
    render() {
        return (
            <Form
                // Supply callbacks to both valid and invalid 
                // submit attempts 
                onValidSubmit={this._handleValidSubmit.bind(this)}
                onInvalidSubmit={this._handleInvalidSubmit.bind(this)}>
 
                <ValidatedInput
                    type='text'
                    label='Email'
                    // Each input that you need validated should have 
                    // the "name" prop 
                    name='email'
                    // Validation rules separated with comma 
                    validate='required,isEmail'
                    // Error messages for each error type 
                    errorHelp={{
                        required: 'Please enter your email',
                        isEmail: 'Email is invalid'
                    }}
                />
 
                <ValidatedInput
                    type='password'
                    name='password'
                    label='Password'
                    // You can pass params to validation rules 
                    validate='required,isLength:6:60'
                    errorHelp={{
                        required: 'Please specify a password',
                        isLength: 'Password must be at least 6 characters'
                    }}
                />
 
                <ValidatedInput
                    type='password'
                    name='password-confirm'
                    label='Confirm Password'
                    // Validate can be a function as well 
                    validate={(val, context) => val === context.password}
                    // If errorHelp property is a string, then it is used 
                    // for all possible validation errors 
                    errorHelp='Passwords do not match'
                />
 
                {/* Custom component to supply a couple of bootstrap
                    wrappers around radio inputs to look pretty */}
                <RadioGroup name='radio'
                            value='3'
                            label='Which one is better?'
                            // Supports validation as well 
                            validate={v => v === 'cola'}
                            errorHelp='Pepsi? Seriously?'
                            // And accepts (almost) all the same props 
                            // as other react-bootstrap components 
                            labelClassName='col-xs-2'
                            wrapperClassName='col-xs-10'>
                    {/* Radio is a simple wrapper around react-bootstrap's
                        Input component */}
                    <Radio value='cola' label='Cola' />
                    <Radio value='pepsi' label='Pepsi' />
                </RadioGroup>
 
                <ValidatedInput
                    type='checkbox'
                    name='agree'
                    label='I agree to the terms and conditions'
                    // Validation rules is easily extendable to fit 
                    // your needs. There are only two custom rules, 
                    // 'isChecked' and 'required', others are stock 
                    // validator.js methods 
                    validate='isChecked'
                />
 
                <ButtonInput
                    type='submit'
                    bsSize='large'
                    bsStyle='primary'
                    value='Register'
                />
            </Form>
        );
    }
 
    _handleValidSubmit(values) {
        // Values is an object containing all values 
        // from the inputs 
    }
 
    _handleInvalidSubmit(errors, values) {
        // Errors is an array containing input names 
        // that failed to validate 
    }
 
}