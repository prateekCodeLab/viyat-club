# 🏨 Viyat Club - Luxury Resort Website

![Project Screenshot](public/screenshot.png)

A modern React + TypeScript implementation of a luxury resort website.

## 📌 Current Status
**Last Updated:** $(date +%Y-%m-%d)

### ✅ Completed Features
- Homepage with animated hero section
- Interactive image gallery
- Membership plans page
- Responsive contact form
- Page transition animations

### 🚧 In Progress
- [ ] Wedding package calculator
- [ ] Room booking system
- [ ] User authentication flow
- [ ] Admin dashboard

## 🛠️ Tech Stack
| Category       | Technologies                |
|----------------|-----------------------------|
| Frontend       | React 18, TypeScript        |
| Styling        | Tailwind CSS                |
| Animations     | Framer Motion               |
| State          | React Context API           |
| Build Tool     | Vite                        |

## ⚡ Quick Start
```bash
# Clone repository
git clone https://github.com/prateekCodeLab/viyat-club.git

# Install dependencies
npm install

# Run development server
npm run dev
📋 Project Structure
text
viyat-club/
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Route-level components
│   ├── types/        # TypeScript definitions
│   └── App.tsx       # Main application
├── public/           # Static assets
└── tailwind.config.js
🌟 Features Preview
tsx
// Example animated component
const AnimatedHeader = () => (
  <motion.div
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5 }}
  >
    <h1>Welcome to Viyat Club</h1>
  </motion.div>
)
🛑 Known Issues
Image gallery performance on mobile

Form validation needs improvement

Safari animation compatibility

🤝 How to Contribute
Fork the repository

Create a feature branch (git checkout -b feature/your-feature)

Commit your changes (git commit -m 'Add some feature')

Push to the branch (git push origin feature/your-feature)

Open a Pull Request

📌 Note: Replace the placeholder screenshot.png with your actual project screenshot.

text
=== END OF README.md ===

### Alternative Download Methods:

1. **Via Gist** (if you have GitHub access):
   - Create new gist at [gist.github.com](https://gist.github.com)
   - Paste the content
   - Click "Create secret gist"
   - Use the "Raw" button to download

2. **Command Line** (if you have curl):
```bash
curl -o README.md https://gist.githubusercontent.com/raw/your-gist-id/viyat-readme.md