import { Link } from "react-router-dom"
import Search from "./Search"

const Navbar = ({ title }) => {

    const styles = {
        color: '#fff',
        textDecoration: 'none'
    }

    return (
        <div className="">
            <Link to='/' style={styles}> <h2>{title}</h2></Link>

            <Search />
        </div>
    )
}


Navbar.defaultProps = {
    title: 'Pick n Pay'
}
export default Navbar
