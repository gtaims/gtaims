import { Footer } from "./footer"
export const Officers = (props) => {
    return (
        <div className="officers">
            <h1 className="headerO">Officers</h1>
            <div className="officer-grid">
                <div className="officer-row">
                    <div className="role">
                        President
                    </div>
                    <div className="name">
                        Ethan Kim
                    </div>
                    <div className="description">
                        CS, C/O 2024, Interests: Multimodal Learning, Computer Vision
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
                        BMED, C/O 2023, Interests: Wearable Technologies 
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
                        CS, C/O 2025, Interests: Medical Image Processing/Analysis, Anime
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
                        CS, C/O 2025, Interests: Data Science, Running
                    </div>
                </div>
                <div className="officer-row">
                    <div className="role">
                        Public Relations Officer
                    </div>
                    <div className="name">
                        Abhinav Sattiraju
                    </div>
                    <div className="description">
                        CS, C/O 2024, Interests: Explainable AI, Computer Vision 
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};
