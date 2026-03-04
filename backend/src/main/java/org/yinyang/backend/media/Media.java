package org.yinyang.backend.media;

import jakarta.persistence.*;
import lombok.*;
import org.yinyang.backend.post.Post;

@Entity
@Data
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Media {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String fileName;

    @OneToOne
    private Post post;


}
