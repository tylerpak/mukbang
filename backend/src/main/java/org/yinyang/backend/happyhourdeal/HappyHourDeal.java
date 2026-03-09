package org.yinyang.backend.happyhourdeal;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.yinyang.backend.restuarant.Restaurant;
import org.yinyang.backend.users.Users;

import java.time.DayOfWeek;
import java.time.Instant;
import java.time.LocalTime;
import java.util.Date;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
public class HappyHourDeal {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private Restaurant restaurant;

    @Enumerated(EnumType.STRING)
    private DealType dealType;

    private String description;

    private Integer value;

    @Enumerated(EnumType.STRING)
    private DayOfWeek dayOfWeek;

    private LocalTime startTime;

    private LocalTime endTime;

    public HappyHourDeal() {

    }
}

