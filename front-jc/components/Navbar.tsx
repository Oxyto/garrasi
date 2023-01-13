import { h, Component } from 'preact';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div class="right">
                    <img src="logo.png" alt="Logo" />
                    <button>Home</button>
                    <button>Message</button>
                    <button>Review</button>
                    <button>Affiliate</button>

                </div>
                <div class="left">
                    <button>Login</button>
                    <button>Signup</button>
                    <span>UserName</span>
                    <select>
                        <option value="profile">Profile</option>
                        <option value="logout">Logout</option>
                    </select>
                </div>
            </nav>
        );
    }
}

export default Navbar;
