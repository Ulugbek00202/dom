const colorRed = document.querySelectorAll('.red')
const body = document.querySelector('.wrapper')

colorRed.forEach(red => {
	red.addEventListener('click', () => {
		body.style = 'background: red;'
	})
})

const colorYellow = document.querySelectorAll('.yellow')

colorYellow.forEach(yellow => {
	yellow.addEventListener('click', () => {
		body.style = 'background: yellow;'
	})
})

const colorBlue = document.querySelectorAll('.blue')

colorBlue.forEach(blue => {
	blue.addEventListener('click', () => {
		body.style = 'background: blue;'
	})
})

const colorBlack = document.querySelectorAll('.black')

colorBlack.forEach(black => {
	black.addEventListener('click', () => {
		body.style = 'background: black;'
	})
})

const delet = document.querySelectorAll('.otmen')

delet.forEach(otmen => {
	otmen.addEventListener('click', () => {
		body.style = 'background: #fff;'
	})
})
