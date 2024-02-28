-- migrate:up
CREATE TABLE `users` (
  `id` integer PRIMARY KEY AUTO_INCREMENT,
  `username` varchar(255),
  `email` varchar(255),
  `password` varchar(255),
  `created_at` timestamp,
  `updated_ap` timestamp
);

-- migrate:down

