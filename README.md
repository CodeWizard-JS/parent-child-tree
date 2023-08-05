# Parent Child tree view with React and NODE JS.
## Deployments and Glossories
 - The **[Live Demo](https://tree-view-front-end.vercel.app/ "Live Demo")** of the application is available.
 - Basic CRUD operations designed with **[REST APIs.](https://tree-view-api.vercel.app/ "REST APIs.")**
 - The Postman collection is also available in the repo.

#### Front-End:
 - React
 - Redux-Saga
 - Axios
 - MUI

#### Back-End:
 - JS
 - Express
 - pg (PgSQL)

------------
#### Note:
##### Back-End:
As the vercel deployment required some changes in the repo, the code need to be modified in order to run the local server.
Below files need to be modified: (for local)

`package.json`
```
  "main": "src/app.js",
  "scripts": {
    "start": "node src/app.js",
    "dev": "nodemon src/app.js"
  },
````


`src/app.js`
- Uncomment the app.listen code block.

Now we can start the app.

#### Front-End:
This is just a basic application. Could be improved design and functionality-wise a lot. UI partially tested for mobile responsiveness.
