# webpack-ts-loader-issue

- `npm i`
- `npx webpack watch`
  - compilation succeeds
- edit `src/index.ts` to uncomment out the trailing `{` and save
- notice `npx webpack watch` runs again _and compilation still succeeds_
- stop `npx webpack watch`
- run `npx webpack watch` again and notice that an error now appears
