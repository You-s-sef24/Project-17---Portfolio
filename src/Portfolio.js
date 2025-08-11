import './Portfolio.css';
import { useState } from "react";
import { youssef } from "./backend/youssef";

export default function Portfolio() {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        msg: '',
        phone: ''
    });
    const [setStatus] = useState('');
    const filled = contact.name !== '' && contact.email !== '' && contact.msg !== '';

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", contact.name);
        formData.append("email", contact.email);
        formData.append("phone", contact.phone);
        formData.append("message", contact.msg);

        try {
            const res = await fetch(`https://formsubmit.co/${youssef.contactForm.emailReceiver}`, {
                method: "POST",
                body: formData
            });

            if (res.ok) {
                setStatus("✅ Message sent successfully!");
                setContact({ name: '', email: '', msg: '', phone: '' });
            } else {
                setStatus("❌ Something went wrong. Please try again.");
            }
        } catch (error) {
            setStatus("❌ Network error. Please try again.");
        }
    };

    const languages = youssef.languages.map((language, index) => {
        return (
            <h3 key={index} className='text-white'>{language}</h3>
        );
    });
    const skills = youssef.skills.frontend.map((skill, index) => {
        return (
            <span className='rounded p-3' key={index}>
                {skill.name}
                <div className="progress">
                    <div
                        className="progress-bar bg-warning"
                        style={{ width: `${skill.exp}%` }}
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                    </div>
                </div>
            </span>
        );
    });
    const tools = youssef.skills.tools.map((tool, index) => {
        return (
            <span className='rounded p-3' key={index}>
                {tool.name}
                <div className="progress">
                    <div
                        className="progress-bar bg-warning"
                        style={{ width: `${tool.exp}%` }}
                        role="progressbar"
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                    >
                    </div>
                </div>
            </span>
        );
    });
    const indicators = youssef.projects.map((project, index) => {
        return (
            <li
                key={project.id}
                className={index === 0 ? 'active' : ''}
                data-bs-target="#carouselId"
                data-bs-slide-to={index}
                aria-current={index === 0 ? "true" : undefined}
                aria-label={project.name}
            ></li>
        );
    });
    const items = youssef.projects.map((project, index) => {
        const techs = project.tech.map((tech, i) => {
            return (
                <span key={i} className='border-warning icon rounded-pill p-2'>{tech}</span>
            );
        });
        return (
            <div className={`carousel-item p-3 ${index === 0 ? 'active' : ''}`} key={project.id}>
                <div className="card bg-dark text-warning pb-3">
                    <img className="card-img-top" src={project.thumbnail} alt={project.name} />
                    <div className="card-body">
                        <h4 className="card-title">{project.name}</h4>
                        <p className="card-text">{project.description}</p>
                        <div className='d-flex flex-wrap gap-2 mb-3'>
                            {techs}
                        </div>
                        <div className='d-flex justify-content-center gap-2'>
                            <a className='icon rounded-circle p-1 px-2' href={project.githubLink} target='_blank' rel="noopener noreferrer" title='Github Link' data-bs-toogle="tooltip">
                                <i className="bi bi-github"></i>
                            </a>
                            {
                                project.liveLink ?
                                    (<a className='icon rounded-circle p-1 px-2' href={project.liveLink} target='_blank' rel="noopener noreferrer" title='Live Demo' data-bs-toogle="tooltip">
                                        <i className="bi bi-box-arrow-up-right"></i>
                                    </a>) : ('')
                            }
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <div className='container'>
            <div id='home' className='d-flex justify-content-center align-items-center min-vh-100 pt-3'>
                <div className='row align-items-center'>
                    <div className='col-12 col-md-6 text-center pt-5 pt-md-0'>
                        <img className='w-50 rounded-circle' src="/images/profile.jpg" alt="" />
                    </div>
                    <div className='col-12 col-md-6 text-white d-flex flex-column text-center text-md-start'>
                        <h1 className='fw-bold'>Hi It's <span className='text-warning'>{youssef.name}</span></h1>
                        <h3>I'm a <span className='text-warning'>{youssef.job}</span></h3>
                        <p>{youssef.bio}</p>
                        <div className='d-flex justify-content-center justify-content-md-start gap-2'>
                            <div className='icon rounded-circle p-1 px-2'>
                                <a href={youssef.linkedin} target='_blank' rel="noopener noreferrer">
                                    <i className="bi bi-linkedin"></i>
                                </a>
                            </div>
                            <div className='icon rounded-circle p-1 px-2'>
                                <a href={youssef.github} target='_blank' rel="noopener noreferrer">
                                    <i className="bi bi-github"></i>
                                </a>
                            </div>
                            <div className='icon rounded-circle p-1 px-2'>
                                <a href={youssef.instagram} target='_blank' rel="noopener noreferrer">
                                    <i className="bi bi-instagram"></i>
                                </a>
                            </div>
                            <div className='icon rounded-circle p-1 px-2'>
                                <a href={youssef.facebook} target='_blank' rel="noopener noreferrer" >
                                    <i className="bi bi-facebook"></i>
                                </a>
                            </div>
                        </div>
                        <div className='text-center text-md-start'>
                            <a href="#contact" className="btn btn-outline-warning fw-bold my-3 w-25">Hire Me</a>
                        </div>
                    </div>
                </div>
            </div>

            <hr className="text-warning" />

            <div id='about' className='d-flex flex-column justify-content-center align-items-center min-vh-100 text-warning pt-3 mb-5'>
                <div className='row mt-5'>
                    <h1 className='fw-bold text-center mb-3'>About me</h1>
                    <h4 className='text-white'>Hi i'm <span className='text-warning'>{youssef.name}</span> , {youssef.bio}</h4>
                </div>
                <hr className='w-100 my-3' />
                <div className='row border rounded border-warning w-100 p-2'>
                    <h2 className='fw-bold text-center text-decoration-underline mb-3'>Personal Info</h2>
                    <h3 className='text-white'>Date of Birth: <strong className='text-warning'>{youssef.birthdate}</strong></h3>
                    <h3 className='text-white'>Nationality: <strong className='text-warning'>{youssef.nationality}</strong></h3>
                    <div className='my-2'>
                        <h2 className='fw-bold text-center text-decoration-underline mb-3'>Education</h2>
                        <h3 className='text-white'>University: <strong className='text-warning'>{youssef.education.university}</strong></h3>
                        <h3 className='text-white'>Faculty: <strong className='text-warning'>{youssef.education.faculty}</strong></h3>
                        <h3 className='text-white'>Degree: <strong className='text-warning'>{youssef.education.degree} ({youssef.education.startYear} - {youssef.education.expectedGraduation})</strong></h3>
                    </div>
                    <div>
                        <h2 className='fw-bold text-center text-decoration-underline mb-3'>Languages</h2>
                        {languages}
                    </div>
                </div>
                <hr className='w-100 my-3' />
                <div className='row border rounded border-warning w-100 p-2'>
                    <div className='col'>
                        <h2 className='fw-bold text-center text-decoration-underline mb-3'>Skills</h2>
                        <div className='d-flex flex-column gap-2 mb-3'>
                            {skills}
                        </div>
                    </div>
                    <div className='col'>
                        <h2 className='fw-bold text-center text-decoration-underline mb-3'>Tools</h2>
                        <div className='d-flex flex-column gap-2 mb-3'>
                            {tools}
                        </div>
                    </div>
                </div>
            </div>

            <hr className="text-warning" />

            <div id="projects" className='pt-3'>
                <h1 className='text-warning fw-bold text-center mb-4 mt-5'>Projects</h1>
                <div id="carouselId" className="carousel slide bg-dark " data-bs-ride="carousel">
                    <ol className="carousel-indicators">
                        {indicators}
                    </ol>
                    <div className="row justify-content-center carousel-inner" role="listbox">
                        <div className='col-12 col-md-6'>
                            {items}
                        </div>
                    </div>
                </div>
            </div>

            <hr className="text-warning" />

            <form id='contact' className='d-flex flex-column justify-content-center align-items-center pt-3 mb-5' onSubmit={() => {
                if (!filled) {
                    return;
                } else {
                    handleSubmit()
                }
            }}>
                <h1 className="text-warning fw-bold mb-4">Contact Us</h1>
                <p className="text-warning mb-4">Have a question, project, or idea? Drop me a message—I’d love to hear from you!</p>
                <div className="form-floating w-50 mb-3">
                    <input
                        required
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        placeholder=""
                        value={contact.name}
                        onChange={(e) => {
                            setContact({ ...contact, name: e.target.value });
                        }}
                    />
                    <label htmlFor="name">Your Name</label>
                </div>
                <div className="form-floating w-50 mb-3">
                    <input
                        required
                        type="email"
                        className="form-control"
                        name="email"
                        id="email"
                        placeholder=""
                        value={contact.email}
                        onChange={(e) => {
                            setContact({ ...contact, email: e.target.value });
                        }}
                    />
                    <label htmlFor="email">Your Email</label>
                </div>
                <div className="form-floating w-50 mb-3">
                    <input
                        type="tel"
                        className="form-control"
                        name="phone"
                        id="phone"
                        placeholder=""
                        value={contact.phone}
                        onChange={(e) => {
                            setContact({ ...contact, phone: e.target.value });
                        }}
                    />
                    <label htmlFor="phone">Your Phone (optional)</label>
                </div>
                <div className="form-floating w-50 mb-3">
                    <textarea
                        required
                        type="text"
                        className="form-control"
                        name="message"
                        id="message"
                        placeholder=""
                        value={contact.msg}
                        onChange={(e) => {
                            setContact({ ...contact, msg: e.target.value });
                        }}
                    />
                    <label htmlFor="message">Your Message</label>
                </div>
                <button type="submit" className="btn btn-outline-warning fw-bold w-50">Send Message</button>
            </form>
        </div>
    );
}