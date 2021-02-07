
import { Component} from 'react';
import {auth , createUserProfileDocument} from '../../firbase/firebase.utils';
import FormInput  from '../form-input/form-input.comp';
import CustomButton from '../CustomButton/custom-button.comp'
import {withRouter} from 'react-router-dom'
import './sign-up.styles.scss';


class SignUp extends Component{
    constructor(props){
        super(props);
        this.state ={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }
    }

    handleSubmit = async event =>{
       event.preventDefault();
       const { displayName, email, password, confirmPassword}= this.state;

       if(password !== confirmPassword) {
           alert("password don't match")
           return ;
       }
       

       try{
        const {user} = await auth.createUserWithEmailAndPassword(email,password);
           await createUserProfileDocument(user, {displayName})
           await this.props.history.push('/')
           this.setState ({
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
           })

       } catch(error){
         console.log(error)
       }
    }

    handleChange = event =>{
        const {name , value} = event.target
        this.setState({[name]:value})
    }
    render(){

        const { displayName, email, password, confirmPassword}= this.state;
        return(
            <div className='sign-up'>
            <h2 className='title'>Don't have an account?</h2>
            <span className='subtitle'> create an account using email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
            <FormInput 
            type='text'
            name='displayName'
            value={displayName}
            label='Your name'
            onChange ={this.handleChange}
            required
            
            />
            <FormInput 
            type='email'
            name='email'
            value={email}
            label='your email'
            onChange ={this.handleChange}
            required
            
            />
            <FormInput 
            type='password'
            name='password'
            value={password}
            label='choose a pasword'
            onChange ={this.handleChange}
            required
            
            />
            <FormInput 
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            label='confirm password'
            onChange ={this.handleChange}
            required
            
            />
            <CustomButton type='submit'> sign up</CustomButton>
            </form>
            
            </div>
        )
    }
}

export default withRouter(SignUp);