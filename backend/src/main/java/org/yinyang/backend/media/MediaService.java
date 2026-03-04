package org.yinyang.backend.media;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import software.amazon.awssdk.core.sync.RequestBody;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;

import java.io.IOException;
import java.util.UUID;

@Service
public class MediaService {

    @Autowired
    private final MediaRepository mediaRepository;

    private final S3Client s3Client;
    private final String bucketName = "images";

    private MediaService(MediaRepository mediaRepository, S3Client s3Client) {
        this.mediaRepository = mediaRepository;
        this.s3Client = s3Client;
    }

    public String uploadImage(MultipartFile file) throws IOException {

        validateImage(file);

        String key = UUID.randomUUID() + "-" + file.getOriginalFilename();

        PutObjectRequest request = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .contentType(file.getContentType())
                .build();

        s3Client.putObject(
                request,
                RequestBody.fromInputStream(file.getInputStream(), file.getSize())
        );

        return key;
    }

    private void validateImage(MultipartFile file) {
        if (file.isEmpty()) {
            throw new RuntimeException("File is empty");
        }

        String contentType = file.getContentType();

        if (contentType == null ||
                (!contentType.equals("image/png") &&
                        !contentType.equals("image/jpeg") &&
                        !contentType.equals("image/webp"))) {

            throw new RuntimeException("Invalid image type");
        }
    }
}