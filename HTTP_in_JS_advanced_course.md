# Full HTTP networking Protocol Course -> FreeCodeCamp

This hands-on course is hosted by the teacher: `Lane Wagner`, a senior Back-end engineer, and is the creator of [boot.dev](https://boot.dev/), where he's published many interactive courses.

- http is the backbone of the modern web, and this course is a deep dive into all the fundamentals you'll need to know to master `web networking.`

## Intro

- we'll be doing over 80 coding exercises => 80+ Exercises
- we'll build a `Web Crawler` by the end of the course, in JS from scratch.
- This si a practical course.
- You can either code while you're seeing, or cloning [the repo](https://github.com/bootdotdev/fcc-learn-http-assets) for the raw code samples. see the [course link here](https://boot.dev/learn/learn-http)
- three links in the description of YouTube video: [1st](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) => `fetch API`, [2rd](https://developer.mozilla.org/en-US/docs/Web/API/URL/URL) => `URL: URL() constructor`, and [3rd](https://developer.mozilla.org/en-US/docs/Web/API/Response) => `Response`
- NOTICE: `this is a part of a larger back-end course in Lane's website`
- in his main course, he speaks about JS and Python, SQL, GO lang, etc... to become hirable as a back-end developer

### FAQ

to get answers to thy questions, Lane recommends three places:

- 1- Free Code Camp Forum
- 2- Free Code Camp Discord
- 3- Boot.dev Discord

## Project hands-on approach

- You might be familiar with tutorial hell, because of the content everywhere
- to get the maximum value out of this course:
  - - watch the explanation of the concepts and coding challenges
  - - But into typing the code manually!

- take your time watch the lesson, not in a shot!

## Ch 1 Why HTTP

- http => hyper text transfer protocol
- there're exercises on the boot.dev platform for many topics, 10 chapters and 13 for HTTP 1st one when I'm writing this.
- FE => front-end, BE- Back-end
- If YouTube has a server exclusively for videos, and client sends req for video and its commends, the server has videos, send its own http requests for receive comments. so it acts as a client,`but servers are not FE Clients` when requesting
- a lovely example of using fetch with await and async in front-end JS

```js
const itemURL = 'https://api.boot.dev/v1/courses_rest_api/learn-http/items'

const items = await getData(itemURL)

console.log(items)

async function getData(url) {
  const response = await fetch(url, {//settings are awesome here
    method: 'GET',
    mode: 'cors',
    headers: {
      'X-API-Key': 'Testing',
      'Content-Type': 'application/json'
    }
  })
  return response.json()
}
```

- when we use fetch we do need to await it, Lane said,
- as

```js
const response = await fetch(url, settings)
const responseData = await response.json()
```

- the bug: TypeError: `response.json is not a function` in 8th assignment in Ch 1, is because of the lack of `await` before `response = fetch`. 🔴 awesome 🔴

## Ch 2 DNS

- Web Addresses:
- IPv4 => **4** fields with 0-255 for each, as: `192.168.233.1`
- IPv6 => **8** fields with 16bits hexadecimal for each one `0000` to `ffff` as: `fe80::5c6a:6218:20a1:1806%9`, triggered with cmd: ipconfig
- but that's when problematic issues come
- It isn't helpful to know amazon's ip address, we don't have Amazon.com server's ip address memorized
- That's where DNS => **`Domain Name system`**, comes:
- one of its main purposes is: to map human readable read names as `Amazon.com` to `IP Addresses`
- it looks up for IP address that's associated with Amazon.com when I search for it!
- 🔴so: our computers under the hood resolve DNSs to IPs🔴
- `aside benefit`: if Amazon wants to change its IP address, or it isn't stable, because of internet service providers swaps out on them
- they can Update it under the hood, without changing their DNS/domain name
- **so: there's essentially two steps on each http request to the server on a given Domain name**

```shell
# 1- Resolve DNS
# 2- use obtained IP address
# 🔴it uses the obtained resolved DNS converted into IP address🔴
```

- the first assignment of DNS has a popular API `cloudflare-dns.com` for looking up IP addresses when providing it with a domain
- if you wanna see json readable use JSONlint site. or just postMan
- first assignment's answer was: `return respObject.Answer[0].data`
- 🔴 people who provide domain names are called **`registrars`**, as goDaddy is; in their software you tell them what's your IP address is. 🔴
- JS has a built-in `URL` object.

```js
// const urlObj = new URL('https://example.com/example-path')
let urlObj = new URL('https://github.com/Bader-idris')
// remember url location with Osama?!
const urlObj.hostname
```

- 🔴 `.com` OR `.dev` OR `.org` OR whatnot are all `TLDs` => `Top level Domain`
- `boot` in boot.dev is the `domainName`
- a `subDomain` prefixes a domain name as: `api` in `api.boot.dev`
- Bito: You can Set your own subDomainNames using express!
- we use sub domains for: **`fetching data`** and `updating user records passwords` etc..
- we can use `blog.boot.dev` to host a separate website to host the blog

<s>new to me🔴</s>

## ch 3 URIs and URLs

- *Me:* I see facebook and Amazon recognize my device and automatically refer me as a client to a subdomain depending on my OS, if mobile, for Fb it creates a `M` subdomain to fetch its requirements. see amazon, and aliExpress etc
- subdomains lesses expenses, allowing us not to repay domain names

```shell
# in chapter 3, Lane prevented my to continue his assignments or I pay.
# NOT GONNA HAPPEN
# But I'm still able to read articles
```

- URI stands for: `Uniform Resource Identifiers`,[see](https://en.wikipedia.org/wiki/Uniform_Resource_Identifier) !! been used with express process.env.MODEL_VAR !!
- `URIs` => *`identifier`* contain both `URLs` => *`location`*, and `URNs` =>  *`name`*

[see URLs](https://en.wikipedia.org/wiki/URL)

[see URNs](https://en.wikipedia.org/wiki/Uniform_Resource_Name)

- look at these sections that a URL can handle, from Sections of a URL page:
- `http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash`
- this is how its sections are made of:

```shell
protocol: http:
username: testuser
password: testpass
hostname: testdomain.com
port: 8080
pathname: /testpath
search: ?testsearch=testvalue
hash: #testhash
```

- can say in js:

```js
const fullURL = 'http://testuser:testpass@testdomain.com:8080/testpath?testsearch=testvalue#testhash'
const url = new URL(fullURL)
url.hostname
```

- Lane uses username and password in urls to access: `resources in code` like `accessing DBs` named as `infrastructure data`
- it's used when requesting, so clients aren't gonna see it commonly
- we `need '@' at symbol` only when including uName&passwd, it's an `optional delimiter`
- hash/fragment are usually used to link to a specific section on the page
- http default port is 80, and https' one is 443, and I know some as 404 200 201, 500 these are too popular
- protocols as `http` are referred to as **`schemes`**, some out there are: `ftp` and `mailto` and the secured http `https`
- not all of schemes require double slashes `//`, mailto is an ie
- `mailto:noreply@fantasyquest.app`

### Ports

- ports are virtual little hubs managed by the OS allow us to segment incoming requests and incoming data streams
- as when having DBs and WSs => web-servers on the same server. a port for DB and another for WS
- exactly as when I used pg with Ania and Beaufort-Tek. and even John Smilga.
- OSs can handle 65535 ports
- if we don't provide the port as clients, it'll use the default one. `depending on the protocol`
- Lane installed `caddy` on his Mac-os by:`brew install caddy`, instal. [go to it](https://caddyserver.com)
- in the project DIR command: `caddy file-server`, he has index.html file and name.txt in same dir

<!-- ## Ch 4 async JavaScript -->