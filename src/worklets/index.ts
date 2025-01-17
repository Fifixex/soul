import pixelPaint from './pixel-paint.ts?worker&url';

if ('paintWorklet' in CSS) {
	//@ts-ignore
	CSS.paintWorklet.addModule(pixelPaint);
}
