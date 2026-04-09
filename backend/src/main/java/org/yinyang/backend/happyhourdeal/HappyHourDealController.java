package org.yinyang.backend.happyhourdeal;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.DayOfWeek;
import java.util.List;

@RestController
@RequestMapping("api/deals")
public class HappyHourDealController {

    @Autowired
    private final HappyHourDealService happyHourDealService;

    public HappyHourDealController(HappyHourDealService happyHourDealService) {
        this.happyHourDealService = happyHourDealService;
    }


}
