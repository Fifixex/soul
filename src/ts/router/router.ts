interface Route {
	path: string;
	component: string;
}

export class Router {
	private routes: Route[] = [];
	private root: HTMLElement;

	constructor() {
		this.root = document.querySelector<HTMLDivElement>('#app')!;
	}

	addRoute(route: Route) {
		this.routes.push(route);
		this.navigateTo(window.location.pathname);
	}

	navigateTo(path: string) {
		const route = this.routes.find(r => r.path === path);
		if (!route) return this.renderNotFound();
		this.root.innerHTML = route.component;
	}

	renderNotFound() {
		this.root.innerHTML = `<h1>404 - Page Not Found</h1>`;
	}

	goTo(path: string) {
		history.pushState({}, '', path);
		this.navigateTo(path);
	}
}
