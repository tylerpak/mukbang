package org.yinyang.backend.happyhourdeal;

import org.springframework.data.repository.CrudRepository;

import java.time.DayOfWeek;
import java.time.LocalTime;
import java.util.List;

public interface HappyHourDealRepository extends CrudRepository<HappyHourDeal, Long> {

}
