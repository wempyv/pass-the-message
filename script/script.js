const form = document.querySelector('.form')
const messageInput = document.querySelector('.message-input')
const messageOutput = document.querySelector('.messages')
const messageContainer= document.querySelector('.message-content')

form.addEventListener('submit', function (e) {
    e.preventDefault
    messageOutput.textContent = messageInput.value
    messageContainer.style.display = 'block';
})