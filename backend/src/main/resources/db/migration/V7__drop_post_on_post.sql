ALTER TABLE post
    DROP CONSTRAINT fk_post_on_post;

ALTER TABLE post
    DROP COLUMN post_id;