# Inner Loop Netlify Template
Open the folder, start typing HTML, CSS, TypeScript. Debugging & Auto-reload, all
right from [VS Code](https://code.visualstudio.com).

Just clone this repo, or download  it's contents, NPM install, and off you go!
You'll find the outputs in `output`, which you can do whatever you want with.

# Instructions
This is a **template** repo, so you should use GitHub's [instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template).
tl;dr: Click 'Use This Template' button at the top of the repository, and follow
the instructions.

## Post-Clone
1. Install node & npm
2. `npm install`
3. Follow Netlify's [instructions](https://cli.netlify.com/getting-started)

## VS Code
1. Open the folder in VS Code
2. Open the command palette (`⌘⇧P` - Mac, `Ctrl+Shift+P` - Windows) and run "Tasks:
Manage Automatic Tasks In Folder" (`workbench.action.tasks.manageAutomaticRunning`)
3. Reload (`⌘R` - Mac, `Ctrl+R`)

To debug, just press `F5` or `Run/Start Debugging` from the menu.
Or open your browser at [http://localhost:8888](http://locahost:8888).


## Other
1. Open two new terminals
2. Run `npm run watch-all` in the first
3. Run `npm run serve` in the second
4. Open the folder in your chosen editor tool chain

# Commands
There are a number of `npm` commands that can be run to build, run, compile etc.

|        Command       |                          Purpose                      |
|----------------------|-------------------------------------------------------|
| `build`              | Compiles the TypeScript, copies dependencies to `output` |
| `compile`            | Compiles the TypeScript to `output`                   |
| `clean`              | Clears `output` by deleting it                        |
| `copy-dependencies`  | Copies just the non-TypeScript files to `output`       |
| `serve`              | Starts a server for the contents in `output`; watches for changes to reload the browser |
| `watch-all`          | Starts watching for changes in both dependencies & TypeScript, copying/compiling into `output` when things change |
| `watch-compile`      | Starts watching for only TypeScript changes           |
| `watch-dependencies` | Starts watching for non-TypeScript changes            |

# FAQ
## Where do I browse to see my site?
[http://localhost:8888](http://locahost:8888)! Thats on your local computer. If
you want to see it on the internet, try something like [Netlify](https://netlify.com).

## I have a different build tool/option/pattern/setting  -- can I use that?
Sure, follow whatever you need. You're free to do whatever you need, this is
your repo now!
