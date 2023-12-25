const ItemList = ({ menuItems }) => {
  // console.log(menuItems);

  const items =
    menuItems?.card?.card?.itemCards ||
    menuItems?.card?.card?.categories.map((cat) => cat?.itemCards).flat(1);
  console.log(items);

  return items.map((item) => {
    const { name, price, defaultPrice, id } = item?.card?.info;

    return (
      <div className="itemList" key={id}>
        <h3 className="dishName">{name}</h3>
        <h3 className="dishPrice">{(price || defaultPrice) / 100} /-</h3>
      </div>
    );
  });
};

export default ItemList;
