import Pizza from "./Pizza";

function Menu({ pizzas }) {
	return (
		<main className="menu">
			<h2>OUR MENU</h2>
			<div className="pizzas">
				{pizzas.map((pizza) => (
					<Pizza
						key={pizza.name}
						name={pizza.name}
						ingredient={pizza.ingredients}
						photoName={pizza.photoName}
						price={pizza.price}
					/>
				))}
			</div>
		</main>
	);
}

export default Menu;
