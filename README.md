# CVWO Assignment Sample React App
**Modified extensively by me**

There are a few pages in this React app.

## Getting Started

### Running the app
1. [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository) this repo.
2. [Clone](https://docs.github.com/en/get-started/quickstart/fork-a-repo#cloning-your-forked-repository) **your** forked repo.
3. Open your terminal and navigate to the directory containing your cloned project.
4. Install dependencies for the project by entering this command:
```bash
yarn install
```
5. Run the app in development mode by entering this command:
```bash
yarn start
```
6. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
7. You should see a page like this.
![Basic Page](public/images/BasicPage.png)

### Navigating the code
This is the main file structure
```
.
├── node_modules
├── public
├── src
├── README.md
├── tsconfig.json
├── package.json
└── yarn.lock
```

Main directories/files to note:
* `src` usually includes all your source code. That is where most of your functional code will be.
* `README.md` is a form of documentation about the project. It is what you are reading right now.
* `package.json` contains important metadata, for example, the dependencies and available scripts in the project.

Try changing some source code and see how the app changes.

## Additional Notes

* This project uses [Typescript](https://www.typescriptlang.org/).
* The available scripts are in `package.json`.
  Here are some scripts that you are likely to use more often:
  * `yarn start`
  * `yarn lint:fix`
  * `yarn format:fix`

## Acknowledgements
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project uses [MUI](https://mui.com/), 
[TypewriterJS](https://github.com/tameemsafi/typewriterjs#readme), 
[ESLint](https://eslint.org/), [Prettier](https://prettier.io/).

## Developer notes
I use the `.postcssrc` file to  configure PostCSS, which gives us access to the latest CSS features like CSS nesting.
CSS nesting is another way of writing CSS selectors, in a more readable manner (by enclosing a selector inside another selector).
[CSS Nesting](https://blog.logrocket.com/native-css-nesting/)

I use ESLint and Prettier, with the config files in `.eslintrc.json` and `.prettier.json`. They are used together with 
webstorm integration.

## Common errors encountered while coding
- Missing in [props validation](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/docs/rules/prop-types.md):
You can fix this by providing the types statically using TypeScript using either `type` or `interface`. 
_Interface is extendable but type is simply an alias._ 

- Invalid configuration file `src\App.tsx`: JSON Error in `\sample-react-app\.prettierrc.json`. This occurs because 
you use the IDE to create the file, and it is not strictly UTF-8 characters. Use VS code to create the file instead.
[Link](https://stackoverflow.com/questions/70387394/prettier-invalid-configuration-file-even-though-the-file-is-straight-from-the-d)
