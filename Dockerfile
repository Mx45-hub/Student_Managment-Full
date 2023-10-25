
# Use an official OpenJDK image as the base image for Java Spring Boot
FROM openjdk:20-jdk

# Set the working directory within the container
WORKDIR /app

# Copy the JAR file into the container
COPY target/hilla-start-1.0-SNAPSHOT.jar app.jar

# Expose the port that the Spring Boot application will listen on
EXPOSE 8080

# Run the Java Spring Boot application
CMD ["java", "-jar", "app.jar"]