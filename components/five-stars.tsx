import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const FiveStars = () => {
  return (
    <div className="d-flex drop-shadow-sm">
      {Array.from({ length: 5 }).map((_, i) => <FontAwesomeIcon key={i} icon={faStar} style={{ color: "#fcb203" }} />)}
    </div>
  )
}