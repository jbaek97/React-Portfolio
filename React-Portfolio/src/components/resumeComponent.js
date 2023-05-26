import Accordion from 'react-bootstrap/Accordion';

function ResumeComponent() {
  return (
    <Accordion className="resume">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Resume Download</Accordion.Header>
        <Accordion.Body>
            Download Link: <a>Link</a>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Front-End Skills</Accordion.Header>
        <Accordion.Body className="scroll">
          As a front-end web developer, I possess a wide range of skills that enable me to create visually appealing and interactive user interfaces. I am proficient in HTML, CSS, and JavaScript, which form the foundation of front-end development. With HTML, I can structure the content of web pages, while CSS allows me to style and customize their appearance. JavaScript empowers me to add interactivity and dynamic functionality to websites, making them more engaging for users.
          I have a strong understanding of responsive web design principles, ensuring that websites I create are compatible across various devices and screen sizes. This includes employing CSS media queries and utilizing frameworks like Bootstrap to optimize the user experience on different platforms.
          Furthermore, I am well-versed in modern front-end frameworks such as React and Angular. With React, I can build reusable UI components and develop single-page applications, while Angular enables me to create complex web applications with a modular and efficient architecture.
          In addition to technical skills, I have a keen eye for design and user experience. I am proficient in using design tools like Adobe Photoshop and Sketch to create mockups and wireframes, enabling me to collaborate effectively with designers and translate their vision into functional websites. Overall, my front-end web development skills encompass HTML, CSS, JavaScript, responsive design, frameworks like React and Angular, and a strong focus on design and user experience. With this skill set, I am equipped to create visually stunning and highly functional websites that provide an exceptional user experience.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>Back-End Skills</Accordion.Header>
        <Accordion.Body className="scroll">
          As a back-end web developer, I possess a robust set of skills that enable me to build the server-side components and functionalities of websites and web applications. I have expertise in programming languages such as React and JavaScript, which allow me to handle server-side logic and data manipulation.
          I am experienced in working with databases, including SQL and NoSQL, and can efficiently design and optimize database schemas. I can write complex queries, perform data migrations, and ensure the security and integrity of the data stored.
          I am proficient in working with web frameworks such as Django, Ruby on Rails, Laravel, or Spring, which provide a solid foundation for developing scalable and maintainable web applications. These frameworks offer features like routing, authentication, session management, and integration with external APIs.
          I have a strong understanding of RESTful API design principles and can develop robust APIs that enable seamless communication between front-end and back-end components. I am skilled in utilizing frameworks like Express.js or Flask to build lightweight and efficient APIs.
          Moreover, I have knowledge of server management and deployment processes. I can configure and maintain servers, deploy applications using platforms like AWS or Heroku, and ensure high availability and scalability.
          In addition to technical skills, I am experienced in working with version control systems such as Git, which allows for efficient collaboration with other developers and facilitates code management.
          Overall, my back-end web development skills encompass programming languages, database management, web frameworks, API development, server management, deployment processes, and version control. With this skill set, I am well-equipped to build robust and scalable web applications that handle complex server-side functionalities efficiently.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default ResumeComponent;