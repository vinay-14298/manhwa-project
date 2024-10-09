CREATE DATABASE manhwa;

USE manhwa;

CREATE TABLE manhwa_list (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    genre VARCHAR(255) NOT NULL,
    description TEXT NOT NULL
);

-- Insert mock data
INSERT INTO manhwa_list (title, genre, description) VALUES 
('Solo Leveling', 'Fantasy, Action', 'An ordinary hunter becomes the world\'s strongest.'),
('The Beginning After the End', 'Fantasy, Adventure', 'A king reincarnates in a magical world.');
