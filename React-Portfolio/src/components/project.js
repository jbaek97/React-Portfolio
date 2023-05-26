import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Project(props) {
  return (
    <Card style={{ width: '40vh' }} className='ProjectCard'>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <a href={props.link}>Link</a>
        <Card.Text>
            Description:
            <br></br>
          {props.text}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Project;