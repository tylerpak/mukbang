package org.yinyang.backend.happyhourdeal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.DayOfWeek;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;

@Service
public class HappyHourDealService {

    @Autowired
    private HappyHourDealRepository happyHourDealRepository;

    private HappyHourDealService(HappyHourDealRepository happyHourDealRepository) {
        this.happyHourDealRepository = happyHourDealRepository;
    }


}
