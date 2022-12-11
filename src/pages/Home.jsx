import React from 'react'

import Categories from '../components/Categories.jsx';
import Sort from '../components/Sort.jsx';
import PizzaBlock from '../components/PizzaBlock/index.jsx';
import Skeleton from '../components/PizzaBlock/Skeleton.jsx';

const Home = () => {
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    fetch('https://639154880bf398c73a9f2cbc.mockapi.io/items')
      .then((res) => res.json())
      .then((res) => {
        setPizzas(res);
        setIsLoading(false);
      });
  }, []);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((item, i) => <Skeleton key={i} />)
          : pizzas.map((item) => (
            <PizzaBlock
              key={item.id}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              sizes={item.sizes}
              types={item.types}
            />
          ))}
      </div>
    </>
  )
}
export default Home