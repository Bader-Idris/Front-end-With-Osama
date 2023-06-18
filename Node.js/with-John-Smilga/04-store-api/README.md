# STORE API PROJECT

## in this project John will teach us the following:

- The advance filtering
- sorting
- dynamically pipelining our database

---

- John didn't create Front side of this for time saving

---

### Project Idea

- imagine we're in charge of store API, and we wanna provide punch of search options for our users
- Every Thing starting by: search by name to filtering based on price amount

### Where did John got the idea from:

- He got it from the search hacker News api
[check it here](https://hn.algolia.com/api)
- because they offer quite a few search options for data user

- he'll mimic the major ones, not all of them
- his react store project does the front side of it
- the front-end only make the http call, and the backend does `the heavy lifting`

#### express-async-errors package

- this package provides same async wrapper we used in previous project
- it's on behalf of using try&catch with each request
- all of what we do with it is installing it and provoking it in app.js
- previously we was wrapping every request, you can go and see 03rd project, and with that, we were making every req as async inside of the fn

---

- after we set our dynamic product file in populate.js, we invoke it to our DB by simply run it once
- keep in mind that process.env.OUR_VAR is important to be brought from mongoDB, and IP to be connected 

```tip
go to populate.js to check sending JSON object info, to mongoDB website
```

---

### Product filtering

- to dynamically find products we use find({})
- in postMan there's an option of dynamically using many specifiers, as query params
- if you make the subUrl as /products?name=john&featured=true
- or we can easily put keys and values in the table below
- we observe searching data in req.query

---

### there are some gotta, we need to be aware of:

- what'll happen if we provide a non-existing value in query string params? `not existing in models`
- if we in controllers send req.query directly:
- the better approach is to use obj destructing to invoked only tended columns, as you learned with postgreSQL-express-node lesson
- then use the empty queryObject

```text
 const queryObject = {};
```

- so, when it sends empty queryObject, it returns the whole page
- the important part is that when user has non-existing key, it returns all, but when user selects existing key, with non-existing value, it'll return "products": [],"nbHits":0

---

- `$gt:` in controllers is a `mongo query operator`
[check it here](https://mongoosejs.com/docs/queries.html) then look after `With a JSON doc`
- in the browser: when we search z-a we add [-] before name as 
- localhost:3000/api/products?sort=-name,price
- comma is for adding price with it, if -price, it'll be z-a instead of a-z as expected
- it's 🔴 important 🔴 to chain sort,select and limit right after find({})
- when we sort inside controllers.js we don't use comma, but we separate them as CSS classes sort('-name price')
- there will be a big **gotta** when having async and chaining sort() results, because sort needs to see data as plain not promise, check `results` var in controllers => func `getAllProducts`
- he made await as a second step
- although in this function we split(',').join(' '), because we're invoking it in node, not as URL bar
- 
