class Route {
	private path: string;

	constructor(path: string) {
		this.path = path;
	}

	createRoute = ({ component }: { component: () => string }) => {
		return {
			path: this.path,
			component: component(),
		};
	};
}

export function createRoute(path: string) {
	return new Route(path).createRoute;
}
