FROM node:14

WORKDIR /usr/src/app

# Install dependencies first to leverage Docker cache
COPY package*.json ./
RUN npm install

# Copy only the necessary files
# Omit .env as we'll use environment variables
COPY . .

EXPOSE 3001

COPY wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh
CMD ["/usr/src/app/wait-for-it.sh", "MySQLSrv:3306", "--", "npm", "start"]
