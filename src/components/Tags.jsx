function Tags({ tags }) {
  return (
    <div>
      <ul className="Tags">
        {tags.map((item, index) => {
          return (
            <li className="Tag" key={index}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Tags;
