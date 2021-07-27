// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";
import { HelloWorldPanel } from "./HelloWorldPanel";

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "todos" is now active!');

  context.subscriptions.push(
    vscode.commands.registerCommand("todos.refresh", () => {
      HelloWorldPanel.kill();
      HelloWorldPanel.createOrShow(context.extensionUri);
      setTimeout(() => {
        vscode.commands.executeCommand(
          "workbench.action.webview.openDeveloperTools"
        );
      }, 500);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("todos.webview", () => {
      HelloWorldPanel.createOrShow(context.extensionUri);
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("todos.helloWorld", () => {
      vscode.window.showInformationMessage(
        "Hello World from Todos!",
        "Nice",
        "Boring"
      );
    })
  );
}

// this method is called when your extension is deactivated
export function deactivate() {}
