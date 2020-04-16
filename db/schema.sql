DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name VARCHAR(255) NOT NULL,
  devoured BOOLEAN,
  PRIMARY KEY (id)
);

--Take these over to seeds.sql as well
INSERT INTO burgers (burger_name, devoured) VALUES ('Smoked Gouda and Bacon Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Vegan Deep Fried Portabello and Hummus Burger', false);
INSERT INTO burgers (burger_name, devoured) VALUES ('Ballpark Cheeseburger', false);

SELECT * FROM burgers;

DELETE FROM burgers;