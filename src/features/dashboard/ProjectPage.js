import { useParams } from 'react-router-dom';

function ProjectPage() {
  const params = useParams();

  return (
    <div className="dashboard-project-page">
      project {params.id}
    </div>
  );
}

export default ProjectPage;
