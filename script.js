const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');
let i = 0;

btn.addEventListener('click', (e) => {
	if (input.value === '') return;
	i++;
	createDeleteElements(input.value);
	input.value = '';
})

input.addEventListener('keydown', (e) => {
	if (input.value === '') return;
	if (e.keyCode === 13) {
		i++;
		createDeleteElements(input.value);
		input.value = '';
	}
})


function createDeleteElements(value) {
	console.log(value)

	const li = document.createElement('li')
	const btn = document.createElement('button')

	li.className = 'li'
	li.textContent = value

	btn.className = 'btn'
	btn.textContent = 'delete'
	li.appendChild(btn)

	btn.addEventListener('click', (e) => {
		i--
		total.innerText = i
		result.removeChild(li)
	})

	li.addEventListener('click', (e) => {
		li.classList.toggle('li-active')
	})

	total.innerText = i

	result.appendChild(li)
}
