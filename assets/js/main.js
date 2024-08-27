const apiUrl = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='

const qrContainer = document.querySelector('.image-container')
const input = document.querySelector('.input-url')
const qrImage = document.querySelector('.qr-image')

function createQr() {
	qrImage.src = apiUrl + input.value
	console.log(qrImage)
	qrContainer.style.display = 'flex'
}

const button = document.querySelector('.button')

button.addEventListener('click', function () {
	createQr()
})

input.addEventListener('keypress', function (e) {
	if (e.key == 'Enter') createQr()
})
