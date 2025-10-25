
cat > Dockerfile << 'EOF'
FROM node:18-alpine

RUN addgroup appgroup && adduser -S appuser -G appgroup

WORKDIR /app

COPY package*.json ./
RUN npm ci --only=production

COPY . .

USER appuser

EXPOSE 3000

CMD ["npm", "start"]
EOF

