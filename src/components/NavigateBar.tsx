
import reactLogo from "../assets/icons/react.svg"
import viteLogo from '../assets/icons/vite.svg'

export default function NavigateBar() {
    return (<div id="app-nav-root">
        <img className='logo' src={reactLogo} ></img>
        <div className='pages-container'>
            <a className='pages-item' href='/'><p>🏠Home</p></a>
            <a className='pages-item' href='/photography/two-way-free/index.html' target='_blank'><p>📷Photo</p></a>
        </div>
        <img className='logo tail-logo' src={viteLogo} ></img>
    </div>)
}
