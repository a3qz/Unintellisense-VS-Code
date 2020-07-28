// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {adjectives, nouns} from './words';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export async function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "unintellisense" is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json
	let disposable = vscode.commands.registerTextEditorCommand('unintellisense.randomVariableName', (textEditor: vscode.TextEditor, edit: vscode.TextEditorEdit, ...args: any[]) => {
		console.log(context.globalStoragePath);
		try{
			var adjective: string = adjectives[Math.floor(Math.random() * (adjectives.length - 0 + 1) + 0)];
			var noun: string = nouns[Math.floor(Math.random() * (nouns.length - 0 + 1) + 0)];
			
		edit.insert(textEditor.selection.active, adjective + noun.replace(/^\w/, (c: string) => c.toUpperCase()))
		} catch (x){
			console.log(x);
		}

		
	});
	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

