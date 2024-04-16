import { Link } from "react-router-dom";

const Home = ({data}) => {
  return (
    <>
      <h1>Home</h1>
      <ul>
        {data.map(task => (
          <li key={task._id}>
            <Link to={`/${task._id}`}>{task.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
};

export default Home;
