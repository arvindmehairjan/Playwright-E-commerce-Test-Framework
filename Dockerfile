# Use the Playwright image as the base image
FROM mcr.microsoft.com/playwright:focal

# Set the working directory inside the container
WORKDIR /tests/e2e

# Set build arguments with default values
ARG USERNAME=default_username
ARG PASSWORD=default_password

# Set environment variables using build arguments
ENV USERNAME=$USERNAME \
    PASSWORD=$PASSWORD
    
# Copy project files (including tests)
COPY . .

# Copy only the necessary files for installing dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Run playwright test (CMD is updated to use the script defined in package.json)
CMD ["npm", "test"]
