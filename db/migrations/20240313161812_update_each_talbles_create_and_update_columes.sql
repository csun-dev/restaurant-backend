-- migrate:up

UPDATE users
SET created_at = CURRENT_TIMESTAMP
WHERE created_at IS NULL;

UPDATE users
SET updated_ap = CURRENT_TIMESTAMP
WHERE updated_ap IS NULL;

ALTER TABLE users
MODIFY created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
CHANGE updated_ap updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

UPDATE menus
SET created_at = CURRENT_TIMESTAMP
WHERE created_at IS NULL;

UPDATE menus
SET updated_ap = CURRENT_TIMESTAMP
WHERE updated_ap IS NULL;

ALTER TABLE menus
MODIFY created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
CHANGE updated_ap updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

UPDATE category
SET created_at = CURRENT_TIMESTAMP
WHERE created_at IS NULL;

UPDATE category
SET updated_ap = CURRENT_TIMESTAMP
WHERE updated_ap IS NULL;

ALTER TABLE category
MODIFY created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
CHANGE updated_ap updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

UPDATE reviews
SET created_at = CURRENT_TIMESTAMP
WHERE created_at IS NULL;

UPDATE reviews
SET updated_ap = CURRENT_TIMESTAMP
WHERE updated_ap IS NULL;

ALTER TABLE reviews
MODIFY created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
CHANGE updated_ap updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

UPDATE likes
SET created_at = CURRENT_TIMESTAMP
WHERE created_at IS NULL;

UPDATE likes
SET updated_ap = CURRENT_TIMESTAMP
WHERE updated_ap IS NULL;

ALTER TABLE likes
MODIFY created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
CHANGE updated_ap updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP;

-- migrate:down

