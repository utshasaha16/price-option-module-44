const Link = ({ route }) => {
  const { name, path } = route;
  return (
    <li className="mr-10 px-6 hover:bg-yellow-600">
      <a href={path}>{name}</a>
    </li>
  );
};

export default Link;
