import Header from '../components/header';
import Footer from '../components/footer';
import Project from '../components/project';
import Horiseon from "../assets/images/horiseon.jpg"
import Weather from "../assets/images/weather.png";
import Lyrassist from "../assets/images/lyrassist.png";
import Stylist from "../assets/images/stylist.png";
import Chat from "../assets/images/chat.png";
import Note from "../assets/images/note.png";


const Portfolio = () => {
    return (
    <div className='Portfolio'>
        <div>
            <Header /> 
        </div>           
        <div className="ProjectsContainer">
            <div className='Projects'>
                <Project 
                image={Lyrassist}
                title="Lyrassist"
                link="http://www.lyrassist.ai/"
                text="Lyrassist is a web application that leverages OpenAI GPT-3.5 to generate lyrics for various music genres. With the use of GraphQL and the MERN (MongoDB, Express.js, React, Node.js) stack, Lyrassist provides an intuitive and interactive platform for lyric generation. Whether you're a seasoned musician or a budding songwriter, Lyrassist is here to inspire you and elevate your musical creations to new heights."/>
                <Project
                image={Horiseon} 
                title="Horiseon"
                text-="This project was made in order to refactor the HTML and CSS of a webpage for a marketing agency called Horiseon. The main goal for the refactoring was to help the webpage follow accessibility standards and to be opitimzied for the search engines. In terms of the HTML, the code was refactored so that div tags were semantic in order to make the code easier to read and in a better organzied fashion. On the CSS side, certain CSS rules had overlapping functions which caused the style page to be unneccessarily long and complicated. This was countered by consolidating those rules into composites of those rules. After these composites were made, I organized the rules so they can reflect the structure of the HTML. However, in order to ensure the maximum amount of clarity, I also commented on the CSS creating headers that indicate which CSS rules are affecting which section in HTML. Through this progress I learned about how much of an effect organization can have on the aesthetic and understanding of a website. I also learned about how important it is to plan accordingly before coding in order to lower the probability of having to refactor."
                link="https://jbaek97.github.io/Horiseon_Refactor/"/>
                <Project 
                image={Weather}
                title="Weather App"
                text="For this application, I wanted to create a weather app that would allow a user to search for any city within the United States and get the current weather and the subsequent 5 days of weather. As the weather gets even more unpredictable, this weather app gives an easy solution to finding out the potential weather changes. This app not only allows you to search weather, but it also maintains past search results, of which you can simply click on and return to the respective weather report page. Each weather report features the city name, the date, the temperature, weather condition, and wind speed. Through this application I learned about the power of APIs and the way to search through an API to get the information that is needed. I also learned about how to get images from an API, of which I found to be the hardest part."
                link="https://jbaek97.github.io/Weather-Forecast-Application/"/>
            </div>
            <div className='Projects'>
                <Project 
                image={Stylist}
                title="Stylist"
                link="https://autohome.github.io/jenhua-joerdo/"
                text="Our team of developers created this application with the idea of helping the target user be able to decide on an outfit idea for any occasion whenever the user may have no clue where to begin. The user is in need of an outfit idea but may not be able to go get a personal shopper or stylist--- This is where the help of Sylist.AI comes in. Stylist.Ai provides the services of an “at-home” or “on-the-go” stylist to any user in need of styling services."/>
                <Project 
                image={Chat}
                title="Chat App"
                text="This is a networking hub for UCLA's full-stack development class. On this application, you can stay connected with your peers! You can chat, find and post memes, networking events, and useful study tips!"
                link="https://sleepy-caverns-11679.herokuapp.com/"/>
                <Project 
                image={Note}
                title="Note App"
                link="https://shrouded-citadel-42220.herokuapp.com/notes"
                text="In a world that has switched to the digital era, an online note-taking app such as the one I made in this web applicaion is a necessary asset for students and anybody who needs to record something. This web app provides an area to add a note by pressing the + button. Once this is pressed a user can enter a note title and note text. Once saved these notes will bbe saved in the adjacen sidebar. This sidebar provides easy access to past notes. Clicking on these notes select a note and makes it active so that the user can view it. This project helped me get comfortable with creating routes and a server. I also learned how to deploy through Heroku and how to use heroku logs --tail to debug issues I had when pushing my project to Heroku."/>
            </div>
        </div>
        <div className='center'>
            <Footer />
        </div>
    </div>
    )
};

export default Portfolio;