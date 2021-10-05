const AboutPage = () => {
    return(
        <div className="about">
            <h3 className="about__title">About Page</h3>
            <div className="about__info">
                <div>
                    <p>Hey! It's me, Denis. Here I will write what I used when developing this app.</p>
                    <ul>
                        <li>React (create-react-app)</li>
                        <li>Axios AJAX Request</li>
                        <li>TVMAZE API (https://www.tvmaze.com/api)</li>
                        <li>React Router</li>
                        <li>React Hooks</li>
                        <li>React Context API</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;