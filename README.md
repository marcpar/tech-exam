# Full Stack Developer Tech Exam

## Section 1: Frontend Development
- **Task**: Build a basic web interface that allows users to connect their Ethereum wallet (using MetaMask or WalletConnect) and view their balance and transaction history.
- **Requirements**:
  1. Create a UI that allows users to connect their Ethereum wallet.
  2. Fetch and display the user's Ethereum balance (in ETH).
  3. Fetch and display the user's last 10 transactions.
  4. Include basic error handling for failed connections or API calls.
  5. Use web3.js or ethers.js for blockchain interactions.
- **Bonus**: Use TypeScript for the frontend code.

## Section 2: Backend Development
- **Task**: Create an API endpoint that returns the gas price, current Ethereum block number, and basic account details given an Ethereum address.
- **Requirements**:
  1. Create a REST API with an endpoint to accept an Ethereum address as input.
  2. Call the Ethereum network to get:
     - Current gas price.
     - Current block number.
     - The balance of the given address.
  3. Return the above data in a JSON format.
  4. Properly structure the code to allow future extensibility.
- **Resources**: There are several resources you can use to easily get the data from Ethereum. All of these options have a free tier that can be used.
  1. Etherscan - https://docs.etherscan.io/
  2. Alchemy - https://docs.alchemy.com/reference/api-overview
  3. Covalent - https://www.covalenthq.com/docs/api/#/0/0/USD/1
- **Bonus**:
   - Implement simple caching (e.g., using Redis) for the gas price and block number to avoid hitting the API on each request.
   - Set up a PostgreSQL or MongoDB database to store account balances.

## Section 3: Smart Contract Development
- **Task**: Write a simple Ethereum smart contract (ERC-721 or ERC-20) that allows minting tokens and transferring them between users.
- **Requirements**:
  1. Write a smart contract in Solidity that:
     - Allows a user to mint a token (ERC-721 or ERC-20).
     - Allows users to transfer tokens to another address.
  2. Use OpenZeppelin libraries for base contracts.
- **Bonus**:
   - Deploy the contract to a testnet (e.g., Rinkeby or Goerli).

## Section 4: Integration
- **Task**: Integrate the frontend with the backend and smart contract to enable users to mint a token from the frontend and view their minted tokens.
- **Requirements**:
  1. From the frontend, allow users to mint tokens by interacting with the smart contract.
  2. Once a token is minted, show the token details (e.g., token ID, owner) on the frontend.
  3. Fetch token data using the backend API for the given address.
  4. Handle errors (e.g., insufficient funds for gas fees, contract deployment issues).
- **Bonus**:
   - **Docker**: Create a Dockerfile to containerize the frontend and backend services, and use Docker Compose to orchestrate the services.

## Scoring Criteria:
- **Frontend (20 points)**:
  - Functionality and usability (10 points)
  - Code quality and structure (5 points)
  - Bonus: TypeScript usage (5 points)
- **Backend (20 points)**:
  - API functionality (10 points)
  - Code structure and error handling (5 points)
  - Bonus: Caching and database (5 points)
- **Smart Contract (20 points)**:
  - Contract functionality (15 points)
  - Code organization and readability (5 points)
  - Bonus: Testnet deployment (5 points)
- **Integration (20 points)**:
  - Seamless integration of frontend, backend, and smart contract (15 points)
  - Error handling (5 points)
  - Bonus: Docker (5 points)

## Submission Guidelines:
Once you have completed the exam, please submit your work by following these steps:

1. Create a GitHub Repository:

- Push all your code (frontend, backend, smart contracts, Docker files, etc.) to a new GitHub repository.
- Organize the repository with clear directories for each section (e.g., /frontend, /backend, /contracts, /docker).
- Ensure all sensitive information (like API keys or private keys) is excluded from the repository.

2. Include a README.md file at the root of your repository that contains:
- An overview of your project.
- Instructions on how to set up and run the application locally.
- Any prerequisites or dependencies needed.
- Instructions for using Docker Compose (if you completed the Docker bonus).
- Any assumptions or decisions you made during development.
- Any known issues or limitations.

3. Add [apquinit](https://github.com/apquinit) as a collaborator to your repository:
- Go to your repository on GitHub.
- Click on the Settings tab.
- Select Collaborators from the sidebar.
- Invite [apquinit](https://github.com/apquinit) as a collaborator.

4. Once you've added the collaborator, please book an appointment with us to review your submission. You can do this by scheduling a personal meeting with Alex on [Calendly](https://calendly.com/apquinit). Include the following agenda on the Calendly booking:
- Your GitHub repository link.
- Any additional notes or comments you want to share.

Thank you for your hard work and dedication. We look forward to reviewing your submission!
