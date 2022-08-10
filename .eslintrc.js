module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": false
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "linting-lightning"
    ],
    "rules": {
    }
}
