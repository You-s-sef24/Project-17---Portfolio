import './Navbar.css';

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className="container-fluid">
                <a href={'#home'} className="navbar-brand text-warning fs-3 fw-bold">Youssef.</a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                    <div className="navbar-nav d-flex gap-2">
                        <a href="#home" className='text-decoration-none text-warning fw-bold'>
                            Home
                        </a>
                        <a href="#about" className='text-decoration-none text-warning fw-bold'>
                            About
                        </a>
                        <a href="#projects" className='text-decoration-none text-warning fw-bold'>
                            Projects
                        </a>
                        <a href="#contact" className='text-decoration-none text-warning fw-bold'>
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
