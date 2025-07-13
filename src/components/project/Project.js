import './Project.css';
const Project = () => {
    return (
        <div className='design'>
            <h1> Projects</h1>
            <div className='pro-list'>
                <div className='pro-card'>
                    <img src='/Elusive.png' alt='Elusive' />
                    <p> Elusive Website </p>
                </div>
                <div className='pro-card'>
                    <img src='/Gurukhoj.png' alt='Gurukhoj' />
                    <p>Gurukhoj Mobile Application</p>
                </div>
            </div>
        </div>
    );
}
export default Project;