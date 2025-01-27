interface Route {
	path: string;
	component: Promise<string>;
}

export class Router {
	private routes: Route[] = [];
	private root: HTMLElement;

	constructor() {
		this.root = document.querySelector<HTMLDivElement>('#app')!;
	}

	async addRoute(route: Promise<Route>) {
		this.routes.push(await route);
		this.navigateTo(window.location.pathname);
	}

	async navigateTo(path: string) {
		const route = this.routes.find(r => r.path === path);
		if (!route) return this.renderNotFound();
		this.root.innerHTML = await route.component;
	}

	renderNotFound() {
		this.root.innerHTML = `<h1>404 - Page Not Found</h1>`;
	}

	goTo(path: string) {
		history.pushState({}, '', path);
		this.navigateTo(path);
	}
}
