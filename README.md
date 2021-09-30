# How install

## npm i 

# How run 
## npx playwright test##


## npx playwright test --browser=firefox --headed

REPORT

# Install
npm i -D allure-playwright

# Run tests
npx playwright test --reporter=line,allure-playwright

# Generate report
allure generate ./allure-results --clean && allure open ./allure-report