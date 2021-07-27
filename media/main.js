// This script will run within the webview itself
// It cannot access the main VS Code APIs directly

(function () {
  const vscode = acquireVsCodeApi();

  const button = document.getElementById("btn");

  const handleClick = () => {
    button.innerText = "I was clicked";
  };

  button.addEventListener("click", handleClick);
})();
