import { codeToHtml } from 'shiki';
import { API_URL } from '../config';

type Snippet = {
	code: string;
	lang: string;
};

const createCode = async (code: string, lang: string) =>
	await codeToHtml(code, { lang, theme: 'dark-plus' });

const getSnippets = async (limit: number, lang: string) => {
	const response = await fetch(
		`${API_URL}/snippets?limit=${limit}&lang=${lang}`,
	);
	const data = await response.json();
	return data.snippets as Snippet[];
};

export const Explore = async () => {
	const params = new URLSearchParams(window.location.search);
	const limit = parseInt(params.get('limit') || '10');
	const lang = params.get('lang') || 'javascript';

	const snippets = await getSnippets(limit, lang);
	return `
    <div>
        <h1>Explore</h1>
        <p>Discover and share code snippets across various languages and use cases.</p>

        <div class="snippets">
            <div class="snippet">
                ${await Promise.all(snippets.map(async ({ code, lang }) => await createCode(code, lang)))}
            </div>
            <div class="snippet">
                ${await Promise.all(snippets.map(async ({ code, lang }) => await createCode(code, lang)))}
            </div>
        </div>
    </div>
    `;
};
