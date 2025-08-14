# Password Manager (Part-1) : Stores data at Localstorage
## 🔐 Password Manager using React + Vite + TailwindCSS v4 + LocalStorage


This is a secure and responsive Password Manager application built using **React 19**, **Vite**, **TailwindCSS v4**, and **React Toastify** with animated **Lordsicon** icons. All data is stored locally in your browser's localStorage for privacy and security.

---

## 📦 Project Setup

### 1️⃣ Clone this repository

```bash
git clone https://github.com/ChiragVasava/Password-Manager-Part-1.git
```
```bash
cd Password-Manager-Part-1
```

### 2️⃣ React + Vite Setup

#### Install Node Modules
##### Make sure Node.js is installed on your system. Then install dependencies:
```bash 
npm install
```

#### Run Development Server
```bash
npm run dev
```

#### Build for Production
```bash
npm run build
```

#### Preview Production Build
```bash
npm run preview
```

### 3️⃣ Install Required Packages

#### 1. Install UUID Package
```bash
npm install uuid
```

#### 2. Install React Toastify
```bash
npm install react-toastify
```

#### 3. Create UUID (Usage Example)
```javascript
import { v4 as uuidv4 } from 'uuid';
uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
```

#### 4. React Toastify Usage
```javascript
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Success notification
toast.success("Password saved successfully!");

// Error notification
toast.error("Failed to save password!");
```

### 4️⃣ TailwindCSS v4 Setup

#### TailwindCSS is configured using the new Vite Plugin for Tailwind: @tailwindcss/vite

##### 1. Install Tailwind via Vite plugin:
```bash
npm install -D @tailwindcss/vite autoprefixer
```

##### 2. Create postcss.config.js and add:
```javascript
// postcss.config.js
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';

export default {
  plugins: [tailwindcss(), autoprefixer()],
}
```

##### 3. Create or update index.css in src/ folder:
```css
/* src/index.css */
@import "tailwindcss";
@import 'react-toastify/dist/ReactToastify.css';
```

##### 4. Import index.css in main.jsx:
```javascript
import './index.css';
```

### 5️⃣ LordsIcon Setup

#### Add LordsIcon script to your HTML head or use via CDN:
```html
<script src="https://cdn.lordicon.com/lordicon.js"></script>
```

#### Usage Example:
```jsx
<lord-icon
    src="https://cdn.lordicon.com/example-icon.json"
    trigger="hover"
    colors="primary:#121331,secondary:#08a88a"
    style={{width: '50px', height: '50px'}}>
</lord-icon>
```

### ⚙️ Tech Stack

| Technology     | Version                           | Purpose                    |
| -------------- | --------------------------------- | -------------------------- |
| React          | ^19.1.1                          | Frontend Framework         |
| Vite           | ^7.1.0                           | Build Tool & Dev Server    |
| TailwindCSS    | ^4.1.11 via `@tailwindcss/vite` | CSS Framework              |
| React Toastify | ^11.0.5                          | Notification System        |
| UUID           | ^11.1.0                          | Unique ID Generation       |
| LordsIcon      | Latest                           | Animated Icons             |
| LocalStorage   | Native Browser API               | Data Storage               |

### 🚀 Project Features

- **Local Password Storage** - All data stored securely in browser's localStorage
- **Password Generation** - Generate strong, random passwords
- **Search & Filter** - Find passwords quickly by website or service
- **Copy to Clipboard** - One-click password and username copying
- **Show/Hide Passwords** - Toggle password visibility
- **Animated UI** - Beautiful LordsIcon animations
- **Toast Notifications** - Real-time feedback with React Toastify
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Modern Background** - Stylish TailwindCSS backgrounds from bg.ibelick.com
- **UUID-based IDs** - Unique identifiers for all entries
- **CRUD Operations** - Create, Read, Update, Delete passwords
- **No Server Required** - Pure frontend application
- **Privacy Focused** - Data never leaves your browser

### 💡 Folder Structure

```
Password-Manager-Part-1/
│
├── node_modules/
├── public/
│   ├── icons/
│   │   ├── eye.png
│   │   ├── eyecross.png
│   │   ├── github.svg
│   │   ├── heart.png
│   │   ├── favicon.png
│   │   └── vite.svg
│   └── index.html
│
├── src/
│   ├── assets/
│   │   └── react.svg
│   │
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Manager.jsx
│   │   └── Navbar.jsx
│   │
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
│
├── .gitignore
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── README.md
└── vite.config.js
```

### 📱 Usage Instructions

1. **Add Password** - Click "Add New Password" and fill in website, username, and password
2. **Generate Password** - Use the built-in password generator for strong passwords
3. **View Passwords** - All saved passwords are displayed in a clean list
4. **Search** - Use the search bar to find specific passwords
5. **Copy to Clipboard** - Click the copy icons to copy username or password
6. **Show/Hide Password** - Toggle password visibility with the eye icon
7. **Edit Password** - Click edit to modify existing entries
8. **Delete Password** - Remove unwanted password entries

### 🔒 Security & Privacy Features

- **Local Storage Only** - No data sent to external servers
- **Browser-based Security** - Relies on your browser's security
- **No Account Required** - No registration or login needed
- **Offline Functionality** - Works without internet connection
- **Data Portability** - Export/import functionality available

### 🎨 Design Features

- **Custom Backgrounds** - Unique TailwindCSS backgrounds from bg.ibelick.com
- **Animated Icons** - Beautiful LordsIcon animations for better UX
- **Toast Notifications** - Real-time user feedback for all actions
- **Responsive Layout** - Mobile-first design approach
- **Modern UI/UX** - Clean and intuitive interface
- **Dark/Light Theme Support** - Adaptive design elements


### ⚠️ Important Notes

- **Data Backup**: Your passwords are stored locally. Clear browser data will delete all passwords
- **Browser Compatibility**: Works on all modern browsers with localStorage support
- **Security**: For maximum security, use this app on your personal device only
- **Backup Recommendation**: Regularly export your passwords for backup

### 🔧 Development

#### Run in Development Mode
```bash
npm run dev
```

#### Build for Production
```bash
npm run build
```

#### Lint Code
```bash
npm run lint
```

#### Preview Production Build
```bash
npm run preview
```

### 🙌 Author

Made with 💻 and ❤️ by [Chirag Vasava](https://github.com/ChiragVasava)

### 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

### 📞 Support

If you have any questions or need help, please open an issue or contact me at v.chirag.007@gmail.com


⭐ **Don't forget to star this repository if you found it helpful!** ⭐

### 📸 Screenshot

<img width="1919" height="1014" alt="VS-Code" src="https://github.com/user-attachments/assets/60f0252a-3aad-4f5f-8dae-3bcd37bc372d" />

---

<img width="1920" height="991" alt="PassOP" src="https://github.com/user-attachments/assets/cbab114a-50cc-4e98-9e78-85185b842e5f" />

### 🌟 Live Demo

https://github.com/user-attachments/assets/6f9b6fb1-698e-4edb-8865-027835a40af2

---
