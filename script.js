document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("resolve-button");
    button.addEventListener("click", () => {
      alert("Just kidding! It's a prank 😄");
    });
  
    setTimeout(() => {
      alert("Critical Warning: Immediate action is required!");
    }, 3000);
  });
  