#!/bin/bash

# Portfolio Website Setup and Testing Script
# This script helps you test and deploy your portfolio website

echo "================================================"
echo "  Mohammad Abu-Khader - Portfolio Website"
echo "================================================"
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: index.html not found. Please run this script from the project root."
    exit 1
fi

echo "📁 Project structure:"
echo "✓ index.html"
echo "✓ assets/css/style.css"
echo "✓ assets/js/script.js"
echo "✓ assets/images/ (8 project images + favicon)"
echo ""

# Function to start local server
start_server() {
    echo "🚀 Starting local development server..."
    echo ""
    
    if command -v python3 &> /dev/null; then
        echo "Opening http://localhost:8000 in your browser..."
        echo "Press Ctrl+C to stop the server"
        echo ""
        python3 -m http.server 8000
    elif command -v python &> /dev/null; then
        echo "Opening http://localhost:8000 in your browser..."
        echo "Press Ctrl+C to stop the server"
        echo ""
        python -m http.server 8000
    else
        echo "❌ Python not found. Please install Python to run the local server."
        echo "Alternatively, open index.html directly in your browser."
        exit 1
    fi
}

# Function to check git status
check_git() {
    echo "📊 Git Status:"
    echo ""
    git status --short
    echo ""
}

# Function to deploy to GitHub Pages
deploy() {
    echo "🚀 Deploying to GitHub Pages..."
    echo ""
    
    # Check if there are changes
    if [ -z "$(git status --porcelain)" ]; then
        echo "✓ No changes to commit. Repository is up to date."
    else
        echo "📝 Changes detected. Committing..."
        git add .
        read -p "Enter commit message (or press Enter for default): " commit_msg
        
        if [ -z "$commit_msg" ]; then
            commit_msg="Update portfolio website"
        fi
        
        git commit -m "$commit_msg"
        echo "✓ Changes committed"
    fi
    
    echo ""
    echo "📤 Pushing to GitHub..."
    git push origin main
    
    echo ""
    echo "✅ Deployment complete!"
    echo "🌐 Your website will be live at: https://xoity.github.io"
    echo "⏳ It may take a few minutes for changes to appear."
}

# Main menu
echo "What would you like to do?"
echo ""
echo "1) Start local server (test website)"
echo "2) Check git status"
echo "3) Deploy to GitHub Pages"
echo "4) Exit"
echo ""
read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        start_server
        ;;
    2)
        check_git
        ;;
    3)
        deploy
        ;;
    4)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac