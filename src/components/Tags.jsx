function Tags({ tags, onGenreSelected }) {
  // whenever a genre is selected, send it to app.
  const handleClick = (item) => {
    console.log(item.name + " was selected.");
    onGenreSelected(item);
  };

  return (
    <div>
      <ul className="Tags">
        {tags.map((item, index) => {
          return (
            <li className="Tag" key={index}>
              <button onClick={() => handleClick(item)}>{item.name}</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tags;
