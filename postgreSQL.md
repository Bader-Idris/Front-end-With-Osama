# PostgreSQL Course from FreeCodeCamp channel

- Title: Learn postgreSQL Tutorial

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

### PG SQL allow lowerCase Commands, but it's not perferred to USE IT

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

-