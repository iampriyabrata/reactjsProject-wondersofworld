import WondersOfWorld from "../data/data";

export function check(e) {
  const likeBtn = e.target;
  if (likeBtn.checked === false) {
    likeBtn.checked = true;
    document.getElementById(e.target.id).style.background = "pink";
    console.log(likeBtn.checked);
  } else {
    likeBtn.checked = false;
    document.getElementById(e.target.id).style.background = "";
    console.log(likeBtn.checked);
  }
}

const Card = () => {
  return (
    <>
      {WondersOfWorld.map((wwd) => {
        return (
          <div className="card" key={wwd.id}>
            <img src={wwd.imageLocation} alt="" />
            <div className="cardBody">
              <p className="title fs-5 fw-bold">{wwd.title}</p>
              <p className="dateOfConstruction fw-bold">
                Date of Construction :{" "}
                <span className="text-secondary">{wwd.dateOfConstruction}</span>
              </p>
              <p className="dateOfDestruction fw-bold">
                Date of Destruction :{" "}
                <span className="text-secondary">{wwd.dateOfDestruction}</span>
              </p>
              <div className="cardButton">
                <button type="button" className="btn btn-primary">
                  <a
                    href={wwd.link}
                    className="text-light link-underline link-underline-opacity-0"
                    target="_blank"
                  >
                    Explore
                  </a>
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Card;
