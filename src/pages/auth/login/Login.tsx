import './LogIn.css'
import StringInput from "../../../components/StringInput"


export default function LogIn() {
    const LogIn = (
        <div className='form-wrapper'>
            <form className='login-form'>
                <div className='inner-wrapper'>
                    <StringInput ClassName='login-username input' Placeholder='Username' Type='text' />
                    <StringInput ClassName='login-password input' Placeholder='Password' Type='password' />

                    <button className='login-submit' type='submit'> Log In </button>
                </div>
            </form>
        </div>
    )

    return LogIn
}
