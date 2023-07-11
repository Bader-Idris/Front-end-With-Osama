# PostgreSQL Course from FreeCodeCamp channel

- Title: Learn postgreSQL Tutorial
- Teacher's name: Nelson

## connecting to DB server

- localhost [connect using client]
- 1 **GUI Client**
- 2 **Terminal/CMD**
- 3 **Application**

### GUI E.gs:-

- [DataGrip](https://www.jetbrains.com/datagrip/) but its license is paid
- [Postico](https://www.eggerapps.at/postico/) mac users only *free*
- [pgAdmin](https://www.pgadmin.org) official but not as nice as priors

## 🔴 psql connection 🔴

- when starting our psql terminal and having `server` parameter, instead of leaving it as default => 

- when we deploy our application, we put our **`url`** 
- if we didn't set a database, and provide a random name, server won't start nor connect

---

- commands will be provided are valid through both `mac` & `windows`

---

## Create Database

- `\q` means quit, `help` appears helping, `\?` appears more help
- `\l` list of all databases, it appears in the command above them
- `CREATE DATABASE our_name;` 🔴 to create databases,

### PG SQL allow lowerCase Commands, but it's not preferred to USE IT

- `psql --help` on mac returns a bunch of help, it didn't work in Windows, maybe because of `11 -v`
- `\c createdDB` as you know, to access it, we might need `\conninfo` to have privileges

---

### how to Delete DBs

- `DROP DATABASE test;` to delete it permanently
- 🔴it's crazily dangerous 🔴 because if you had 10 years of data, it'll be vanished

```postgres
CREATE TABLE table_name (
  'Column name[mand]' + 'data type[mand]' + 'constraints if any[opt]',
  'second colum as you know'
);
<!-- as -->
CREATE TABLE person (
  id int,
  first_name VARCHAR(50),
  last_name VARCHAR(50),
  gender VARCHAR(6),
  date_of_birth TIMESTAMP,
  <!-- dob is lovelier, and ask for TIMESTAMP vs DATE is  -->
)
```

- for Events, `TIMESTAMP` is precision, it `stores date data and time information`
- for DOB use `DATE` it stores date, but not time information

---

- there are a lot of data types in PostgreSQL, including `JSON`, `money`, `serial` and `boolean`,
[check them here](https://www.postgresql.org/docs/current/datatype.html)
- to display a specific table type: `\d table_name`, not `\dt` 2nd appears all tables
- `\d person` is a lot more useful than `\dt`, because it appears `Column`,`type`,`Collation`,`Nullable` and `Default`

---

#### with Constraints:

```postgresql
CREATE TABLE person (
  id BIGSERIAL NOT NULL PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  date_of_birth DATE NOT NULL
);
```

- it's a lot more useful than without constraints
- BIGSERIAL means it'll auto-increment
- PRIMARY KEY means it's what identify each person [the unique key]

---

- we can delete our table with `DROP TABLE IF EXISTS person` the condition `IF EXISTS` isn't necessary
- to add new columns do this:

```postgresql
ALTER TABLE person
ADD COLUMN email VARCHAR(255);
```

- when we created a new person table, because we included `BIGSERIAL` it created a new column named `person_id_seq`, and its type is `sequence`

#### insert rows in tables

```postgresql
INSERT INTO person (
  first_name,
  last_name,
  gender,
  date_of_birth)
VALUES ('Anne','Smith', 'FEMALE', DATE '1988-01-09');
<!-- 9th of Jan in 88 || yyyy-mm-dd -->
<!-- we didn't add an email, because it's nullable -->
```

#### Generate 1000 Rows with Mockaroo

- Mockaroo is a website that generates mock data
[check it here](https://mockaroo.com)
- we can specify the date format
- we change the format of rows to sql, and we'll include the create table
- check it on `01:05:15` of the lesson
- after You created a 1K data, type: `\?` to see `Input/Output` section when you scroll down;
- YOU SEE `\i FILE` execute commands from file
- so, in our main shell type `\i /path/to/file/person.sql`

#### You'll get Errors, because you didn't add `country_of_birth`

- do

```postgresql
<!-- change windows \ to linus slash, because it returns: C:: permission denied -->
ALTER TABLE person
ADD COLUMN country_of_birth VARCHAR(50);

\i C:/Users/wwwba_/Downloads/person.sql

```

- if we use `SELECT FROM pesron;` without any condition, it'll appear how many rows are there
- to select specific columns we write: `SELECT first_name, last_name FROM person;`

#### Order By

- it takes a column by ascending and descending orders
- `ASC, DESC` are the keywords for that
- ie: `SELECT * FROM person ORDER BY country_of_birth;` It'll return A-z Countries, which is awesome
- with `ASC` it's optional to include it, because it's optional the default value
- another ie `SELECT * FROM person ORDER BY id DESC`
- we can combine many as `SELECT * FROM person ORDER BY id, email DESC;`

#### Distinct

- easily perceived `SELECT country_of_birth FROM person ORDER BY country_of_birth ASC;`we can order as expected
- 🔴 to Distinct, meaning: to select unique values without repetition do 🔽 to remove duplicates🔴
- `SELECT DISTINCT country_of_birth FROM person ORDER BY country_of_birth;`

#### WHERE clause and AND

- `WHERE` allows us to filter data based on conditions
- ie: `SELECT * FROM person WHERE gender = 'Female';`only female results
- to chain conditions use `AND` as
- `SELECT * FROM person WHERE gender = 'Male' AND country_of_birth = 'Poland';`
- Notice`male and female are case insensitive or capitalized`
- 🔴A lovely combining approach is as to add condition inside`(a or b)` as

```postgresql
SELECT * FROM person WHERE gender = 'Female' AND (country_of_birth = 'Poland' OR country_of_birth = 'China');
```

- we can add more conditions as

```postgresql
SELECT * FROM person WHERE gender = 'Female' AND (country_of_birth = 'Poland' OR country_of_birth = 'China') AND last_name = 'Crim';
```

#### Comparison Operators

- These are the operators we're allowed to perform
- `arithmetic OPs`, `comparisons`,`bitwise`, And `logical OPs`
- Most Common are `arithmetic`, `comparisons` operators

---

- `SELECT 1 = 1;` returns ?columns and `t`, this is the comparison operator instead of `==`
- `f` => `false`, `t` => `true`
- `<>` => `not equal` instead of `!=`
- `<=` and `>=` are normal
- 🔴don't forget to use `SELECT` before comparison
- we can use them with string as JS, `SELECT 'ABC' <> 'ABC';` f, THEY'RE CAPITALIZED SO FALSE

### LIMIT, Offset & Fetch

- You've been using LIMIT before `selection FROM table LIMIT N`
- 🔴 `OFFSET` 🔴 is CRUCIAL WHEN CREATING PAGES
- `SELECT * FROM person OFFSET 5 LIMIT 5`
- limit isn't a standard sql selector, it's become popular with its usage
- Official limiting is by using `FETCH` as
- `SELECT * FROM person OFFSET 5 FETCH FIRST 5 ROW ONLY;`

### IN ('a','b','c') as array

- It takes an array of values, to turn query matching the values
- instead of repeating `country_of_birth` as
- `SELECT * FROM person WHERE country_of_birth = 'China' OR country_of_birth = 'Brazil' OR country_of_birth = 'France'`

---

- we use `SELECT * FROM person WHERE country_of_birth IN ('China', 'Brazil', 'France');`

### BETWEEN it's range selection

- as `SELECT * FROM person WHERE date_of_birth BETWEEN DATE '2000-01-01' AND '2015-01-01';`

### LIKE AND ILIKE

- we can use it with substrings as ending in `.com` using patterns using wild cards `%` meaning: `modulo operator`
- `%` modulo means `any character`, then we add out extension or substring  
- see `SELECT * FROM person WHERE email LIKE '%.com';`
- another ie: `'%@bloomberg.com';` and `%@google.com`
- the beloved dynamic ones are when encapsulating it as
- 🔴 `%@google.%` 🔴
- `_` represents `\w` in regEXp, so it's any ch, see: for 8 characters, then 
- `SELECT * FROM person WHERE email LIKE '________@%';`
- `ILIKE` makes it case insensitive

### GROUP BY

- **👨‍🏫 said it's 💪 🔴**, it allows us to group data based on `columns`, isn't it similar to DISTINCT?
- a great example is grouping by countries
- to find out how many people are in each country we use `GROUP BY`, so it's important
- this isn't gonna work!! `SELECT country_of_birth FROM person GROUP BY country_of_birth;`
- why? **because** we need to use `COUNT(*)`, it's a function that counts all, so type:
- `SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth;` sort it if you want, as
- `SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth ORDER BY country_of_birth;`

### GROUP BY HAVING

- to get specific counted columns having  5 people for ie we use this group by having selector
- the `having` keyword must be before `order by` one, `having` is another function as count, see how it's been used as:
- `SELECT country_of_birth, COUNT(*) FROM person GROUP BY country_of_birth HAVING COUNT(*) > 5 ORDER BY country_of_birth;`, here we asked for only greater than 5 counted results for selected country_of_birth
- You can find these parameters named as `Aggregate functions` in the document of official PG website,
[here:](https://www.postgresql.org/docs/current/functions-aggregate.html)

### Adding New Table & Data Using Mockaroo

- 🔴One Of the Most useful aggregate operators `to use` Nelson said🔴
- `max(expression)`, `min(expression)`, and `sum(expression)`
- see `01:53:08` for details inside Mockaroo to create a `car` table
- after creating it, we'll modify its creation as we learned, to give some conditions

```postgresql
create table car (
 id INT,
 make VARCHAR(50),
 model VARCHAR(50),
 price VARCHAR(50)
);
<!-- make this table creating as -->
create table car (
 id BIGSERIAL NOT NULL PRIMARY KEY,
 make VARCHAR(100) NOT NULL,
 model VARCHAR(100) NOT NULL,
 price NUMERIC(19, 2) NOT NULL
);
```

- I amended having $ sign using the beloved ctrl + H in VS code
- go to line 127 to see details of migrating sql file into thy array
- `\i E:/TutorialsElzero/DB/car.sql`

### Calculating Min, Max & average

- `SELECT MAX(price) FROM car;` to get only the max price
- `MIN` and `AVG` are the same, we can ues ROUND() as in JS to get rid of floating nums
- `SELECT ROUND(AVG(price)) FROM car;`
- `SELECT make, model, ROUND(MIN(price)) FROM car GROUP BY make, model;`
- this is how we get two columns and grouped by them, minimally

### SUM operator

- to sum all prices we easily type:
- `SELECT SUM(price) FROM car;`

---

- to see the sum of each make ⚠️ command following:
- `SELECT make, SUM(price) FROM car GROUP BY make;`
- this is great when the Company wants to know each product set's prices

### Basics Of arithmetic Operators

- `SELECT 5 + 5;` => To sum/increment numbers
- `SELECT 15 - 5;` => To decrement numbers, multiply and divide operators and modules are normal
- power is `^` as normal mathematics, not as programming languages with `**`: `SELECT 10^6;` == 1e6
- to preform the factorial operator we use `!` as  `SELECT 5!;` it'll /o 120, so `5! = 5*4*3*2*1 = 120`
- factorial in math is the same: after watch `permutations` set in Khan Academy

### Arithmetic OPs ROUND

- when we wanna have a discount, by 50% or 10% we can do the following:
- `SELECT id, make, model, price, price * .10 FROM car;` we got 10% of it in old fashion mathematics
- so the new column named: `?column?` has it, ! I think it's un-named column
- `SELECT id, make, model, price, ROUND(price * .10, 2) FROM car;`
- the `Round(n, 2)` is as `10.55555.toFixed(2)` in JS, so we return only two partial digits 
- to get only the remaining 90% we add comma after prior ROUND() then following
- `SELECT id, make, model, price, ROUND(price * .10, 2), ROUND(price - (price * .10), 2) FROM car;`
- saying ( price * .90, 2) is better, but Nelson's weird

### Alias => variable names for used Fns

- instead of having `?column?` or `round` to each column, we can name it as alias
- we simply use `AS` after each Fn as `ROUND(price * .10, 2) AS ten_percent` before its comma
- It's as easy as that: `SELECT id, make, model, price, ROUND(price * .10, 2) AS tenth, ROUND(price - (price * .10), 2) AS ninth FROM car;`

### Coalesce Fn (prior, nextValue)

- this Coalesce is to handle `null` data in PG
- it allows us to have a default value, in case isn't present
- `SELECT COALESCE(1);`
- `SELECT COALESCE(null, 1) AS number;` here we used coalesce to parse null value into 1;
- we can have multi-parameters as `COALESCE(null, null, 1)` that means: if 1st val isn't present, try 2nd one, if not though, use 3rd, and so on, as rest param (...var)
- to use Coalesce in our database do the following:
- If you find a null email data, because we allowed that when setting our constraints `NOT NULL`, we can use this coalesce function:
- 🔴 `SELECT first_name, COALESCE(email, 'email not provided') email FROM person;` 🔴

### NULLIF Fn

- We'll tackle the division by zero with this method
- in default PG, it returns an ERROR: `division by zero`, so nullif => if (2nd arg != 1st arg) return 1st arg; else return null;
- look at this ie: `SELECT NULLIF(10, 10)`; returns null, null in PG is empty string!! 😲
- an example of division by zero:
- `SELECT 10 / NULLIF(2, 9);`
- we can combine nullif with its prior Fn, coalesce
- `SELECT COALESCE(10 / NULLIF(0, 0), 0);`, but how to turn it into a string!😡

### Timestamps & Dates

- we learned that timestamp is more specific than date
- selecting `now()` will return now timestamp as: `SELECT now();`
- So, timestamps are date with time, in ms;
- to get only date from now function we can pass `::` to it, similar to CSS pseudo elements with DATE keyword:
- `SELECT now()::DATE;`
- to get only time we simply use TIME keyword as:
- `SELECT now()::TIME;`
- to learn more search for it [here:](https://www.postgresql.org/docs/current/datatype-datetime.html)
- you basically need to go to it for timezone issues

### adding and subtracting with dates

- to subtract a year for instance of a timestamp, we do the following:
- `SELECT NOW() - INTERVAL '1 YEAR';`,or `2 YEARS` or `'5 MONTHS'`, in days, both works as `10 DAY` or `10 DAYS`
- to increase instead of subtracting a year we add a plus sign instead of a minus one.
- `SELECT NOW() + INTERVAL '1 DAY';`
- we can use SECOND, MINUTE, HOUR, DAY, WEEK, MONTH, YEAR, DECADE, CENTURY
- we can use prior separation as `NOW()::DATE`
- to return DATE statements we wrap the statement, then `::DATE` as:
- `SELECT (NOW() + INTERVAL '1 YEAR')::DATE;`

### Extracting Fields

- 🔴 this is a good method, 🔴 it brings back tended value of timestamps
- `SELECT EXTRACT(YEAR FROM NOW());`, as well as: century, year, month even ms, etc.
- `SELECT EXTRACT(DOW FROM NOW());` DOW => `dayOfWeek`
- starts with Sunday as(0), ends with Saturday(6)

### Age function

- AGE(Current Timestamp as NOW(), actualDate as saved date_of_birth)
- `SELECT first_name, last_name, gender, country_of_birth, date_of_birth, AGE(NOW(), date_of_birth) AS age FROM person LIMIT 20;`

### Primary Keys

- assume you have a table with two people, they both have same fName, lName, gender, DOB, but with different emails.
- because we can't distinguish between both of them, we'll have to use primary keys, as `passport_number: X89732`,
- primary keys => `PK` => Uniquely identify a record in tables
- we used bigSerial numbers as primary keys before, with id column, we'll learn the guaranteed to be unique, but bigSerial is fine

## 🔴  Understanding Primary Keys

- when `\d person` our table we see: "person_pkey" PRIMARY KEY, btree (id)
- and we have the sequence of `nextval('person_id_seq'::regclass)` for our `id` column
- Nelson copied an insert statement from our created person table, and added (id) key, and its value (1) in same insert copied table.
- as `insert into person (id, first_name, last_name, email, gender, date_of_birth, country_of_birth) values (1, 'Beatrice', 'Lohoar', 'blohoar0@state.gov', 'Female', '2022-09-18', 'Philippines');`
- then run it in our database 
- 🔴 it didn't work, because id's duplicated, as primary key, same as passport_number we can't duplicate them
- to replace it we drop the preventing condition called `constraint`, by using the `ALTER` key,
- `ALTER TABLE person DROP CONSTRAINT person_pkey;`
- here: we removed the primary key condition from id
- so, it accepts duplicated values when re-adding, we check by using the WHERE id = condition as:
- `SELECT * FROM person WHERE id = 1;`

### Adding Primary Key

- with same `ALTER` method we `ADD`, see:
- `ALTER TABLE person ADD PRIMARY KEY (array of values);`
- the array of values is because we can compose a primary key based on multiple columns
- search for it `array of values with ALTER` for more complicated expressions.
- will it work, because of duplicated rows?
- `ALTER TABLE person ADD PRIMARY KEY (id);`
- 🔴 No, it's not gonna work 🔴
- it's awesome seeing the `DETAIL:` as msg: error
- We'll have to delete all duplicated records, explained in further section, as:
- `DELETE FROM person WHERE id = 1;`As 1 is the duplicated record;

### Unique Constraints

- it allows us to have a unique value for a given column
- `SELECT email, count(*) FROM person GROUP BY email;`, it'll allocate null email fields
- we see nullish values as:
- `SELECT email, count(*) FROM person GROUP BY email HAVING COUNT(*) > 1;`, use 2 because we have a duplicate email
- select the duplicated email by:
- `SELECT * FROM person WHERE email = 'checked_duplicated';`
- because we have duplicated emails, it's a trouble sending email to both instead of one of them, here `UNIQUE constraint` comes
- **`unique != primary keys`**
- `ALTER TABLE person ADD CONSTRAINT unique_email_address UNIQUE (email);`🔴🔴🔴
- in UNIQUE parenthesis, we can pass multiple columns to be unique
- because we're having duplicated emails, it'll return an ERROR;
- we can either delete a duplicated, or change its value -> null || alteredAddress
- I delete it, then re-try above unique code;
- if we insert an existing email, while having unique constraint, insertion will fail
- another approach to create `unique constraint` is as:
- `ALTER TABLE person ADD UNIQUE (email);`, But this approach makes Postgres create the name of our unique constraint

## Check constraints, based on boolean

- instead of only knowing the values of a column by using `DISTINCT` keyword, we use this `CHECK` one to make gender accepts only two values, binary way.
- `ALTER TABLE person ADD CONSTRAINT gender_constraint CHECK (gender = 'Female' OR gender = 'Male');`
- It'll throw an ERROR, because of having more than those two values, me because of case sensitivity, Nelson: because he added a `hello` testing gender
- we'll delete it, to continue the course
- `DELETE FROM person WHERE gender = 'MALE';`
- It'll prevent clients to add other than those two options

### Delete Records

- 🔴⚠️ if you say: `DELETE FROM person;`, It'll crazily delete all records;⚠️🔴
- after Nelson deleted everything and re-inserted them, he spoke about the id starting after 1K, said: `that is because we didn't reset the sequence`, will do later!
- deleting one record/row is as: `DELETE FROM person WHERE id = 10;`
- can do with many conditions as we learned, see:
- `DELETE FROM person WHERE gender = 'Female' AND country_of_birth = 'England';`
- ⚠️ Nelson says: **`You never want to do this in production DBs`** it's extremely risky ⚠️.

### Update Records

- 
