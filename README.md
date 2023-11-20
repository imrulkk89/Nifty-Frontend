# Simple Web Application Frontend using React.js for AWS Lambda and DynamoDB

**Description**: Simple frontend of this [backend](https://github.com/imrulkk89/Nifty-Lambda)

# Setup Guid
**Running in local machine**
1. Create `.env` file in root folder and add following.

```env
    REACT_APP_URL = <API GATEWAY URL OF BACKEND>    
```
3. **Run**: `yarn install`
4. **Run**: `yarn start`

# Deploy
This **ReactJs** application is deployed in **Github Pages**.

1. Add `"homepage": "https://imrulkk89.github.io/nifty-frontend",` at the top of `package.json`.
2. **Run**: `yarn install` (if not run previously)
3. **Run**: `yarn deploy`

**UI** can be accessible from [https://imrulkk89.github.io/nifty-frontend](https://imrulkk89.github.io/nifty-frontend)