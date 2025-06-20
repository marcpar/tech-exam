# Makefile for Full Stack Developer Tech Exam

# Global variables
FRONTEND_DIR := frontend
BACKEND_DIR := backend
CONTRACTS_DIR := contracts
NETWORK := goerli

.PHONY: all start clean build frontend backend contracts docker up down logs

## Run all major components
all: contracts backend frontend

## Start frontend dev server
frontend:
	cd $(FRONTEND_DIR) && npm install && npm run dev

## Run backend API (Node/Express or similar)
backend:
	cd $(BACKEND_DIR) && npm install && npm run dev

## Compile and deploy smart contracts (using Hardhat)
contracts:
	cd $(CONTRACTS_DIR) && npm install && npx hardhat compile
	cd $(CONTRACTS_DIR) && npx hardhat run scripts/deploy.js --network $(NETWORK)

## Run backend/frontend via Docker Compose
docker:
	docker-compose up --build

## Bring up services
up:
	docker-compose up -d

## Bring down services
down:
	docker-compose down

## Show logs
logs:
	docker-compose logs -f

## Clean up node_modules and build artifacts
clean:
	rm -rf $(FRONTEND_DIR)/node_modules $(BACKEND_DIR)/node_modules $(CONTRACTS_DIR)/node_modules
	find . -type d -name "dist" -o -name "build" | xargs rm -rf