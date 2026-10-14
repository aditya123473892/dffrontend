# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Install dependencies first (better layer caching, reproducible via lockfile).
# NOTE: --legacy-peer-deps is required: emoji-mart@3.0.1 peers React <=17
# while the app uses React 18 (matches the working local install).
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps

# Copy the rest of the source
COPY . .

# NEXT_PUBLIC_* vars are inlined by Next.js at BUILD time, so they must be
# baked in here. Compose passes build args (defaults = local recipient URLs).
ARG NEXT_PUBLIC_BACKEND_URL=http://localhost:9000/api
ARG NEXT_PUBLIC_SOCKET_URL=http://localhost:9000
ENV NEXT_PUBLIC_BACKEND_URL=${NEXT_PUBLIC_BACKEND_URL} \
  NEXT_PUBLIC_SOCKET_URL=${NEXT_PUBLIC_SOCKET_URL} \
  NEXT_PUBLIC_BACKEND_API=${NEXT_PUBLIC_BACKEND_URL} \
  NEXT_PUBLIC_BACKEND=${NEXT_PUBLIC_SOCKET_URL} \
  NEXT_TELEMETRY_DISABLED=1 \
  NODE_ENV=production

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
