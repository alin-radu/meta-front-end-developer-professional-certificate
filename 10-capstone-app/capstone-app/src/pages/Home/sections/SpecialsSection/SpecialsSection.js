import { BasicButton } from 'components/UI/buttons/BasicButton/BasicButton';

import GreekSalad from 'assets/images/greek-salad.webp';
import Bruschetta from 'assets/images/bruchetta.webp';
import LemonDessert from 'assets/images/lemon-dessert.webp';

import styles from './SpecialsSection.module.scss';
import FoodCard from 'components/cards/FoodCard/FoodCard';

const data = [
  {
    img: GreekSalad,
    title: 'Greek Salad',
    price: 12.99,
    description:
      'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.',
  },
  {
    img: Bruschetta,
    title: 'Bruschetta',
    price: 5.99,
    description:
      'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
  },
  {
    img: LemonDessert,
    title: 'Lemon Dessert',
    price: 5.0,
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

const FoodCards = () =>
  data.map((item, idx) => (
    <FoodCard
      key={idx}
      cardIdx={idx}
      img={item.img}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  ));

export const SpecialsSection = () => {
  return (
    <section className={styles['section-container']}>
      <div className={styles['section-header']}>
        <h2>This weeks specials!</h2>
        <BasicButton type="btn-primary" linkTo="/online-menu">
          Online Menu
        </BasicButton>
      </div>
      <div className={styles['section-content']}>
        <FoodCards />
      </div>
    </section>
  );
};
