# LuxeStore - Premium eCommerce

A modern, luxury-themed eCommerce application built with React and Vite. Features a dark navy & warm beige design system, public product browsing, and auth-gated shopping actions.

## Live Demo

> Add your deployment URL here

## Features

### Shopping Experience
- **Public Browsing** - Products, categories, brands, and product details are accessible without login
- **Auth-Gated Actions** - Add to cart, wishlist, and checkout require authentication
- **Product Cards** - Modern cards with badges (NEW, discount %, out of stock), quick view, wishlist toggle
- **Product Details** - Image gallery with thumbnails, quantity selector, related products
- **Shopping Cart** - Quantity controls, order summary, clear all
- **Wishlist** - Save favorite products, add to cart from wishlist
- **Checkout** - Shipping form with order summary and Stripe payment integration

### Design System
- **Dark Navy & Beige Theme** - Premium color palette (`#202940`, `#CAAA98`)
- **Typography** - Inter + Poppins font family with 8-step scale
- **Components** - Reusable button, input, card, badge, and skeleton components
- **Animations** - Fade-in, slide-in, shimmer, bounce, and float effects
- **Responsive** - Mobile-first design with breakpoints at sm, md, lg, xl

### Authentication
- **Login** - Email/password with validation, password visibility toggle
- **Register** - Full registration with name, email, password, phone
- **Password Reset** - 3-step flow (email → verify code → new password)
- **Protected Routes** - Cart, checkout, wishlist, and orders require auth
- **Persistent Session** - Token stored in localStorage with React Context sync

### UI/UX
- **Sticky Navbar** - Blur backdrop on scroll, search bar, mobile drawer
- **Skeleton Loading** - Shimmer animations while data loads
- **Empty States** - Friendly illustrations when cart/wishlist is empty
- **Toast Notifications** - Success, error, and info messages
- **Breadcrumbs** - Navigation context on all inner pages
- **Scroll to Top** - Automatic scroll reset on route change

## Tech Stack

| Category | Technology |
|----------|------------|
| Framework | React 18 |
| Build Tool | Vite 5 |
| Routing | React Router DOM 7 |
| Styling | Tailwind CSS 3 |
| State Management | React Context API |
| Data Fetching | Axios + TanStack React Query 5 |
| Forms | Formik + Yup |
| Carousels | React Slick |
| Notifications | React Hot Toast |
| Icons | Font Awesome 6 |

## Project Structure

```
src/
├── components/
│   ├── Allorders/          # Order history page
│   ├── Brands/             # Brands listing page
│   ├── Cart/               # Shopping cart page
│   ├── Catrgories/         # Categories listing page
│   ├── Checkout/           # Checkout with payment
│   ├── FirstSlideHome/     # Hero carousel
│   ├── Footer/             # Site footer
│   ├── ForgetPassword/     # Password reset step 1
│   ├── Home/               # Home page
│   ├── Layout/             # Root layout (Navbar + Outlet + Footer)
│   ├── Loading/            # Full-page loading spinner
│   ├── Loadingsmall/       # Inline loading spinner
│   ├── Login/              # Login page
│   ├── Navbar/             # Navigation bar
│   ├── Notfound/           # 404 page
│   ├── Products/           # Products listing page
│   ├── ProductsRecent/     # Product cards + skeleton
│   ├── ProtectedRouts/     # Auth route guard
│   ├── ScrollToTop/        # Scroll reset on navigation
│   ├── SimpleSlider/       # Category carousel
│   └── regregister/        # Registration page
├── Context/
│   ├── CartContext.jsx      # Cart state & API calls
│   ├── TokenContext.jsx     # Auth token state
│   └── Usercontext.jsx      # User profile state
├── Details/                 # Product details page
├── ResetPassword/           # Password reset step 3
├── VerifyCode/              # Password reset step 2
├── WishList/                # Wishlist page
├── App.jsx                  # Router & context providers
├── App.css                  # Global styles
├── index.css                # Tailwind imports & design system
└── main.jsx                 # Entry point
```

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/luxestore.git
cd luxestore

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `primary` | `#CAAA98` | Buttons, links, accents, star ratings |
| `primary-dark` | `#B89580` | Button hover states |
| `secondary` | `#202940` | Page backgrounds |
| `surface` | `#2A3350` | Card backgrounds |
| `surface-light` | `#343D55` | Borders, dividers |
| `muted` | `#9A8678` | Secondary text |
| `success` | `#22C55E` | In stock, free shipping |
| `warning` | `#F59E0B` | Alerts, warnings |
| `error` | `#EF4444` | Errors, out of stock |

### Component Classes

```jsx
// Buttons
<button className="btn-primary btn-md">Primary</button>
<button className="btn-secondary btn-md">Secondary</button>
<button className="btn-outline btn-md">Outline</button>
<button className="btn-ghost btn-md">Ghost</button>

// Inputs
<input className="input" />
<input className="input-error" />

// Cards
<div className="card">Static card</div>
<div className="card-hover">Card with hover effect</div>

// Badges
<span className="badge-primary">Label</span>
<span className="badge-success">Success</span>
<span className="badge-error">Error</span>

// Skeleton Loading
<div className="skeleton h-4 w-full rounded" />
```

### Animations

```jsx
<div className="animate-fade-in">Fade in</div>
<div className="animate-fade-in-up">Fade in from bottom</div>
<div className="animate-slide-in-right">Slide in from right</div>
<div className="animate-shimmer">Shimmer effect</div>
<div className="animate-bounce-in">Bounce in</div>
```

## API

This app consumes the [RouteMisr eCommerce API](https://ecommerce.routemisr.com/api/v1/):

| Endpoint | Method | Auth | Description |
|----------|--------|------|-------------|
| `/products` | GET | No | List all products |
| `/products/:id` | GET | No | Product details |
| `/categories` | GET | No | List categories |
| `/categories/:id` | GET | No | Category details |
| `/brands` | GET | No | List brands |
| `/auth/signin` | POST | No | Login |
| `/auth/signup` | POST | No | Register |
| `/auth/forgotPasswords` | POST | No | Request password reset |
| `/auth/verifyResetCode` | POST | No | Verify reset code |
| `/auth/resetPassword` | PUT | No | Reset password |
| `/cart` | GET/POST/DELETE | Yes | Cart operations |
| `/wishlist` | GET/POST/DELETE | Yes | Wishlist operations |
| `/orders/checkout-session/:id` | POST | Yes | Create Stripe session |

## Key Design Decisions

1. **Public browsing** - Products are visible to all users. Auth is only required for actions (add to cart, checkout, wishlist). This improves SEO and reduces friction.

2. **Dark theme** - The `#202940` navy background with `#CAAA98` beige accents creates a premium, luxury feel suitable for high-end eCommerce.

3. **Component-based cards** - `ProductCard` and `ProductCardSkeleton` are reusable components used across home, products, and related sections.

4. **React Context over Redux** - With only 3 state slices (auth, user, cart), Context API is sufficient and avoids extra dependencies.

5. **Hash Router** - Used `createHashRouter` for compatibility with static hosting (GitHub Pages, Netlify). Switch to `createBrowserRouter` if using a server with proper routing.

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

MIT
