document.addEventListener('DOMContentLoaded', function () {
    // Initial message from the chatbot
    appendMessage("Chatbot", "Hello! I'm your chatbot. Ask me anything.");
});

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value;

    if (message.trim() === "") return;

    // Append user's message to the chat box
    appendMessage("You", message);

    // Get the chatbot's response (you can replace this with more sophisticated logic)
    const response = getChatbotResponse(message);

    // Append chatbot's response to the chat box
    appendMessage("Chatbot", response);

    // Clear the user input field
    userInput.value = '';
}

function appendMessage(sender, message) {
    const chatBox = document.getElementById('chatBox');
    const messageDiv = document.createElement('div');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatBox.appendChild(messageDiv);

    // Scroll to the bottom to show the latest message
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getChatbotResponse(userMessage) {
    // Replace this with more sophisticated logic or connect to an API
    const responses = {
        "hello": "Hi there!",
        "how are you": "I'm just a chatbot, but thanks for asking!",
        "bye": "Goodbye! Feel free to come back anytime."
    };

    const lowerCaseMessage = userMessage.toLowerCase();
    return responses[lowerCaseMessage] || "I'm sorry, I don't understand that.";
}
let darkMode = false;

function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
    darkMode = !darkMode;
}

function sendMessage() {
    const userInput = document.getElementById('userInput');
    const message = userInput.value;

    if (message.trim() === '') return;

    const chatBox = document.getElementById('chatBox');
    const newMessage = document.createElement('div');
    newMessage.innerText = message;
    chatBox.appendChild(newMessage);

    userInput.value = '';
}
// Add these scripts to your existing script.js file

function sendMessage() {
    var userInput = document.getElementById("userInput").value;
    var chatBox = document.getElementById("chatBox");

    if (userInput.trim() === "") return;

    var userMessage = document.createElement("div");
    userMessage.className = "message user-message";
    userMessage.innerText = userInput;

    chatBox.appendChild(userMessage);
    document.getElementById("userInput").value = "";

    // Simulate bot response (replace with actual logic)
    setTimeout(function() {
        var botMessage = document.createElement("div");
        botMessage.className = "message bot-message";
        botMessage.innerText = "I'm just a simple bot. I don't understand that.";

        chatBox.appendChild(botMessage);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

