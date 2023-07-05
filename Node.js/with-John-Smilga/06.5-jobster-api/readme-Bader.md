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
- 