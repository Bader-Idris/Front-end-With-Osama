# JWT => json web token basics
<!-- {id="target"} this id is as <a> in HTML -->

- some benefits of this project are the following:
  - - in prior projects, our routes were all public
  -  so we uses JWT here to restrict data access
  - - so, users can only access some routes when having privileges, if not, and try all day, they can't
  - - so we return an error to users says: `unauthorized` with `status(401)`
- for learning purposes we'll add our JWT `long encrypted string` into our localStorage as the value of a JSON
- this is a little simple JWT project, to get your foot in, because real projects are way more complex than it
- Just Remember: `IF A VALID TOKEN IS PRESENT IN THE REQUEST, THE USER CAN ACCESS SPECIFIC INFO`
- `YOU'RE THE ONLY ONE WHO SHOULD'VE ACCESS ALL THE INFO`
- we'll start after npm init with including our dependencies by installing packages and starting 
- `npm install && npm start`
- there're two new dependencies I see in `package.json` 1st: `"http-status-codes"`, 2nd: `"jsonwebtoken"`
- we'll use 2nd package in middleware DIR->auth.js File

## SETTING UP The two main routes

- we'll differentiate registering from login in in final projects


### postMan Requests

- we'll be sending GET to dashboard, and POST to login
- http's name's: `localhost:5000/api/v1/login` To POST, and `dashboard` for GET
- in POST req we'll use these mock data in Body->raw->json when sending it

```json
// we can access our form with any non-empty Uname && Passwd
{
  "username":"john",
  "password":"secret"
}
```

### JWT auth

- it's crafted by [Auth0](https://auth0.com/), so it's having awesome *`security features`*, and gets easier to authenticate Google and other platforms when learning it, instead of providing a random string
- check [its website at:](https://jwt.io)
- you can learn more from its introduction and its debugger
- check our [package here](https://www.npmjs.com/package/jsonwebtoken) to sign and decode our tokens

---

- it's important to read the [introduction](https://jwt.io/introduction) of jwt for best and crucial practices when using JWT authentication
- in front-end we check our token when accessed by getting our data sent inside Network=>headers=>Request headers=> authorization, `when clicking on dataSentName`
- that's because John set it in front-end as a req to app. go to browser-app File to see its construction
- in postMan=>GET req: we set headers variables manually for learning purposes, in future big projects there're easier ways
- Now: we'll use our created `Authorization` we set in Front-end to set some authorized users as Uname: john,Passwd:secret, we'll get jwt we got after sending Post req as login, to set it with Get dashboard req `Headers not params`

```json
"Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlcm5hbWUiOiJqb2huIiwiaWF0IjoxNjg4MjI1NDQ1LCJleHAiOjE2OTA4MTc0NDV9.M1Pg5cBuoKz51kI6dFF-ht4-V_VAWigTUeZGvGgg2HE"
```

- check `05:52:54` in the course `4 projects ...`, if you get confused
- we can log `req.headers` in the dashboard function in controllers
- we can set headers in same dashboard function to send same data as

```javascript
const authHeader = req.headers.authorization;
// to check if it's exists or not as
if(!authHeader || !authHeader.startsWith('Bearer')) {
  throw new CustomAPIError('No Token provided', 401)// that we created, 401 is the authentication error
  // the CustomAPIError is from 3rd project
}
// then set token var for what's after [bearer ] as
const token = authHeader.split(' ')[1];
// when looking into JWT docks, we see that they provide try&catch option as
try {
  const decoded = jwt.verify(token, process.env.JWT_SECRET)//their method's name's verify
  // our decoded token returns decoded jwt string
} catch (err) {//another customError
  throw new CustomAPIError('Not authorized to access this route', 401)
  // then we put luckyNumber into this try, not catch, to make it dynamic, look at controllers->main.js to see full-picture
}
```

- in real life projects we'll have multi-routes uses dashboard functionality
- so instead of repeating same coding we'll do: DRY, by making it as middleware named auth
- to handle errors we invoked them all inside index.js in their DIR, and modified them
- with the new used package `http-status-codes` it's easier to read and as objects, clicking space will appear tended status code to set, awesome to get to advanced LEVEL 🤪 I HATE BACKEND 🤪, well, John requires the package in BAD-request module
- 
