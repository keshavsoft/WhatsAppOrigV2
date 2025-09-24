let StartFunc = ({ inData }) => {
    const tbody = document.querySelector("#active-convos-list");
if (tbody) tbody.innerHTML = "";
//changes
// Get your own WebSocket ID once
let jVarLocalUserNameId = document.getElementById('UserNameId');
const jVarLocalWebSocketId = jVarLocalUserNameId.dataset.webSocketId;

inData.forEach((element) => {
    // Skip adding your own profile
    if (element.id === jVarLocalWebSocketId) {
        // Optionally, set your own name in input
        jFLocalToInputUserNameId(element.Name);
        return; // Skip the rest
    }
    else{
    jFLocalAddToDom({
        inName: element.Name,
        inId: element.id,
    });
    }
});

};

let jFLocalToInputUserNameId = (inValue) => {
    let jVarLocalHtmlId = 'UserNameId';
    let jVarLocalUserNameId = document.getElementById(jVarLocalHtmlId);

    if (jVarLocalUserNameId === null === false) {
        jVarLocalUserNameId.innerHTML = inValue;
    };
};

const jFLocalAddToDom = ({ inName, inId }) => {
    const conversationList = document.getElementById("active-convos-list");
    const conversationTemplate = document.getElementById("convo-template");

    const randomName = inName;
//console.log(inName);
    // Clone the template for a new conversation
    const newConvo = conversationTemplate.content.cloneNode(true);
    // Set the name and initial
    newConvo.querySelector(".convo-name").textContent = randomName;
    newConvo.querySelector(".convo-initial").textContent = randomName
        .charAt(0)
        .toUpperCase();

    // newConvo.querySelector("button").dataset.websocketid = inId;
    const button = newConvo.querySelector("button");
    button.dataset.websocketid = inId;

    // When clicked, store selected user ID
    button.addEventListener("click", (event) => {
        const selectedId = event.currentTarget.dataset.websocketid;
        document.getElementById("SelectedUserId").value = selectedId;
        console.log("Selected User ID:", selectedId);
    });

    // Add the new conversation to the list
    conversationList.appendChild(newConvo);
};

export { StartFunc };
