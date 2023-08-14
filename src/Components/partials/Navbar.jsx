import '../../App.css'
import 'bulma/css/bulma.min.css';


export default function Navbar () {
    return (
        <div className='mainNav'>
            <nav class="navbar is-success" role="navigation" aria-label="main navigation">
            <div>
                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href='/'>
                        Eric's Semester Notes
                    </a>

                    <a class="navbar-item" href='/english'>
                        English
                    </a>
                    <a class="navbar-item" href='/biology'>
                        Biology
                    </a>
                    <a class="navbar-item" href='/us-history'>
                        US History
                    </a>

                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link" href='/american-government'>
                            American Government
                        </a>

                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                Phase 1 - 09/22
                            </a>
                            <a class="navbar-item">
                                Phase 2 - 11/02
                            </a>
                            <a class="navbar-item">
                                Phase 3 - 12/11
                            </a>
                            {/* <hr class="navbar-divider"/>
                            <a class="navbar-item">
                                Report an issue
                            </a> */}
                        </div>
                    </div>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            {/* <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                                Log in
                            </a> */}
                        </div>
                    </div>
                </div>
            </div>
            </nav>
        </div>
    )
}