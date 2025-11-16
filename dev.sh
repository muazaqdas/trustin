#!/bin/bash

# TrustIn Development Script
# This script ensures the correct Node version is used before starting the dev server

# Color codes for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${GREEN}🚀 Starting TrustIn Development Server...${NC}\n"

# Check if nvm is installed
if [ -s "$NVM_DIR/nvm.sh" ]; then
    # Load nvm
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

    echo -e "${YELLOW}📦 Switching to Node.js version 20...${NC}"
    nvm use

    if [ $? -eq 0 ]; then
        echo -e "${GREEN}✅ Node version switched successfully!${NC}\n"
    else
        echo -e "${RED}❌ Failed to switch Node version${NC}"
        echo -e "${YELLOW}💡 Install Node 20 with: nvm install 20${NC}\n"
        exit 1
    fi
else
    echo -e "${YELLOW}⚠️  NVM not found. Using system Node version.${NC}"
    echo -e "${YELLOW}💡 Install NVM from: https://github.com/nvm-sh/nvm${NC}\n"
fi

# Check Node version
NODE_VERSION=$(node -v)
echo -e "${GREEN}📍 Current Node version: ${NODE_VERSION}${NC}\n"

# Start the development server
echo -e "${GREEN}🌐 Starting Vite development server...${NC}\n"
npm run dev
