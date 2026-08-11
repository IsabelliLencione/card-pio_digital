// ============================================================
// script.js
// Interação mínima do cardápio.
//
// O objetivo NÃO é construir um carrinho real.
// Apenas queremos deixar claro que esta página já era uma
// aplicação web funcional antes da configuração do PWA.
// ============================================================

const cartCount = document.querySelector("#cart-count");
const addButtons = document.querySelectorAll(".add-button");

let totalItems = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    totalItems++;
    cartCount.textContent = totalItems;

    // Feedback visual temporário no próprio botão.
    const originalText = button.textContent;

    button.textContent = "Adicionado!";
    button.disabled = true;

    setTimeout(() => {
      button.textContent = originalText;
      button.disabled = false;
    }, 700);
  });
});
