import '../assets/styles/homepage.scss'
import '../assets/styles/projects.scss'
import Arrow from '../assets/images/learn_more.png'
import { projectList } from '../assets/constants';

const Projects = () => {

  return (  
    <div className='project-wrapper'>
      <h3> My Projects </h3>
      <div className="my-projects">
        {projectList.map(project => (
          <div className="project" key={project.id}>
            <img src={project.img} alt={project.name} className='project-display' />
            <h3> {project.name} </h3>
            <p> {project.description} </p>
            <a target='_blank' title='View project live' href={project.url}>
              <button className="in-touch"> View project live </button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
 
export default Projects;