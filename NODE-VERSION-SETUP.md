# Node Version Setup Guide

## TL;DR - Quick Start

```bash
npm start    # This automatically handles Node version switching!
```

That's it! The `npm start` command will:
1. ✅ Check if NVM is installed
2. ✅ Switch to Node 20 automatically
3. ✅ Start the development server

---

## Files Created for Node Version Management

### 1. `.nvmrc`
- Tells NVM to use Node.js version 20
- Automatically detected when you run `nvm use`

### 2. `.node-version`
- Same purpose, but for other Node version managers (n, fnm, asdf)
- Ensures compatibility across different tools

### 3. `dev.sh`
- Shell script that automates the process
- Loads NVM, switches to Node 20, and starts the dev server
- Called by `npm start`

### 4. Updated `package.json`
- Added `npm start` script
- Added Node version requirement in "engines"
- Added helper scripts

---

## How to Use

### Method 1: Automatic (Recommended) ⭐

Just run:
```bash
npm start
```

You'll see output like:
```
🚀 Starting TrustIn Development Server...
📦 Switching to Node.js version 20...
Found '/path/to/trustin/.nvmrc' with version <20>
Now using node v20.x.x (npm v10.x.x)
✅ Node version switched successfully!
📍 Current Node version: v20.x.x
🌐 Starting Vite development server...
```

### Method 2: Manual

If you prefer manual control:
```bash
nvm use          # Switch to Node 20
npm run dev      # Start dev server
```

### Method 3: Without NVM

If you don't have NVM installed, just ensure you're using Node 20:
```bash
node -v          # Check version (should be v20.x.x)
npm run dev      # Start dev server
```

---

## Troubleshooting

### Problem: "nvm: command not found"

**Solution**: Install NVM

**macOS/Linux:**
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
# Then restart your terminal
```

**Windows:**
Use [nvm-windows](https://github.com/coreybutler/nvm-windows/releases)

### Problem: "Node 20 not installed"

**Solution**: Install Node 20
```bash
nvm install 20
nvm use 20
```

### Problem: Script won't run (Permission denied)

**Solution**: Make the script executable
```bash
chmod +x dev.sh
```

### Problem: Using Windows

**Solution**: The `dev.sh` script is for macOS/Linux. On Windows:

**Option A**: Use Git Bash or WSL
```bash
npm start    # Will work in Git Bash
```

**Option B**: Use PowerShell/CMD
```bash
nvm use 20
npm run dev
```

**Option C**: Create a Windows equivalent `dev.bat`:
```batch
@echo off
echo Starting TrustIn Development Server...
call nvm use 20
npm run dev
```

---

## Available npm Scripts

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `npm start` | Auto-switches to Node 20 + starts dev server | **Recommended for daily use** |
| `npm run dev` | Starts dev server only | When already on Node 20 |
| `npm run start:simple` | Same as `npm run dev` | Alternative command |
| `npm run check-node` | Shows current Node version | To verify Node version |
| `npm run build` | Builds for production | Before deployment |
| `npm run preview` | Previews production build | To test production build |

---

## How It Works

### The `dev.sh` Script Flow

1. **Load NVM**
   - Checks if NVM is installed at `$NVM_DIR/nvm.sh`
   - Loads NVM if found

2. **Switch Node Version**
   - Runs `nvm use` which reads `.nvmrc`
   - Switches to Node 20

3. **Verify**
   - Shows current Node version
   - Displays success/error messages

4. **Start Server**
   - Runs `npm run dev`
   - Starts Vite development server

### The `.nvmrc` File

Simple one-line file:
```
20
```

This tells NVM: "Use the latest Node.js 20.x version"

Could also be specific: `20.19.0`

---

## Benefits of This Setup

### 1. Team Consistency ✅
Everyone uses the same Node version automatically

### 2. No Manual Switching ✅
`npm start` handles everything

### 3. Clear Error Messages ✅
Script tells you exactly what's wrong if Node 20 isn't available

### 4. Cross-Platform ✅
Works with NVM, n, fnm, and asdf

### 5. CI/CD Ready ✅
`engines` field in package.json ensures CI uses correct version

---

## For New Team Members

### Quick Onboarding

1. **Install NVM** (if not already installed)
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
   ```

2. **Clone the repo**
   ```bash
   git clone <repo-url>
   cd trustin
   ```

3. **Install Node 20**
   ```bash
   nvm install 20
   ```

4. **Install dependencies**
   ```bash
   npm install
   ```

5. **Start development**
   ```bash
   npm start
   ```

That's it! They're ready to develop.

---

## Alternative: Using Other Version Managers

### Using `n` (Node version manager)

The `.node-version` file works with `n`:
```bash
n auto       # Automatically uses version from .node-version
npm run dev
```

### Using `fnm` (Fast Node Manager)

```bash
fnm use      # Reads .node-version or .nvmrc
npm run dev
```

### Using `asdf`

```bash
asdf install nodejs 20.19.0
asdf local nodejs 20.19.0
npm run dev
```

---

## CI/CD Configuration

### GitHub Actions

```yaml
name: Build and Test

on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version-file: '.nvmrc'  # Uses .nvmrc file
      - run: npm install
      - run: npm run build
```

### GitLab CI

```yaml
image: node:20

build:
  script:
    - npm install
    - npm run build
```

### Vercel

Vercel automatically reads `.nvmrc`:
```json
// vercel.json (optional)
{
  "buildCommand": "npm run build"
}
```

---

## Maintenance

### Updating Node Version

To upgrade to a newer Node 20.x version:

1. Update `.nvmrc`:
   ```
   20.19.0  # Specific version
   ```

2. Or keep it flexible:
   ```
   20  # Always latest 20.x
   ```

3. Team members run:
   ```bash
   nvm install    # Installs version from .nvmrc
   nvm use        # Switches to it
   ```

---

## Summary

**Before this setup:**
- Manual `nvm use` every time
- Easy to forget
- Team inconsistencies

**After this setup:**
- One command: `npm start`
- Automatic Node switching
- Consistent across team
- Clear error messages
- Works with multiple version managers

---

## Need Help?

- **NVM Issues**: https://github.com/nvm-sh/nvm#troubleshooting
- **Node Version**: Run `npm run check-node`
- **Script Issues**: Check `dev.sh` is executable (`chmod +x dev.sh`)

---

**Pro Tip**: Add `npm start` to your muscle memory instead of `npm run dev`! 🚀
