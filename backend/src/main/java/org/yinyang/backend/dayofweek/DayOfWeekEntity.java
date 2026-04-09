package org.yinyang.backend.dayofweek;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.yinyang.backend.happyhour.HappyHourEntity;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
public class DayOfWeekEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Enumerated(EnumType.STRING)
    private DayEnum day;

}
