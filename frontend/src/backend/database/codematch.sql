
CREATE TABLE doubts (
	id int primary key auto_increment not null,
    name varchar(255),
    email varchar(255),
    message text
);

CREATE TABLE developers (
	id int primary key auto_increment not null,
    name varchar(255),
    email varchar(255),
    photo longblob
);