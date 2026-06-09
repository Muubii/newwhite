# NewWhite — React Storefront

A minimalist clothing brand web app built with React and React Router. Clean warm aesthetic with a dark brown / gold / beige colour palette.

***

## Tech Stack

| Tool | Purpose |
|------|---------|
| React 18 | UI framework |
| React Router v6 | Client-side routing |
| Context API | Global cart state |
| CSS (vanilla) | Styling — no Tailwind or UI lib |
| Create React App | Project scaffold |

***

## Project Structure

```
src/
├── pages/
│   ├── Home.jsx          # Landing page (hero, who we are, collection slideshow)
│   ├── Clothes.jsx       # Full clothes listing
│   ├── About.jsx         # Brand story
│   ├── Contact.jsx       # Contact info
│   └── Cart.jsx          # Shopping cart
│
├── Components/
│   ├── Navbar.jsx        # Sticky top nav with cart count badge
│   └── Footer.jsx        # Footer with ✦ logo, links, NewWhite wordmark
│
├── css/
│   ├── home.css          # All homepage section styles
│   ├── navbar.css        # Navbar styles
│   ├── footer.css        # Footer styles
│   ├── animations.css    # Shared scroll reveal animations
│   └── pages.css         # Shared styles for inner pages
│
├── source/
│   └── vid.mp4           # Hero background video
│
├── App.jsx               # Router + CartContext provider
└── index.js              # React entry point

public/
└── index.html            # Canvas-generated ✦ favicon injected at runtime
```

***

## Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Hero video, Who We Are, Collection slideshow |
| `/clothes` | Clothes | Full product listing |
| `/about` | About | Brand story |
| `/contact` | Contact | Contact details |
| `/cart` | Cart | Cart items, remove, clear |

***

## Cart System

Cart state is managed globally via React Context (`CartContext`) defined in `App.jsx`.

```js
const { cart, addToCart, removeFromCart, clearCart } = useContext(CartContext);
```

- `addToCart(item)` — adds an item object to the cart array
- `removeFromCart(index)` — removes item at given index
- `clearCart()` — empties the entire cart
- Cart count is shown as a badge in the Navbar when `cart.length > 0`

***

## Favicon

The favicon is generated at runtime via an HTML Canvas script in `public/index.html`. No image file needed.

- **Background:** `#2C1F14` (dark brown, rounded square)
- **Icon:** `✦` in `#E8C98A` (warm gold)
- Any existing `<link rel="icon">` is removed before injection to avoid conflicts

***

## Colour Palette

| Name | Hex | Used for |
|------|-----|---------|
| Dark Brown | `#2C1F14` | Navbar, footer, buttons |
| Warm Brown | `#3B2A1A` | Who We Are section background |
| Gold | `#E8C98A` | Headings, accents, ✦ logo |
| Tan | `#C9A97E` | Body text on dark backgrounds |
| Muted Tan | `#B89A72` | Navigation links |
| Beige | `#F5EDD8` | Page background |
| Off-white | `#FAF7F1` | Collection right panel |

***

## Collection Slideshow

The left panel of the Collection section auto-cycles through 4 images every **5 seconds** with a fade + Ken Burns zoom transition. Users can also click the dot indicators to jump to any slide manually.

```js
useEffect(() => {
  const timer = setInterval(() => {
    setActiveSlide((prev) => (prev + 1) % slideImages.length);
  }, 5000);
  return () => clearInterval(timer);
}, []);
```

***

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

> Make sure `src/source/vid.mp4` exists — the hero section requires a video file for the background.

***

## Notes

- `/returns` and `/shop` are not standalone routes — footer links pointing to them redirect to `/clothes` and `/` respectively
- All navigation uses `<Link to="...">` from React Router — no `<a href>` — to prevent full page reloads
- No `localStorage` or `sessionStorage` is used; cart state resets on page refresh
