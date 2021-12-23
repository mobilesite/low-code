import { useNavigate } from 'react-router-dom';

function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects">
      <button onClick={() => navigate('/project/1')}>project 1</button>
    </div>
  );
}

export default Projects;
