create table person(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    surname VARCHAR(255)
);

create table post(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    content VARCHAR(255),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES soc_network.person (id)
);

CREATE TABLE users (
               id BIGSERIAL PRIMARY KEY NOT NULL ,
               name VARCHAR(255) NOT NULL ,
               email VARCHAR(255) NOT NULL ,
               password VARCHAR(255) NOT NULL ,
               UNIQUE (email)
)