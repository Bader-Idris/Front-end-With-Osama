CREATE DATABASE comments;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
-- SELECT uuid_generate_v4();
CREATE TABLE users(
  user_uid UUID NOT NULL PRIMARY KEY,
  f_name VARCHAR(50) NOT NULL,
  l_name VARCHAR(50) NOT NULL,
  email VARCHAR(255),
  password VARCHAR(300) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  dob DATE NOT NULL
  );

CREATE TABLE "user" ( user_uid UUID NOT NULL PRIMARY KEY,
f_name VARCHAR(50) NOT NULL,
l_name VARCHAR(50) NOT NULL,
email VARCHAR(255),
password VARCHAR(300) NOT NULL,
gender VARCHAR(6) NOT NULL,
dob DATE NOT NULL );
```
for Events, TIMESTAMP is precision, it stores date data
and time information
for DOB use DATE it stores date, but not time information
```