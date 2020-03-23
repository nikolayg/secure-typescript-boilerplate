# TypeScript Static Analysis Demo

This boilerplate demonstrates how to configure
static source code analysis for a TypeScript project.

This repository demonstrates the static analysis approaches described in [this post](https://nikgrozev.com/2020/03/22/improve-your-typescript-with-static-analysis/).

Supported commands:

```bash
# Runs jest tests
npm test

# Compiles the code
npm run build

# Runs ESLint analysis
npm run lint

# Automatically fixes ESLint violations
npm run lint-fix

# Checks for known dependency vulnerabilities
npm run audit-dependencies

# Start local SonarQube (requires docker)
# need to wait 1-2mins to start
# Visit http://localhost:9000. Use admin/admin to login
npm rum start-local-sonarqube

# Stops the local SonarQube
npm rum sop-local-sonarqube

# Run SonarQube analysis on a local instance (must be started)
npm run sonar

# Run analysis on a remote SonarQube
SONAR_SERVER="..." SONAR_TOKEN="..." npm run sonar
```
