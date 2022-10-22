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
          <a target="_blank" className="project" key={project.id} title='View live project' href={project.url} >
            <img src={project.img} alt="Project Display" className='project-display' />
            <div className="project-link">
              <h3> {project.name} </h3>
              <img src={Arrow} alt="Link to live project" />
            </div>
            <p> {project.description} </p>
          </a>
        ))}
      </div>
    </div>
  );
}
 
export default Projects;