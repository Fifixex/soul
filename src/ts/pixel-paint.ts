//@ts-nocheck
function getRandom(min, max) {
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

	paint(ctx, bounds, props) {
		const colors = props
			.getAll('--pixel-paint-colors')
			.map(color => color.toString());
		const gap = props.get('--pixel-paint-gap').value;

		for (let x = 0; x < bounds.width; x += gap) {
			for (let y = 0; y < bounds.height; y += gap) {
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
