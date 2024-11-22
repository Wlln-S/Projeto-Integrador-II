// Interação com a IA
document.getElementById("chat-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const userInput = document.getElementById("user-input").value;
    const messages = document.getElementById("messages");

    // Adiciona a mensagem do usuário
    const userMessage = document.createElement("div");
    userMessage.className = "user";
    userMessage.textContent = userInput;
    messages.appendChild(userMessage);

    // Limpa o campo de entrada
    document.getElementById("user-input").value = "";

    // Resposta simulada da IA
    const botMessage = document.createElement("div");
    botMessage.className = "bot";
    botMessage.textContent = "Resposta da IA: Vou analisar sua pergunta!";
    messages.appendChild(botMessage);

    // Rolagem automática
    messages.scrollTop = messages.scrollHeight;
});
