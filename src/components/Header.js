import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/UserContext';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log('context', user)

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error));
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content flex justify-between">
                <Link to='/' className="btn btn-ghost normal-case text-xl">Smart Irregation System</Link>
                <div>
                    <Link className="btn btn-ghost normal-case text-xl" to='/'>Home</Link>
                    <Link className="btn btn-ghost normal-case text-xl" to='/dashboard'>Dashboard</Link>
                    {/* <Link className="btn btn-ghost normal-case text-xl" to='/login'>LogIn</Link> */}
                    <Link className="btn btn-ghost normal-case text-xl" to='/register'>Register</Link>
                    {user?.email && <span>{user.email}</span>}
                    {
                        user?.email ?
                            <button onClick={handleSignOut} class="btn btn-sm m-2">Sign Out</button>
                            : <Link to='/login'>
                                <button onClick={handleSignOut} class="btn btn-sm m-2">Sign In</button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;