module.exports = {
  plugins: ['import'],
  settings: {
    'import/ignore': ['.json$', '.scss$', '.css$', 'node_modules'],
  },
  rules: {
    'import/named': 1,
    'import/namespace': 1,
    'import/default': 1,
    'import/export': 1,
    'import/imports-first': 1,
    'import/no-mutable-exports': 1,
    'import/no-named-as-default-member': 1,
  },
}
