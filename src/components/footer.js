import slack from '../slack.png'

export const Footer = (props) => {
    return (
        <div className="footer">
            <div className='links'>
                <div>
                    Join our Slack!    
                </div>
                <a href='https://aimsatgt.slack.com/' target={'_blank'}><img src={slack} className="slack" alt="logo" /></a>
            </div>
            <div className='club-text'>A.I.M.S. at GT, 2022.</div>
        </div>
    )
};
