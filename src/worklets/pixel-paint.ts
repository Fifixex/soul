function getRandom(min: number, max: number) {
	return Math.random() * (max - min) + min;
}

class PixelPaint {
	static get inputProperties() {
		return [
			'--pixel-paint-colors',
			'--pixel-paint-gap',
			'--pixel-paint-progress',
		];
	}

	paint(ctx: CanvasRenderingContext2D, geom: DOMRect, props: any) {
		const colors = props
			.getAll('--pixel-paint-colors')
			.map((color: number) => color.toString());
		const gap = props.get('--pixel-paint-gap').value;

		for (let x = 0; x < geom.width; x += gap) {
			for (let y = 0; y < geom.height; y += gap) {
				const color = colors[Math.floor(Math.random() * colors.length)];
				const size = getRandom(1, 2);

				ctx.fillStyle = color;
				ctx.fillRect(x, y, size, size);
			}
		}
	}
}

if (typeof registerPaint !== 'undefined') {
	registerPaint('pixel-paint', PixelPaint);
}
