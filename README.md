# Money Wise - Admin Dashboard

A comprehensive admin dashboard for the Money Wise platform, built with Next.js 15, TypeScript, and Tailwind CSS. This dashboard provides a complete interface for managing content, users, and analytics.

## Features

### 🚀 Main Dashboard
- **Key Performance Indicators (KPIs)**: Track total posts, views, followers, and revenue
- **Interactive Charts**: Pie charts for topic distribution, line charts for weekly visits
- **Top Posts Display**: Showcase the most popular content with ratings and author information
- **Filter Controls**: Time-based filtering for analytics data

### 📋 Content Management
- **Topic Management**: Create, edit, and organize content categories
- **Post Management**: Comprehensive post management with advanced filtering, search, and status controls
- **CRUD Operations**: Full create, read, update, delete functionality across all content types

### 👥 User Management
- **Admin Management**: Control administrator accounts and permissions
- **Subscription Management**: Handle user subscriptions and newsletters

### 🎨 Interface Management
- **Banner Management**: Control homepage and promotional banners
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices

### 💬 Communication
- **Integrated Chat**: Internal communication system for team collaboration

## Technology Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS for modern, responsive design
- **Charts**: Recharts for data visualization
- **Icons**: Lucide React and React Icons
- **Components**: Custom UI components built with accessibility in mind

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── page.tsx           # Dashboard home
│   ├── topics/            # Topic management
│   ├── posts/             # Post management
│   ├── admins/            # Admin management
│   ├── banners/           # Banner management
│   ├── subscriptions/     # Subscription management
│   └── chat/              # Chat interface
├── components/
│   ├── ui/                # Reusable UI components
│   ├── layout/            # Layout components (Sidebar, Header)
│   ├── dashboard/         # Dashboard-specific components
│   ├── topics/            # Topic management components
│   └── posts/             # Post management components
└── styles/
    └── globals.css        # Global styles and utilities
```

## Getting Started

### Prerequisites
- Node.js 18 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd admindashboard
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
npm start
```

## Key Features in Detail

### Dashboard Overview
- **Real-time Statistics**: Live KPI updates with growth indicators
- **Visual Analytics**: Interactive pie charts showing content distribution by topic
- **Trend Analysis**: Weekly visitor patterns with area charts
- **Content Highlights**: Featured posts with author information and ratings

### Content Management System
- **Advanced Filtering**: Search by title, author, topic, status, and date
- **Bulk Operations**: Select multiple items for batch actions
- **Status Management**: Draft, published, and archived states
- **Rich Metadata**: Author information, view counts, publication dates

### Responsive Design
- **Mobile-First**: Optimized for mobile devices with collapsible sidebar
- **Tablet Support**: Adapted layouts for medium-screen devices
- **Desktop Experience**: Full-featured interface with extended layouts
- **Touch-Friendly**: Optimized interaction areas for touch devices

### Performance Optimizations
- **Server-Side Rendering**: Fast initial page loads
- **Image Optimization**: Next.js Image component with lazy loading
- **Code Splitting**: Automatic route-based code splitting
- **Caching**: Optimized caching strategies for static assets

## Customization

The dashboard is built with customization in mind:

- **Theme System**: Easy color scheme modifications via Tailwind CSS
- **Component Library**: Reusable UI components for consistent design
- **Modular Architecture**: Easy to add new sections and features
- **TypeScript**: Full type safety for maintainable code

## API Integration

The dashboard is designed to work with RESTful APIs:

- **Data Fetching**: Ready for integration with backend services
- **State Management**: Client-side state management for real-time updates
- **Error Handling**: Comprehensive error boundaries and user feedback
- **Loading States**: Proper loading indicators throughout the application

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please create an issue in the repository or contact the development team.

---

Built with ❤️ for the Money Wise platform
