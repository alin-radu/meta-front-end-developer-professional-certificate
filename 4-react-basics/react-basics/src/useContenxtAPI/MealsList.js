import { useMealsListContext } from './MealsProvider';

const MealsList = () => {
  const { meals } = useMealsListContext();

  return (
    <div>
      <h1>Meals List using Context API</h1>
      {meals.map((meal, idx) => (
        <h2 key={idx}>{meal}</h2>
      ))}
    </div>
  );
};

export default MealsList;
