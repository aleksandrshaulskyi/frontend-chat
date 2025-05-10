import './AuthForm.css'


interface AuthProps {
    placeholder_one: string
    placeholder_two: string
    type_one: string
    type_two: string
    text: string
}


export default function AuthForm(props: AuthProps) {
    let placeholder_one = props.placeholder_one
    let placeholder_two = props.placeholder_two
    let type_one = props.type_one
    let type_two = props.type_two
    let text = props.text

    const AuthForm = (
        <div className='form-wrapper'>
            <form className='auth-form'>
                <div className='inner-wrapper'>
                    <input className='text-input' placeholder={placeholder_one} type={type_one}></input>
                    <input className='text-input' placeholder={placeholder_two} type={type_two}></input>

                    <button className='submit-button' type='submit'> {text} </button>
                </div>
            </form>
        </div>
    )

    return AuthForm
}
