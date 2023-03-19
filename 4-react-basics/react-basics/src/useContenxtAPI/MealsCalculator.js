import MealsProvider from './MealsProvider';

import MealsList from './MealsList';
import Counter from './Counter';

const MealsCalculator = () => (
  <div>
    <MealsProvider>
      <MealsList />
      <Counter />
    </MealsProvider>
  </div>
);

export default MealsCalculator;