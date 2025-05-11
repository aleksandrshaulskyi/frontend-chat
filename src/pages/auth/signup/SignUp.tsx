import './SignUp.css'
import StringInput from "../../../components/StringInput"


export default function SignUp () {
    const SignUp = (
        <div className='form-wrapper'>
            <form className='signup-form'>
                <div className='inner-wrapper'>
                    <StringInput ClassName='signup-username input' Placeholder='Username' Type='text' />
                    <StringInput ClassName='signup-password input' Placeholder='Password' Type='password' />

                    <button className='signup-submit' type='submit'> Sign Up </button>
                </div>
            </form>
        </div>
    )

    return SignUp
}
