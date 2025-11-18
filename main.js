const getForm = document.querySelector("#form");

// funcao que renderiza o resultado
function renderFeedback() {
  const getFeedbackArea = document.querySelector(".feedback");
  const p = document.createElement("p");
  p.classList.add("feedback-text");
  p.innerHTML = `Email enviado com sucesso!`;
  getFeedbackArea.appendChild(p);
}

function clearFeedback() {
  const getFeedbackArea = document.querySelector(".feedback");
  getFeedbackArea.innerHTML = "";
}
// metodo que escuta o evento
getForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const getEmail = e.target.querySelector("#email-input").value;
  const getMenssage = e.target.querySelector("#text-input").value;

  const dadosContato = {
    email: getEmail,
    mensagem: getMenssage,
  };

  console.log(`email: ${dadosContato.email}`);
  console.log(`mensagem: ${dadosContato.mensagem}`);
  renderFeedback();
  getForm.reset();

  setTimeout(() => {
    clearFeedback();
  }, 5000);
});
