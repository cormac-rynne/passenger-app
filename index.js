let countEl = document.getElementById('count')
let prevEl = document.getElementById('prev')
let counter = 0;

function increment() {
	counter = counter + 1;
	update_counter(counter)
};

function save() {
	if (prevEl.textContent) {
		prevEl.textContent += ', ' + counter
	}
	else {
		prevEl.textContent = 'Previous entries = '+ counter
	}

	counter=0
	update_counter(counter)
};

function update_counter(counter) {
	countEl.textContent = counter
};