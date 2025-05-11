import { Link } from 'react-router'

import './Index.css'


export default function Index() {
    const Index = (
        <div className='wrapper'>
            <h1 className='index-hone'>Welcome to the chat</h1>
            <div className='index-inner-wrapper'>
                <Link className='link' to='/signup/'><button className='index-link-button'> Sign Up </button></Link>
                <Link className='link' to='/login/'><button className='index-link-button'> Log In </button></Link>
            </div>
        </div>
    )

    return Index
}
