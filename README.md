# Usage

##### Before running the test for the first time, install node.js(only once).
1. Install dependencies:
```bash
npm install 
```
2. How run 
 ```bash
npx playwright test
```
3.
```bash
## npx playwright test --browser=firefox --headed
```


# REPORT

# Install
npm i -D allure-playwright

# Run tests
npx playwright test --reporter=line,allure-playwright

# Generate report
allure generate ./allure-results --clean && allure open ./allure-report
