# TypeScript

> JavaScript? TypeScript? It's just so much better.

An introduction to TypeScript: static types, interfaces, classes, the DOM,
namespaces, declaration merging, ambient declarations for untyped third-party
libraries, and nominal typing through the brand convention.

## Learning objectives

- Basic types in TypeScript
- Interfaces, classes and functions
- Working with the DOM and TypeScript
- Generic types
- Using namespaces
- Merging declarations
- Using an ambient namespace to import an external library
- Basic nominal typing with TypeScript

## Requirements

- All files end with a new line
- All files are transpiled on Ubuntu 18.04
- Code uses the `.ts` extension wherever possible
- The TypeScript compiler shows no warning or error

## Setup

Each task directory is self-contained. From inside one of them:

```bash
npm install       # install the toolchain
npm run build     # transpile with webpack — should report "No type errors found"
npm run start-dev # serve on http://localhost:8080
```

`task_4` has no webpack step; it compiles straight to `public/main.js` with `npm run build` (`tsc`).

## Tasks

| Directory | Task | What it covers |
| --- | --- | --- |
| `task_0` | 0. Creating an interface for a student | A `Student` interface, a `studentsList` array, and a table rendered into the DOM with vanilla JavaScript. |
| `task_1` | 1. Let's build a Teacher interface | A `Teacher` interface with `readonly` fields, an optional field, and an index signature accepting any extra attribute. |
| `task_1` | 2. Extending the Teacher class | A `Directors` interface extending `Teacher` with `numberOfReports`. |
| `task_1` | 3. Printing teachers | `printTeacher`, described by the `printTeacherFunction` interface. |
| `task_1` | 4. Writing a class | `StudentClass`, described by `StudentClassInterface`, with its constructor described by `StudentConstructor`. |
| `task_2` | 5. Advanced types Part 1 | `Director` and `Teacher` classes behind their interfaces, plus a `createEmployee` factory returning a union type. |
| `task_2` | 6. Creating functions specific to employees | `isDirector` as a type predicate, narrowing the union inside `executeWork`. |
| `task_2` | 7. String literal types | The `Subjects` string literal type and `teachClass`. |
| `task_3` | 8. Ambient namespaces | `crud.d.ts` declares types for the untyped `crud.js` library; `main.ts` pulls them in with a triple-slash directive. |
| `task_4` | 9. Namespace & declaration merging | The `Subjects` namespace split across files, with each subject merging a new optional field into the shared `Teacher` interface. |
| `task_4` | 10. Update task_4/js/main.ts | Wiring the `Cpp`, `Java` and `React` subjects to a single teacher. |
| `task_5` | 11. Brand convention & nominal typing | `MajorCredits` and `MinorCredits` made mutually incompatible by a brand property. |

## Author

Victor
