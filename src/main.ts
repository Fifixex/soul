import './css/style.css';
import { setupModal } from './ts/modal.ts';

(window as any).CSS.paintWorklet.addModule('/src/ts/pixel-paint.ts');

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <main>
    <h1>
        <span>Welcome</span>
        <span>Happy</span>
        <span>coding!</span>
    </h1>
    <p>A web application designed for sharing and discovering programming code snippets across various languages and use cases.</p>
  </main>
  <div class="wrap">
    <button id="started" type="button">Get Started</button>
  </div>
`;

setupModal(document.querySelector<HTMLButtonElement>('#started')!);
