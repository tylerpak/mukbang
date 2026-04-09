ALTER TABLE day_of_week_entity_happy_hours
    DROP CONSTRAINT fk_dayofweeenthaphou_on_day_of_week_entity;

ALTER TABLE day_of_week_entity_happy_hours
    DROP CONSTRAINT fk_dayofweeenthaphou_on_happy_hour_entity;

ALTER TABLE happy_hour_deal_happy_hours
    DROP CONSTRAINT fk_haphoudeahaphou_on_happy_hour_deal;

ALTER TABLE happy_hour_deal_happy_hours
    DROP CONSTRAINT fk_haphoudeahaphou_on_happy_hour_entity;

DROP TABLE day_of_week_entity_happy_hours CASCADE;

DROP TABLE happy_hour_deal_happy_hours CASCADE;