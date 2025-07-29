# Portfolio Web Application

A modern, responsive portfolio website built with Next.js 15, featuring a dynamic admin panel for content management and a beautiful client-facing interface with smooth animations.

## 🚀 Features

### Client View
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Dynamic Content**: Real-time content updates from database
- **Modern UI**: Clean and professional design with Material-UI components
- **Social Media Integration**: Built-in social media links
- **Smooth Scrolling**: Enhanced navigation with react-scroll

### Admin Panel
- **Secure Authentication**: Protected admin area with login system
- **Content Management**: CRUD operations for all portfolio sections
- **Real-time Updates**: Instant content updates without page refresh
- **User-friendly Interface**: Intuitive form controls and data management
- **Data Validation**: Form validation and error handling

### Portfolio Sections
- **Home**: Hero section with personal introduction and social links
- **About**: Personal information, skills, and statistics
- **Experience**: Professional work history and achievements
- **Education**: Academic background and qualifications
- **Projects**: Showcase of projects with technologies and links
- **Contact**: Contact information and communication details

## 🛠️ Tech Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **React 19**: Latest React with concurrent features
- **Tailwind CSS 4**: Utility-first CSS framework
- **Material-UI**: React component library
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Scroll**: Smooth scrolling functionality
- **React Slick**: Carousel component

### Backend
- **Next.js API Routes**: Server-side API endpoints
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling
- **bcryptjs**: Password hashing

### Development
- **PostCSS**: CSS processing
- **PurgeCSS**: Unused CSS removal
- **ESLint**: Code linting

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd portofolio-web
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🚀 Usage

### Client View
- Visit the main page to view your portfolio
- Navigate through different sections using the navigation menu
- View projects, experience, and contact information

### Admin Panel
- Access the admin panel at `/admin`
- Login with your credentials
- Manage content for all portfolio sections:
  - **Home**: Update heading and summary
  - **About**: Edit personal information and skills
  - **Experience**: Add/edit work experience
  - **Education**: Manage educational background
  - **Projects**: Add/edit project details
  - **Contact**: Update contact information

## 📁 Project Structure

```
portofolio-web/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── admin/             # Admin panel pages
│   │   ├── api/               # API routes
│   │   │   ├── about/         # About section APIs
│   │   │   ├── contact/       # Contact section APIs
│   │   │   ├── education/     # Education section APIs
│   │   │   ├── experience/    # Experience section APIs
│   │   │   ├── home/          # Home section APIs
│   │   │   ├── login/         # Authentication API
│   │   │   └── project/       # Project section APIs
│   │   ├── layout.js          # Root layout
│   │   └── page.js            # Home page
│   ├── components/
│   │   ├── admin-view/        # Admin panel components
│   │   └── client-view/       # Client-facing components
│   ├── database/
│   │   └── index.js           # Database connection
│   ├── models/                # Mongoose models
│   ├── services/              # API service functions
│   └── assets/                # Static assets
├── public/                    # Public assets
└── package.json
```

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🗄️ Database Models

The application uses MongoDB with the following models:
- **Home**: Hero section content
- **About**: Personal information and skills
- **Experience**: Work history
- **Education**: Academic background
- **Project**: Portfolio projects
- **Contact**: Contact information
- **User**: Admin authentication

## 🎨 Customization

### Styling
- Modify `src/app/globals.css` for global styles
- Update Tailwind configuration in `tailwind.config.js`
- Customize Material-UI theme in components

### Content
- Update content through the admin panel
- Modify static assets in `src/assets/`
- Update metadata in `src/app/layout.js`

### Components
- Edit client components in `src/components/client-view/`
- Modify admin components in `src/components/admin-view/`

## 🔒 Security

- Admin authentication with bcrypt password hashing
- Protected API routes for admin operations
- Environment variables for sensitive data
- Input validation and sanitization

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Other Platforms
1. Build the project: `npm run build`
2. Start production server: `npm run start`
3. Configure environment variables
4. Set up MongoDB connection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

For support and questions, please open an issue in the repository or contact the maintainer.

---

**Built with ❤️ using Next.js, React, and MongoDB**
