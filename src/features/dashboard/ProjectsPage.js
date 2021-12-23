import { useNavigate } from 'react-router-dom';

function ProjectsPage() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-projects-page">
      projects page
      <br/>
      <button onClick={() => navigate('/project/1')}>project 1</button>
    </div>
  );
}

export default ProjectsPage;
