document.querySelectorAll(".copiable").forEach(element => {
  element.outerHTML = `
  <input type="text" value="${element.innerText}" onclick="this.select();" size="65" readonly>
  <button onclick="this.previousElementSibling.select(); document.execCommand('copy'); this.innerText = 'Done';">Copy</button>
`;
});
