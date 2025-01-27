import { createRoute } from './route';
import { Router } from './router';
import { Index, Contact, Explore } from '../pages';
const indexRoute = createRoute('/')({ component: Index });
const contactRoute = createRoute('/contact')({ component: Contact });
const exploreRoute = createRoute('/explore')({ component: Explore });

const router = new Router();
router.addRoute(indexRoute);
router.addRoute(contactRoute);
router.addRoute(exploreRoute);

document.addEventListener('click', event => {
	const target = event.target as HTMLAnchorElement;
	if (target?.href && target.dataset.link === 'true') {
		event.preventDefault();
		router.goTo(target.href);
	}
});
