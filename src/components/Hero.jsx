import pfp from '../assets/pfp.png';

const Hero = () => {
    return (
        <div>
            <img src={pfp} alt="" />
            <h1>Mohamed Riyaz Ahamed</h1>
            <h2>B.Tech AI & ML Student</h2>
            <h3>Aspiring Full Stack Developer</h3>
            <button>Resume</button>
            <button>Github</button>
            <button>Linkedin</button>
        </div>
    )
}

export default Hero;