import { Footer } from "./footer"
import logo from '../aims-logo.png'

export const Home = (props) => {
    return (
        <div className="home">
            
            <img src= {logo} className="logo" alt="aims logo"/>


            <h1 class = "header">The Artificial Intelligence for Medicine and Healthcare Society </h1>
            
            <div class="boxed"> To our knowledge, we are the first student organization in our field in the country. 
            As an organization of both undergraduate and graduate students, we are dedicated to (1) helping one another become the next generation of leaders within the field of AI for healthcare and medicine, (2) to helping curious students learn more about the field, and (3) to broadly creating a strong community around the field at Georgia Tech.
            </div>
            
            <Footer/>
        </div>
    )
}
