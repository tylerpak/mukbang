package org.yinyang.backend.post;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.yinyang.backend.restuarant.Restaurant;
import org.yinyang.backend.users.Users;

import java.time.Instant;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
public class Post {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String description;

    @ManyToOne
    @JoinColumn(name="users_id", nullable = false)
    private Users createdBy;

    @CreatedDate
    private Instant createdOn;

    @OneToOne
    private Restaurant restaurant;


    public Post() {

    }
}
