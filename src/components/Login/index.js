
import React  from 'react';
import { AuthContext } from '../../context/authcontext';

import './style.css';
import './loader.css';

export const Login = () => {

    const {login} = React.useContext(AuthContext)
    const [username, setUsername] = React.useState('')
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const formsubmit = async (e) => {

        e.preventDefault()
        setIsSubmitting(true); console.log("isSubmitting", isSubmitting);
        const data = await login(username)
        if(data){

            setIsSubmitting(false)
            setUsername('')
        }
    }

    const userLogin = async (username) => {

        setIsSubmitting(true);
        const data = await login(username)
        if (data) {

            setIsSubmitting(false)
        }
    }

    let loader = null;
    if (isSubmitting) {
        loader = (<div className="loading">Loading...</div>);
    }

    return(
        <div className="authContainer">
            <div className='container'>
                {loader}
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='col-md-6'>
                        <form onSubmit={formsubmit}>
                            <fieldset>
                                <legend>Welcome to CometChatApp</legend>
                                <div className="user__container">
                                    <div className="user__block">
                                        <div className="avatar__block" onClick={() => { userLogin('superhero1') }}>
                                            <img src="https://data-us.cometchat.io/assets/images/avatars/ironman.png" className="rounded" alt="..." />
                                        </div>
                                        <label>superhero1</label>
                                    </div>
                                    <div className="user__block">
                                        <div className="avatar__block" onClick={() => { userLogin('superhero2') }}>
                                            <img src="https://data-us.cometchat.io/assets/images/avatars/captainamerica.png" className="rounded" alt="..." />
                                        </div>
                                        <label>superhero2</label>
                                    </div>
                                    <div className="user__block">
                                        <div className="avatar__block" onClick={() => { userLogin('superhero3') }}>
                                            <img src="https://data-us.cometchat.io/assets/images/avatars/spiderman.png" className="rounded" alt="..." />
                                        </div>
                                        <label>superhero3</label>
                                    </div>
                                </div>
                                <p>
                                    <input className='form-control' value={username} type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                                </p>
                                <p className="button__container">
                                    <button type='submit' className='button' variant="secondary btn-action" size="lg" disabled={isSubmitting}>
                                        LOGIN {isSubmitting ? (<i className="fa fa-spinner fa-spin"></i>) : null}
                                    </button>
                                </p>
                            </fieldset>
                        </form>
                    </div>
                    <div className='col-md-3'></div>
                </div>
            </div>
        </div>
    )
} 
