export * from './contact';
export * from './explore';

export const Index = async () => `
    <main>
        <h1>
            <span>Welcome</span>
            <span>Happy</span>
            <span>coding!</span>
        </h1>
        <p>
        A web application designed for sharing and discovering <br>
        programming code snippets across various languages and use cases.
        </p>
    </main>
    <div class="wrap">
        <button id="started" type="button">Get Started</button>
    </div>
`;
