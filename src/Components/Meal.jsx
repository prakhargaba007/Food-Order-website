import MealsItem from "./MealsItem";
import Error from "./Error";
import useHttp from "../Hooks/useHttps";

const requestConfig = {};

function Meal() {
  const {
    data: meals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }
  if (error) {
    return <Error tital={"Failed to fetch error"} message={error} />;
  }

  return (
    <>
      <ul id="meals">
        {meals.map((meals) => (
          <MealsItem key={meals.id} meal={meals} />
        ))}
      </ul>
    </>
  );
}

export default Meal;
