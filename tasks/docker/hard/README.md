# Docker - Hard Task

## Microservices Architecture with Docker Compose

This task requires creating a complete microservices architecture using Docker Compose with multiple services, networks, volumes, and health checks.

### Architecture Overview:

1. **Web Application Service** (React/Node.js) - Frontend application
2. **API Service** (Express.js) - Backend API
3. **Database Service** (PostgreSQL) - Data persistence
4. **Cache Service** (Redis) - Caching layer
5. **Nginx Reverse Proxy** - Load balancing and routing

### Requirements:

1. **Services**: Implement all 5 services with proper configuration
2. **Networks**: Separate frontend and backend networks
3. **Volumes**: Persistent data storage for database and cache
4. **Health Checks**: Implement health checks for all services
5. **Environment Variables**: Proper configuration management
6. **Logging**: Centralized logging setup
7. **Dependencies**: Service dependency management

### Files:
- `docker-compose.yml` - Main orchestration file
- `nginx.conf` - Reverse proxy configuration
- `init.sql` - Database initialization script
- `README.md` - This file

### Expected Outcome:
A production-ready microservices architecture that can be deployed and scaled independently. 
