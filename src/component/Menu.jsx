import Pizza from "./Pizza";

function Menu(props) {
	console.log(typeof props);
	console.log(props.pizzaData);
	const numPizzas = props.pizzaData.length;
	return (
		<main className="menu">
			<h2>Our Menu</h2>
			{/* ternary example */}

			{numPizzas > 0 ? (
				<ul className="pizzas">
					{props.pizzaData.map((pizza) => (
						<Pizza key={pizza.name} pizzaObj={pizza} />
					))}
				</ul>
			) : (
				<p>We are still working on our menu. Please come back later!</p>
			)}
		</main>
	);
}

export default Menu;
