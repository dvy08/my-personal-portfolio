export default function Header(){
    return (
    <header>
        <div className="heading-greeting">
            <h1>
                Hi! I'm Dana
            </h1>
        </div>
        <p id="main-line">
            Junior developer and aspiring full-stack developer
        </p>

        <div className="links">
            <a href="https://github.com/dvy08"><img src="/my-personal-portfolio/GitHub_Invertocat_Black.svg" /></a>
        </div>
        
        <nav>
            <ul>
                <li className="linknav">
                    <a href="#about">About</a>
                </li>
                <li className="linknav">
                    <a href="#projects">Projects</a>
                </li>
            </ul>
        </nav>
    </header>
    );
}