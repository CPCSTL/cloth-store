import {Component} from 'react'
import FormInput from '../form-input/form-input.comp'

import CustomButton from '../CustomButton/custom-button.comp'
import'./sign-in.styles.scss'

class SignIn extends Component{
    constructor(){
        super();
        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email:'', password:''})
    };

    handleChange = event => {
        const {value , name} = event.target;
        this.setState({[name]:value})
    }
    render(){
        return (
            <div className='sign-in'>
            <h2> Already have an acount?</h2>
            <span> sign in with your email and password</span>

            <form onSubmit={this.handleSubmit}>
            <FormInput 
            type='email' 
            name='email' 
            value={this.state.email} 
            handleChange={this.handleChange}
            label='email'
            required />
    
            <FormInput 
            type='password' 
            name='password' 
            value={this.state.password} 
            handleChange={this.handleChange}
            label='password'
            required
            />

            <CustomButton type='submit'> Sign In </CustomButton>
            </form>
            </div>
        )
    }
};
export default SignIn