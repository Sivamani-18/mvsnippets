import * as vscode from 'vscode';
const cssSnippets = require('../snippets/csssnippets.json')
const htmlSnippets = require('../snippets/htmlsnippets.json')
const jsSnippets = require('../snippets/jssnippets.json')
const tsSnippets = require('../snippets/tssnippets.json')
const aposhtmlSnippets = require('../snippets/apostrophecms/html.json')
const aposmiscSnippets = require('../snippets/apostrophecms/misc.json')
const aposschemasSnippets = require('../snippets/apostrophecms/schemas.json')



type Snippet = {
	body: Array<string> | string
	description: string
	prefix: Array<string> | string
  }

  const convertSnippetArrayToString = (snippetArray: Array<string>): string =>
  snippetArray.join('\n')
  
export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "mvsnippets" is now active!');
	const {
	  commands: { registerCommand },
	  window: { showQuickPick, activeTextEditor },
	} = vscode
  
	const disposable = registerCommand('mvsnippets.dev', async () => {

	vscode.window.showInformationMessage('Hello World from mvsnippets!');
	  const cssscriptSnippets = Object.entries(cssSnippets as Array<Snippet>)
	  const htmlscriptSnippets = Object.entries(htmlSnippets as Array<Snippet>)
	  const javascriptSnippets = Object.entries(jsSnippets as Array<Snippet>)
	  const typescriptSnippets = Object.entries(tsSnippets as Array<Snippet>)
	  const aposhtml = Object.entries(aposhtmlSnippets as Array<Snippet>)
	  const aposmisc = Object.entries(aposmiscSnippets as Array<Snippet>)
	  const aposschemas = Object.entries(aposschemasSnippets as Array<Snippet>)

	  const snippetsArray: Array<[string, Snippet]> =
	  
		javascriptSnippets.concat(cssscriptSnippets, htmlscriptSnippets, javascriptSnippets, typescriptSnippets, aposhtml, aposmisc, aposschemas)
  
	  const items = snippetsArray.map(
		([shortDescription, { prefix, body, description }], index) => {
		  const value = typeof prefix === 'string' ? prefix : prefix[0]
  
		  return {
			id: index,
			description: description || shortDescription,
			label: value,
			value,
			body,
		  }
		}
	  )
  
	  const options = {
		matchOnDescription: true,
		matchOnDetail: true,
		placeHolder: 'Search snippet',
	  }
  
	  const snippet = (await showQuickPick(items, options)) || {
		body: '',
	  }
  
	  const body =
		typeof snippet.body === 'string'
		  ? snippet.body
		  : convertSnippetArrayToString(snippet.body)
  
	  if (activeTextEditor) {
		activeTextEditor.insertSnippet(new vscode.SnippetString(body))
	  }
	})
  
	context.subscriptions.push(disposable)
  }

// this method is called when your extension is deactivated
export function deactivate() {}
