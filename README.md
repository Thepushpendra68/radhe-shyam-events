# Radhe Shyam Event Management

A modern, responsive website for Radhe Shyam Event Management - a premier wedding planning company specializing in destination weddings in the holy city of Vrindavan, India.

## 🌟 Features

- **Modern Design**: Beautiful, responsive UI built with Next.js and Tailwind CSS
- **Smooth Animations**: Engaging user experience with Framer Motion
- **Professional Components**: Built with shadcn/ui and Radix UI
- **Contact Integration**: WhatsApp button for instant communication
- **Gallery Showcase**: Stunning photo gallery of past events
- **Service Overview**: Comprehensive wedding planning services
- **Testimonials**: Client reviews and success stories
- **Mobile Responsive**: Optimized for all devices

## 🚀 Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) + [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)

## 🏃‍♂️ Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Thepushpendra68/radhe-shyam-events.git
cd radhe-shyam-events
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
radhe-shyam-events/
├── public/              # Static assets
├── src/
│   ├── app/            # Next.js App Router pages
│   │   ├── about/      # About page
│   │   ├── contact/    # Contact page
│   │   ├── gallery/    # Gallery page
│   │   ├── services/   # Services page
│   │   └── layout.tsx  # Root layout
│   ├── components/     # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── About.tsx
│   │   ├── Footer.tsx
│   │   ├── Gallery.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   └── WhatsAppButton.tsx
│   └── lib/            # Utility functions
├── components.json     # shadcn/ui configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
└── tsconfig.json       # TypeScript configuration
```

## 🎨 Components

### Main Components
- **Hero**: Eye-catching landing section with company branding
- **About**: Company background and credentials
- **Services**: Wedding planning services overview
- **Gallery**: Photo showcase of past events
- **Testimonials**: Client reviews and feedback
- **Footer**: Contact information and social links
- **WhatsAppButton**: Floating WhatsApp contact button

### UI Components
Built with shadcn/ui for consistency and accessibility:
- Button, Card, Input, Select, Textarea, Badge

## 🚀 Deployment

### Deploy on Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/Thepushpendra68/radhe-shyam-events)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically build and deploy your site

### Manual Deployment

1. Build the project:
```bash
npm run build
```

2. Start the production server:
```bash
npm run start
```

## 🔧 Configuration

### Environment Variables

No environment variables are required for basic functionality. However, you can add:

```env
# For analytics (optional)
NEXT_PUBLIC_GA_ID=your-google-analytics-id

# For contact form (optional)
NEXT_PUBLIC_CONTACT_EMAIL=your-email@example.com
```

### Next.js Configuration

The project includes custom configuration for:
- External image domains (Unsplash)
- TypeScript strict mode
- Tailwind CSS integration

## 📱 Features Overview

### For Visitors
- Browse wedding services and packages
- View gallery of past events
- Read client testimonials
- Contact via WhatsApp or contact form
- Learn about the company's expertise

### For Business
- Professional online presence
- Mobile-responsive design
- SEO-optimized structure
- Fast loading times
- Contact lead generation

## 🎯 Business Focus

**Radhe Shyam Event Management** specializes in:
- **Destination Weddings** in Vrindavan, India
- **Traditional Indian Wedding Planning**
- **Spiritual & Religious Ceremonies**
- **International Client Services**
- **10+ Years of Experience**
- **500+ Successful Events**

## 🛠️ Available Scripts

```bash
# Development
npm run dev          # Start development server with Turbopack

# Production
npm run build        # Build for production
npm run start        # Start production server

# Code Quality
npm run lint         # Run ESLint
```

## 📄 License

This project is created for Radhe Shyam Event Management. All rights reserved.

## 🤝 Contributing

If you'd like to contribute to this project, please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

For any questions or support, please contact:
- **Website**: [Live Demo](https://radhe-shyam-events.vercel.app) (when deployed)
- **Email**: Contact through the website
- **WhatsApp**: Available via the floating button on the website

---

Made with ❤️ for creating divine wedding experiences in Vrindavan