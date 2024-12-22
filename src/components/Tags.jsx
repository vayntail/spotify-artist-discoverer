import { useState } from "react";
import "./Tags.css";

function Tags({ tags, onGenreSelected }) {
  const [activeTag, setActiveTag] = useState(null);

  // whenever a genre is selected, send it to app.
  const handleClick = (event, item) => {
    onGenreSelected(item);
    setActiveTag(item);
  };

  return (
    <div className="Tags">
      <ul>
        {tags.map((item, index) => {
          // check if button active
          const isActive = activeTag && activeTag.name === item.name;
          return (
            <li key={index}>
              <button
                className={`tag-button ${isActive ? "active" : ""}`}
                onClick={(event) => handleClick(event, item)}
              >
                {item.name}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tags;
