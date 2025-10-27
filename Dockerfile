# Build stage
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install
RUN npm install -g serve

# Copy all files
COPY . .

RUN npm run build

CMD ["serve", "-s", "dist"]
