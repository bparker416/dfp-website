
---

## 📑 Backend README (`backend/README.md`)

markdown
# Damn Fine Website — Backend

A Spring Boot 3 application (Maven) that exposes REST endpoints, serves session-based authentication, and persists data to a relational database (PostgreSQL 15 in prod, H2 in dev).

---

## Table of Contents
1. [Features](#features)  
2. [Tech Stack](#tech-stack)  
3. [Prerequisites](#prerequisites)  
4. [Local Setup](#local-setup)  
5. [Running the App](#running-the-app)  
6. [Environment Variables](#environment-variables)  
7. [Database Migrations](#database-migrations)  
8. [Testing](#testing)  
9. [API Documentation](#api-documentation)  
10. [Profiles](#profiles)  
11. [Building & Packaging](#building--packaging)  
12. [Deployment Guides](#deployment-guides)  
13. [Troubleshooting Tips](#troubleshooting-tips)  
14. [License](#license)

---

## Features
- **Spring Boot 3.3** + **Java 21**  
- **Session-based security** using Spring Security + `HttpSession` (no JWT)  
- **Role-based authorization** (`ROLE_USER`, `ROLE_ADMIN`)  
- **PostgreSQL** with **Flyway** migrations; **H2** in-memory profile for fast dev/tests  
- **OpenAPI 3.1** + Swagger UI at `/swagger-ui.html`  
- **Comprehensive logging** (SLF4J), request tracing via `spring-boot-starter-actuator`  
- **Gradual rate-limiting** filter (Bucket4J) for auth routes

## Tech Stack
| Layer            | Tech / Version                          |
|------------------|-----------------------------------------|
| Runtime          | OpenJDK 21                              |
| Framework        | Spring Boot 3.3, Spring Security 6.3    |
| Build Tool       | Maven 3.9                               |
| Persistence      | Spring Data JPA, PostgreSQL 15          |
| Migrations       | Flyway 9                                |
| Tests            | JUnit 5, Spring Test, Testcontainers    |
| Docs             | springdoc-openapi 2                     |

## Prerequisites
- **Java 21**  
- **Maven 3.9+**  
- **Docker** (for local Postgres via `docker-compose`) *or* a running PostgreSQL instance

## Local Setup
bash
# 1. clone
git clone https://github.com/YOUR_ORG/damn-fine-website.git
cd damn-fine-website/backend

# 2. spin up Postgres (optional)
docker compose up -d db     # uses docker-compose.yaml

# 3. run the app with dev profile
./mvnw spring-boot:run -Dspring-boot.run.profiles=dev

## Running The App
| Method             | Command / URL                                                           |
| ------------------ | ----------------------------------------------------------------------- |
| **Dev profile**    | `./mvnw spring-boot:run -Dspring-boot.run.profiles=dev`                 |
| **Executable JAR** | `./mvnw clean package -DskipTests` → `java -jar target/dfw-backend.jar` |
| **Docker**         | `docker build -t dfw-backend . && docker run -p 8080:8080 dfw-backend`  |
| **Swagger UI**     | `http://localhost:8080/swagger-ui.html`                                 |

## Environment Variables
| Variable                 | Default / Example                      | Purpose                      |
| ------------------------ | -------------------------------------- | ---------------------------- |
| `SPRING_DATASOURCE_URL`  | `jdbc:postgresql://localhost:5432/dfw` | JDBC URL                     |
| `SPRING_DATASOURCE_USER` | `dfw_user`                             | DB user                      |
| `SPRING_DATASOURCE_PASS` | `supersecret`                          | DB password                  |
| `SERVER_PORT`            | `8080`                                 | HTTP port                    |
| `SESSION_COOKIE_NAME`    | `DFWSESSIONID`                         | Cookie name                  |
| `SESSION_TIMEOUT_MIN`    | `30`                                   | Inactivity timeout (minutes) |
| `ALLOWED_ORIGINS`        | `http://localhost:4200`                | CORS origins (comma-sep)     |

## Database Migrations
Managed by Flyway
SQL scripts live in src/main/resources/db/migration
To baseline/repair: ./mvnw flyway:repair

## Testing
./mvnw test              # unit + slice tests
./mvnw verify            # integration tests with Testcontainers

## API Documentation
OpenAPI JSON: /v3/api-docs
Swagger UI: /swagger-ui.html
Postman collection: see docs/postman/dfw.postman_collection.json

## Profiles
| Profile | Purpose                                     |
| ------- | ------------------------------------------- |
| `dev`   | H2 DB, CORS wide-open, detailed logging     |
| `test`  | H2 + Testcontainers for isolation           |
| `prod`  | PostgreSQL, stricter CORS, cached templates |

## Building & Packaging
# compile + test
./mvnw clean verify

# fat JAR (Spring Boot)
./mvnw clean package -DskipTests

docker build -t dfw-backend 

## Deployment Guides
| Platform                  | Notes                                                         |
| ------------------------- | ------------------------------------------------------------- |
| **Azure Web Apps**        | Deploy `dfw-backend.jar` or container; set env vars in portal |
| **DigitalOcean Apps**     | Connect to GitHub repo; DO automatically builds Dockerfile    |
| **AWS Elastic Beanstalk** | Use JAR or Docker; enable sticky sessions for ELB             |
| **Render.com**            | Docker native; free tier for dev                              |
| **Fly.io**                | Great for small apps; UDP sticky sessions supported           |

## Troubleshooting Tips
| Symptom / Log Snippet                                      | Resolution                                                           |
| ---------------------------------------------------------- | -------------------------------------------------------------------- |
| `org.hibernate.exception.JDBCConnectionException`          | Verify `SPRING_DATASOURCE_URL`; DB container running                 |
| `FATAL: codeParamsRoutingFailed` (Cockroach / PG clusters) | Ensure cluster ID in URL (e.g., `lazy-roach-3`)                      |
| `CORS pre-flight 403`                                      | Check `ALLOWED_ORIGINS`; Spring Security CORS config                 |
| `Cookie “SameSite=Lax” blocked (cross-site)`               | Add `SameSite=None; Secure` (prod HTTPS) via `CookieSerializer` bean |
| `405 Method Not Allowed` at `/error`                       | Use correct HTTP verb; confirm controller mapping                    |

## License
This project is licensed under the MIT License. See LICENSE for details.
