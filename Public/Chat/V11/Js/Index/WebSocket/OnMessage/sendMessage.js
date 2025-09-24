    let StartFunc = ({ inDataToSend, inDataType, fromUser }) => {
    // Convert to JSON if needed
    let dataToSend = inDataType ? JSON.stringify(inDataToSend) : inDataToSend;

    // Display outgoing message locally
    addOutMessage(
        typeof inDataToSend === "object" ? inDataToSend.Message : inDataToSend,
        fromUser ? fromUser.charAt(0).toUpperCase() : "B"
    );

    // Send via WebSocket
    webSocket.send(dataToSend);
};

// Outgoing message function
function addOutMessage(messageText, avatar = "B") {
    const chatContainer = document.getElementById("ChatContentId");
    const template = document.querySelector("#OutMessageId"); // Separate template for outgoing
    const messageElement = template.content.cloneNode(true);
    messageElement.querySelector(".chat-message").textContent = messageText;
    messageElement.querySelector(".message-avatar").textContent = avatar;

    chatContainer.appendChild(messageElement);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}


    export { StartFunc };