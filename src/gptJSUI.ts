autowatch = 1;
outlets = 1;

let bgcolor: [number, number, number, number] = [0.1, 0.5, 0.5, 1]; // Default background color (RGBA values)

function paint(this: any) {
	// Set the background color
	mgraphics.set_source_rgba(bgcolor[0], bgcolor[1], bgcolor[2], bgcolor[3]);
	mgraphics.rectangle(0, 0, this.box.rect[2], this.box.rect[3]);
	mgraphics.fill();
}

function ondrag(x: number, y: number, button: number) {
	if (button === 1) {
		// Change the color when the button is clicked (left mouse button)
		bgcolor = [Math.random(), Math.random(), Math.random(), 1];
		// this.box.message("bang"); // Send a bang from the object outlet
		mgraphics.redraw(); // Trigger a repaint
	}
}

function bang() {
	// Output the current background color when a bang is received
	outlet(0, bgcolor);
}

function msg_int(value: number) {
	// Set a new background color when receiving an integer input (0-255)
	const normalizedValue = value / 255;
	bgcolor = [normalizedValue, normalizedValue, normalizedValue, 1];
	mgraphics.redraw();
}

let module = {};
export = {};
