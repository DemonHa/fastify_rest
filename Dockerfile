FROM node:18.2.0

# Crate app dir
WORKDIR /usr/src/app

# Install dependencies
# Wildcard for all packages in packege*.json
COPY package*.json ./

RUN npm install

# Copy all src file
COPY . .

EXPOSE 8080

CMD ["npm", "start"]