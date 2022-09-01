import { Footer } from "./footer"
export const Officers = (props) => {
    return (
        <div className="officers">
            <h1>Current Officers</h1>
            <div className="officer-grid">
                <div className="officer-row">
                    <div className="role">
                        President
                    </div>
                    <div className="name">
                        Ethan Kim
                    </div>
                    <div className="description">
                        CS Major, Class of 2024, Interests: XAI, Computer Vision 
                    </div>
                </div>
                <div className="officer-row">
                    <div className="role">
                        Vice President
                    </div>
                    <div className="name">
                        Lan Lan
                    </div>
                    <div className="description">
                        CS Major, Class of 2024, Interests: XAI, Computer Vision 
                    </div>
                </div>
                <div className="officer-row">
                    <div className="role">
                        Treasurer
                    </div>
                    <div className="name">
                        Harshika Gelivi
                    </div>
                    <div className="description">
                        CS Major, Class of 2024, Interests: XAI, Computer Vision 
                    </div>
                </div>
                <div className="officer-row">
                    <div className="role">
                        Secretary
                    </div>
                    <div className="name">
                        Drew Lawton
                    </div>
                    <div className="description">
                        CS Major, Class of 2024, Interests: XAI, Computer Vision 
                    </div>
                </div>
                <div className="officer-row">
                    <div className="role">
                        Public Relations Officer
                    </div>
                    <div className="name">
                        Abhinav
                    </div>
                    <div className="description">
                        CS Major, Class of 2024, Interests: XAI, Computer Vision 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
