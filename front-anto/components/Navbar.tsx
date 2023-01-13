
import { h, Component } from 'preact';

class Navbar extends Component {
    render() {
        return (
            <nav>
                <div class="right">
                    <img src="icon.png" alt="Logo" />
                    <button onclick="location.href = '/';">Home</button>
                    <button onclick="location.href = '/message.tsx';">Message</button>
                    <button onclick="location.href = '/review.tsx';">Review</button>
                    <button onclick="location.href = '/affiliate.tsx';">Affiliate</button>

                </div>
                <div class="left">
                    <button onclick="location.href = '/login.tsx';">Login</button>
                    <button onclick="location.href = '/signup.tsx';">Signup</button>
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