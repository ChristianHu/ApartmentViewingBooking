FROM maven:3.8.6-openjdk-18-slim AS MAVEN_BUILD


COPY pom.xml /build/
COPY src /build/src/

WORKDIR /build/

RUN mvn package
RUN file="$(ls -1 /build/target/)" && echo $file

FROM openjdk:18-alpine

WORKDIR /app

COPY --from=MAVEN_BUILD /build/target/apartment-viewing-booking-0.0.1-SNAPSHOT.jar /app/

ENTRYPOINT ["java", "-jar", "apartment-viewing-booking-0.0.1-SNAPSHOT.jar"]
EXPOSE  8080