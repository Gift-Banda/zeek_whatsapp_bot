FROM node:18

# Working Dir 
WORKDIR /usr/src/app

# Copy package JSON file
COPY package*.json ./

# Install app Dependencies
RUN npm install

# Copy Source Files
COPY . .

CMD ['npm', 'start']