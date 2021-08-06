# ers-css-lec

part of Easy Responsiveness Series™: responsive sizes in CSS using linear equations

## SLIGHTLY LESS WIP

## Compiling TypeScript

The TypeScript files used here have been written such that the output JavaScript files are as human readable as possible for editing and compliant with `import` syntax.

To begin, run `npm i` to gather all dependencies, after the download has finished you will be able to use the 3 compiler commands in `package.json` :

- `$ npm run build-ts`

  > Compile all Typescript files from `src/` to JavaScript in `build/` . (actual command: `tsc` )

- `$ npm run build-src`

  > Compile all Typescript and JavaScript files from `src/` to JavaScript in `build/` . (actual command: `tsc --allowjs true` )

- `$ npm run bundle`

  > Compile all Typescript and JavaScript files from `src/` to a single `bundle.js` . (actual command: `tsc --allowjs true --outfile bundle.js` )

## Importing from TypeScript

To import an exported member from a TypeScript file, the syntax is the same as from a JavaScript file;

```JS
import * as foo from "foo.js";
import { bar } from "foo.js";
```

In both cases, `foo.js` references the outFile of `foo.ts`, and in VSCode any 'view definition' will go to the definition in `foo.ts` making production seamless.
