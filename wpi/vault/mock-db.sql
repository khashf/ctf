

CREATE TABLE clients (
   id VARCHAR(255) PRIMARY KEY AUTOINCREMENT,
   clientname VARCHAR(255),
   hash VARCHAR(255),
   salt VARCHAR(255)
 );

 CREATE TABLE clients (id VARCHAR(255) PRIMARY KEY AUTOINCREMENT, clientname VARCHAR(255), hash VARCHAR(255), salt VARCHAR(255));

 INSERT INTO clients VALUES (test, testhash, testsalt);