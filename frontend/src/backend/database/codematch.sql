use codematch;
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
    pwd varchar(255),
    programming_lang varchar(255),
    photo longblob
);

insert into developers(name, email, pwd, programming_lang) values('joaquin','joaquin_trujillo@icloud.com','1234', 'React/Node/JavaScript/PHP');
insert into developers(name, email, pwd, programming_lang) values('rebe','rebe@icloud.com','1234', 'Angular/Node/TypeScript');
insert into developers(name, email, pwd, programming_lang) values('forky','forky@icloud.com','1234', 'HTML/CSS/JavaScript');
