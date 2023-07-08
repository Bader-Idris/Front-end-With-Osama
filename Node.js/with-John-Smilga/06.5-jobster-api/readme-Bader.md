# Full Project collecting all of what we learned

in this project we'll finally combine auth knowledge with CRUD functionality

- as a result: we'll have an API, when users login, and manage their job search
- we'll also learn how to deploy it to Heroku, hosting our app to cloud
- set up nice documentation
- Front-end isn't cared about here, it's only for decorating our API APP `Back-end`
- Its View is built-in React
- Dealing with URL is important to make project works
- saving passwords as bare string is horribly bad practice, in hour7 it was that simple, later John's gonna make it as JWT string
- check collections when creating mongodb user and jobs, in its website, and make sure you're connecting thy IP
- for passwords using JWT we'll use hash algorithm
- John uses `bcryptjs` package
- in front-end we can encode data before it's sent, reminds me of what Osama said before, in his jQuery projects
- John stops user from repeating his/her email address, but not the userName

---

- `mongoDB instance method` is another solution for `register functionality` check its route [here=>](https://mongoosejs.com/docs/guide.html#methods)

---

register controller is done, hashing passwd, setting up mongoose middleware, instance() on schema, after `07:33:35`

- to learn more about expiresIn in JWT [go to](https://www.npmjs.com/package/jsonwebtoken) then look for: `expiresIn`
- to generate good 🔴 `encryption key` 🔴 string John [uses:](https://allkeysgenerator.com), it's stopped, use others instead, check `256 bit one`; and stick it into your .env fire
- as `JTW_SECRET=blaBlaEncrypted`, and a second value is `JTW_LIFETIME=30d`
- because of similarity of bunch of _id  in big projects, John prefers using createdBy to stay clean, `🔴 IMPORTANT 🔴`
- in jobs, John made `{ timestamps: true }`, which is a time object used in `PG` and other `relational DBs`
- It took `1:50:XX` time from John to finish setting JWT jobs && users, ends in `08:20:33` of the course

## testing users dynamically instead of asking for token 🤚ly

- to test users without accessing token each time we go to our postMan, and **`login user`** that we set before, on the panel where `Body` exists, check `Tests` menu
- then the following

```js
// access the response if successful
const jsonData = pm.response.json()//pm => postman
// snippets aside of it, click on [Set a global variable]
// it'll pomp this code:
// pm.globals.set("variable_key", "variable_value")// we'll change it to
pm.globals.set("accessToken", jsonData.token)
// click on the eye: on the top right of the app, to see accessToken var after sending req

// I changed the var name to jsonData.user.token, because John changed the Object form, and put token key into user one as "user": {token: "our JWT"}
```

- then we  disable Authentication in `create job` req, or `get all jobs` one, -> go to the panel and choose `Authorization` beside `Headers`
- then we change its `Type` to what we used `Bearer Token`
- then pick up our new global Var named `{{accessToken}}` and send it, with its prior data: `"company"` & `"position"` keys

### deploying

- as we know: we need to set the ip => `access from anywhere` in mongoDB
- John uses heroku & digitalOcean, as hosting providers, but it's a personal preference, you can choose what you want| I'll compare them to Hostinger
- with heroku wee need to use `git shell`
- and it needs an account and `heroku CLI`
- `heroku CLI` is a deployment tool directly from our PC
- check heroku docks for the entire setup

Here are some common commands to utilize:

- init, commit
- after checking for the installation of heroku 
- we use common check command as `heroku -v`
- it's suggested using the deployed DIR as a separated one from edited one

check these steps

- access Documentations on the left bottom
- choose your Language -> Nodejs
- Deploying Node.js Apps on Heroku
- Declare app dependencies
[here](https://devcenter.heroku.com/articles/deploying-nodejs)
- set node version in the key named engines of package.json
- change the start command from nodemon to `node app.js`
- check out the procFile [here:](https://devcenter.heroku.com/articles/procfile)
- then John make this procfile values as: `web: node app.js`

---

Then cleaned the git command then the following:

- `rm -rf .git` for clearing
- `git init` => `git add .`
- `git commit -m "initial commit"`

Some Heroku commands

- `heroku login` -> continue login process
- `heroku create project-name` to create a new heroku application
- `git remove -v` to check if it's out of the stash stage or not

Sending secret .env values

- instead of spinning data by the command line
- `heroku config:set JWT_LIFETIME=30d` do it for each variable
- `git push heroku master` important to push, main/master is the name of your branch
- then we'll see dummy page instead of our project, we set our config vars by ...
- go to the settings page of your project in heroku, set all of your non-added .env variables
- then to refresh site click on `more` then `Restart All Dynos`
- you can see the option `view logs` in same `more` panel
- access that 🔴 `view logs`🔴 to see the port, was purple, in Johns video
- then it changed after the update,
- in postMan instead of removing our url var, we set the new `https://project-name.heroku.com/`, John made <= as {{PROD_URL}} `api/v1 <= as before`
- Heroku expects `process.env.POST` variable

Good api documentations

- one of the good to learn from api docs is [Swagger](https://swagger.io/)
- instead of utilizing the docs, John said this is a shortcut to save 3 hours, `to automate the process`
- and to keep the project on the cloud instead of local machine

---

- he stars by commanding this in git in selected DIR: `desktop heroku git:clone -a project-name` desktop is ie
- that's to be pushed to heroku, when making changes, as other git pushes
- to fix the lack of `.env` and `node_modules`, we'll go to the settings in the `config Vars` field, we'll `reveal Config Vars`
- then install packages.json
- make sure it starts with node app not nodemon, because you finished setting up the project, or set nodemon in dev dependencies

in postMan

- then make sure global vars are all same
- because if not you'll get weird unstable bugs
- postMan has its own api docs, but when when publishing, it'll send it to a separate file
- next John exported the requests for all 6th project, by clicking on the `...` button, then export, beside the name of the project, `to be on the same server`
- it'l totally free

3rd party api documentation

- we cannot pass postman docs directly into `swagger UI`, we need to format our data first
- so we'll use this third party; free as all used in 6thProject, John's no affiliation to them
- [APImatic Dashboard](https://apimatic.io/dashboard)
- upload/import postman docs json file
- John changed the name
- then in server Configurations section, he put the real project domain name,`heroku one` into the url of 1st server option, then added our route `api/v1` so it became as:
- `https://jobs-api-06.herokuapp.com/api/v1`
- then checked the authentication to be as we set, Oauth2.0 Bearer token
- then John checked the `Endpoints` to configure it with swagger ui options
- so `auth` route won't be under authentication, they're gonna be public
- so John clicked on `skip authentication` for that Group of route paths
- Auth dir has `Register, login user` reqs, to skip auth
- jobs route will be protected, in a separate DIR, as `jobs`
- if yr confused check course `09:45:15`
- then John got out of `Import API` DIR 🔴 to export API
- 🔴 Choose export Format,🔴 he used `openAPI v3.0 (YAML)` 🔴
- should be like as`09:46:57`, it's important for swagger ui
- then look for `swagger ui editor`, they use: `boilerplate code`
- for single job, update and delete, these are parameters, **search for** `Swagger ui parameters`
- to start testing our APIs we click on the tended Req, then `try it out` then `execute`
- for protected requests we go to the top of the page, then paste the token into `Authorize`

Adding tested Swagger to app on Server

- to do so, we'll need two packages:
  - - `"yamljs"`
  - - `"swagger-ui-express"` 🔴
- then beside `Procfile`, we'll create our file.yaml as `swagger.yaml`
- then we'll requrie our packages, and load the created `yaml` file; then pass it on to swagger-ui

```js
// Swagger
const swaggerUI = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
// then we use it above main path or directly underneath it, it's up to you
app.use('/api-docs', swaggerUI.server,swaggerUI.setup(swaggerDocument));
//John used it below it
// and he made a link to it from main page.textContent('Documentation')
```

- 🔴 now if you test it on your machine, it's not gonna work 🔴
- then we use git to add, commit -m, then push our changes
- done with this course, to continue John made next 4 projects only for paid plan

11:55 AM 7/8/2023
