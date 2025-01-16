interface CSSPaintWorklet {
	paint(
		ctx: CanvasRenderingContext2D,
		geometry: DOMRect,
		properties: any,
	): void;
}

declare function registerPaint(
	name: string,
	module: new () => CSSPaintWorklet,
): void;
