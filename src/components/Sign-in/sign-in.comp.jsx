import {Component} from 'react'
import FormInput from '../form-input/form-input.comp';
import {auth, signInWithGoogle} from '../../firbase/firebase.utils'
import {withRouter} from 'react-router-dom'



import CustomButton from '../CustomButton/custom-button.comp'
import'./sign-in.styles.scss'




class SignIn extends Component{
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {email, password} =this.state;
        
        try {
            await auth.signInWithEmailAndPassword(email,password);
            this.setState({email:'', password:''});
            await this.props.history.push('/');
        } catch(error){
            console.log(error)
        }
    };

    handleGoogle = async ()=> {
         await signInWithGoogle();
          this.props.history.push('/')
     }

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
            <div className='buttons' >
            <CustomButton type='submit'> Sign In </CustomButton>
             <CustomButton onClick={this.handleGoogle} 
             to='/'
             type='button'
              isGoogleSignIn > Sign-in with Google </CustomButton>
            </div>
            </form>
            </div>
        )
    }
};
export default withRouter(SignIn)