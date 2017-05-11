[![npm version](https://badge.fury.io/js/eslint-config-tictail.svg)](https://badge.fury.io/js/eslint-config-tictail)

# Tictail eslint config

This is the eslint config we use at Tictail. It's a pretty nice setup for React based applications. Under the hood is uses [prettier](https://github.com/prettier/prettier) via [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier), [eslint-plugin-jsx-a11y](https://github.com/evcohen/eslint-plugin-jsx-a11y), [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react), [eslint-plugin-jest](https://github.com/facebook/jest/tree/master/packages/eslint-plugin-jest) & [eslint-plugin-import](https://github.com/benmosher/eslint-plugin-import).

Usage:


Install:
```
npm i eslint-config-tictail -D
```

Add the following to your .eslintrc:
```
{
  extends: "tictail",
}
```
