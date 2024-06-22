import "./card.css";

export default function Card({
  projectDescription,
  projectImage,
  projectName,
}) {
  return (
    <>
      <div className="card">
        <div className="card-pic">
          <img src={projectImage} alt="porject pic" />
        </div>

        <h4>{projectName}</h4>
        <p>{projectDescription}</p>
      </div>
    </>
  );
}
