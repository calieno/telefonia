yarn add -D typescript sucrase nodemon eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

echo '
        {
            "watch": ["src"],
            "ext": "ts",
            "execMap": {
                "ts": "sucrase-node src/server.ts"
            }
        }
    ' >> nodemon.json

# alterar o arquivo package.json incluindo a seguinte linha

#  "scripts": {
#    "dev": "nodemon src/server.ts",
#    "build": "sucrase ./src -d ./dist --transforms typescript,imports"
#  },

yarn eslint --init
    # To check syntax, find problems, and enforce code style
    # JavaScript modules (import/export)
    # None of these
    # Typescript YES
    # Browser
    # Use a popular
    # Standard
    # JavaScript
    # yarn

# Alterar o arquivo .eslintrc.js
echo '
    module.exports = {
    parser: "@typescript-eslint/parser",
    env: {
        browser: true,
        es2021: true,
    },
    plugins: ["@typescript-eslint"],
    extends: ["standard-with-typescript", "plugin:@typscript-eslint/recommended"],
    overrides: [],
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
    },
    rules: {},
    };
'>> .eslintrc.js


eslint-config-standard-with-typescript@latest
@typescript-eslint/eslint-plugin@latest
eslint@latest
eslint-plugin-import
eslint-plugin-n
eslint-plugin-promise
typescript@latest

    "eslint-config-standard-with-typescript": "^34.0.0",
    "eslint-plugin-import": "^2.25.2",
    "eslint-plugin-n": "^15.0.0",
    "eslint-plugin-promise": "^6.0.0",

yarn add -D prettier eslint-config-prettier eslint-plugin-prettier
