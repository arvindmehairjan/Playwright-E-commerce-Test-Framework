# Use node version 20 for the image
FROM node:20

# Use the Playwright image as the base image
FROM mcr.microsoft.com/playwright:focal

# Set the working directory inside the container
WORKDIR /app

# Set the environment path to node_modules/.bin
ENV PATH /app/node_modules/.bin:$PATH

# Set build arguments with default values
ARG ECOMMERCE_USERNAME=default_username
ARG ECOMMERCE_PASSWORD=default_password

# Set environment variables using build arguments
ENV ECOMMERCE_USERNAME=$ECOMMERCE_USERNAME \
    ECOMMERCE_PASSWORD=$ECOMMERCE_PASSWORD

# Copy project files (including tests)
COPY . .

# Copy only the necessary files for installing dependencies
COPY package*.json /app/
COPY tests/ /app/tests/
COPY page-objects/ /app/page-objects/
COPY playwright.config.js /app/

# Install dependencies
RUN npx playwright install

# Run playwright test (CMD is updated to use the script defined in package.json)
CMD ["npm", "test"]
