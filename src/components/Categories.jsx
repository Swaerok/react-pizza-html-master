import React from 'react';
function Categories() {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const [activeIndex, setActiveIndex] = React.useState(0)
  const onClickCategory = (index) => {
    setActiveIndex(index)
  }
  return (
    <div className="categories">
      <ul>
        {categories.map((item, index) =>
          <li key={index} onClick={() =>
            onClickCategory(index)} className={index === activeIndex ? 'active' : ''}>{item}
          </li>
        )}
      </ul>
    </div>
  );
}

export default Categories