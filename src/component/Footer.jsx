function Footer() {
	const hour = new Date().getHours();
	const openHour = 12;
	const closedHour = 22;
	const isOpen = hour >= openHour && hour <= closedHour;
	console.log(isOpen, hour);
	return (
		<footer className="footer">
			<div className="order">
				{isOpen && (
					<>
						<p>We are Open Until</p>
						{new Date().toLocaleTimeString()} We are currently Open
					</>
				)}
				<button className="btn">Order</button>
			</div>
		</footer>
	);
}

export default Footer;
