CREATE TABLE Game(
game_ID int NOT NULL PRIMARY KEY,
title varchar(150),
description text,
realise_date date,
views bigint
);

CREATE TABLE Game_status(
status_ID int NOT NULL PRIMARY KEY,
status_name varchar(150)
);

CREATE TABLE Has_status(
game_ID int NOT NULL,
status_id int NOT NULL,
FOREIGN KEY (game_ID) REFERENCES Game(game_ID),
FOREIGN KEY (status_ID) REFERENCES Status(status_ID)
);

CREATE TABLE Category(
category_name varchar(150) NOT NULL PRIMARY KEY
);

CREATE TABLE Publish_company(
company_name varchar(150) NOT NULL PRIMARY KEY,
adresse text
);

CREATE TABLE Visitor(
username varchar(150) NOT NULL PRIMARY KEY,
email varchar(250),
birth_date date,
gender varchar(100)
);

CREATE TABLE Rating(
game_ID int NOT NULL,
username varchar(150) NOT NULL,
rating_date date,
numeric_rating decimal(10,2),
FOREIGN KEY (game_ID) REFERENCES Game(game_ID),
FOREIGN KEY (username) REFERENCES User(username)
);

CREATE TABLE Likes(
game_ID int NOT NULL,
username varchar(150) NOT NULL,
likes_date date,
FOREIGN KEY (game_ID) REFERENCES Game(game_ID),
FOREIGN KEY (username) REFERENCES User(username)
);

CREATE TABLE Comments(
game_ID int NOT NULL,
username varchar(150) NOT NULL,
comments_date date,
comment_text text,
FOREIGN KEY (game_ID) REFERENCES Game(game_ID),
FOREIGN KEY (username) REFERENCES User(username)
);
