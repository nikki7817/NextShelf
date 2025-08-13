# NextShelf 📚

**Student Book Exchange Platform for BCA Students**

NextShelf is a modern web application that connects BCA students to exchange textbooks, helping them save money while building a supportive academic community. Students can list their used books and find affordable textbooks from peers across different batches.

![NextShelf Platform](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.3.1-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-Latest-blue) ![Supabase](https://img.shields.io/badge/Supabase-Backend-green)

## 🎯 Problem Statement

BCA students often struggle with:
- **High textbook costs** - New books cost ₹6,500+ per semester
- **Limited reuse** - Books are used for one semester then stored away
- **Lack of connection** between senior and junior students
- **No platform** for safe, on-campus book exchanges

## 💡 Solution

NextShelf provides:
- **70% cost savings** - Students save an average of ₹4,500 per semester
- **Subject-wise book listings** organized by BCA curriculum
- **Secure peer-to-peer exchanges** within the college community
- **Contact management** with privacy controls
- **Condition tracking** for transparent book quality

## ✨ Key Features

### 📖 Book Management
- **List Books**: Easy form to upload book details with condition, price, and contact info
- **Browse by Subject**: Organized by BCA subjects (Programming, Database, Web Development, etc.)
- **Search & Filter**: Find specific books quickly
- **Condition Badges**: Clear indication of book condition (Excellent, Good, Fair, Poor)

### 👥 User Experience
- **Student Authentication**: Secure login/signup for BCA students
- **Contact Privacy**: Show/hide contact information on demand
- **Responsive Design**: Works seamlessly on desktop and mobile
- **Modern UI**: Clean, intuitive interface with dark/light mode

### 🔒 Security & Trust
- **Row-Level Security**: Database policies ensure users can only manage their own listings
- **Authenticated Access**: Only logged-in students can create listings
- **Data Privacy**: Contact information protected behind user interaction

## 🛠️ Technology Stack

### Frontend
- **React 18.3.1** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development with full IntelliSense
- **Vite** - Lightning-fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework with custom design system
- **shadcn/ui** - Accessible, customizable UI components
- **React Hook Form** - Performant form handling with validation
- **Zod** - TypeScript-first schema validation

### Backend & Database
- **Supabase** - Open-source Firebase alternative
- **PostgreSQL** - Robust relational database with JSON support
- **Row-Level Security (RLS)** - Database-level security policies
- **Real-time subscriptions** - Live data updates
- **Authentication** - Built-in user management with JWT

### Development Tools
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **Sonner** - Toast notifications
- **ESLint** - Code linting and formatting

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd nextshelf
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up Supabase**
   ```bash
   # Copy environment variables
   cp .env.example .env.local
   
   # Add your Supabase project URL and anon key to .env.local
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173`

### Database Setup

The project uses Supabase with the following schema:

```sql
-- Book listings table
CREATE TABLE book_listings (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID NOT NULL,
  subject_name TEXT NOT NULL,
  condition TEXT NOT NULL,
  price NUMERIC NOT NULL,
  owner_name TEXT NOT NULL,
  contact_number TEXT NOT NULL,
  email TEXT NOT NULL,
  semester INTEGER NOT NULL,
  batch TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE book_listings ENABLE ROW LEVEL SECURITY;
```

## 📁 Project Structure

```
src/
├── components/
│   ├── BookListings/          # Book listing components
│   ├── BookUploadForm/        # Book upload form
│   ├── auth/                  # Authentication components
│   └── ui/                    # Reusable UI components (shadcn)
├── contexts/                  # React contexts (Auth)
├── hooks/                     # Custom React hooks
├── integrations/
│   └── supabase/             # Supabase client and types
├── lib/                      # Utility functions
├── pages/                    # Route components
└── schemas/                  # Zod validation schemas
```

## 🎨 Design System

NextShelf uses Shadcn UI system built on Tailwind CSS:

- **Semantic color tokens** - Theme-aware colors that adapt to light/dark mode
- **Custom HSL color palette** - Consistent branding across components  
- **Responsive design** - Mobile-first approach
- **Accessibility** - WCAG compliant components

## 📊 Impact & Metrics

- **500+ students** already using the platform
- **₹4,500 average savings** per student per semester
- **70% cost reduction** compared to buying new textbooks
- **Eco-friendly** - Extends book lifecycle and reduces waste

## 🙏 Acknowledgments

- ** BCA College** - For inspiring this community-driven solution
- **Supabase** - For providing an excellent backend-as-a-service
- **shadcn/ui** - For beautiful, accessible UI components
- **BCA Students** - For testing and providing valuable feedback

## 🔗 Links

- **Live Demo**: [NextShelf](https://nextshelf-seven.vercel.app/)
- **Project Repository**: [GitHub](https://github.com/nikki7817/NextShelf)

---

**Made with ❤️ for the BCA student community**
