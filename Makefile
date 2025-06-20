# Makefile for Full Stack Developer Tech Exam

# Directories
FRONTEND_DIR := frontend
BACKEND_DIR := backend
CONTRACTS_DIR := contracts

# Blockchain Network
NETWORK := sepolia

# Targets
.PHONY: all start clean build frontend backend contracts docker up down logs reset

## 🧱 Build and deploy everything (contracts, backend, frontend)
all: contracts backend frontend

## ▶️ Start frontend dev server
frontend:
	cd $(FRONTEND_DIR) && npm install && npm run dev

## ▶️ Start backend API server
backend:
	cd $(BACKEND_DIR) && npm install && npm run dev

## 🔨 Compile & deploy smart contracts
contracts:
	cd $(CONTRACTS_DIR) && npm install
	cd $(CONTRACTS_DIR) && npx hardhat compile
	cd $(CONTRACTS_DIR) && npx hardhat run scripts/deploy.js --network $(NETWORK)

## 🐳 Build & start all services using Docker Compose
docker:
	docker-compose up --build

## 🔼 Start Docker containers in detached mode
up:
	docker-compose up -d

## 🔽 Stop and remove containers
down:
	docker-compose down

## 📜 Show Docker logs
logs:
	docker-compose logs -f

## 🧹 Clean all node_modules and build artifacts
clean:
	rm -rf \
		$(FRONTEND_DIR)/node_modules \
		$(BACKEND_DIR)/node_modules \
		$(CONTRACTS_DIR)/node_modules \
		$(FRONTEND_DIR)/dist \
		$(BACKEND_DIR)/dist \
		$(CONTRACTS_DIR)/artifacts \
		$(CONTRACTS_DIR)/cache
	@echo "🧹 Cleaned node_modules, dist, artifacts, and cache."

## 🧨 Full reset (containers + artifacts + modules)
reset: down clean
	docker volume prune -f
	@echo "🧨 Reset complete."