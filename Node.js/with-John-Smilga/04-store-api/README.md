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
- 