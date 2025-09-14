# Smoothie Bowl Website

A modern, elegant website showcasing smoothie bowl recipes with mixed reality compatibility.

## Features

### Home Page
- **3 Recipe Cards**: Mixed Berry, Chocolate Peanut Butter & Banana, and Tropical Mango & Pineapple
- **Responsive Design**: Cards arrange horizontally on desktop and stack vertically on mobile
- **Smooth Hover Animations**: Cards lift and scale with elegant transitions
- **Glass Morphism Design**: Modern frosted glass aesthetic

### Recipe Detail Pages
- **4-Block Layout**:
  - Left: Ingredients list with interactive checkboxes
  - Middle Top: Video player with custom controls
  - Middle Bottom: Empty section (customizable)
  - Right: Instructions list with step-by-step checkboxes

### Interactive Features
- **Ingredient Hover Effects**:
  - Items zoom and scale on hover
  - Background smoothly transitions to ingredient image with frost effect
  - Checkbox animations when checked/unchecked

- **Instruction Checkboxes**:
  - Smooth animations when checking/unchecking
  - Visual feedback with scaling and opacity changes
  - Progress tracking through recipe steps

### Mixed Reality Compatibility
The application includes CSS custom properties for easy mixed reality customization:

```css
/* Component backgrounds */
--mr-background-opacity: 0.9;
--mr-blur-intensity: 10px;
--mr-glass-effect: rgba(255, 255, 255, 0.1);

/* Ingredient interactions */
--mr-ingredient-bg: rgba(255, 255, 255, 0.8);
--mr-ingredient-hover-scale: 1.05;
--mr-frost-opacity: 0.1;

/* Video container styling */
--mr-video-bg: rgba(0, 0, 0, 0.1);
--mr-video-border: rgba(255, 255, 255, 0.3);
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Home.jsx              # Home page with recipe cards
│   ├── Home.css
│   ├── RecipeDetail.jsx      # Recipe detail page
│   ├── RecipeDetail.css
│   ├── IngredientsList.jsx   # Interactive ingredients
│   ├── IngredientsList.css
│   ├── InstructionsList.jsx  # Step-by-step instructions
│   ├── InstructionsList.css
│   ├── VideoPlayer.jsx       # Video component
│   └── VideoPlayer.css
├── App.jsx                   # Main app component
├── App.css                   # Global styles and MR variables
└── main.jsx                  # App entry point
```

## Customization for Mixed Reality

To modify the application for mixed reality use:

1. **Update CSS Variables**: Modify the `--mr-*` variables in `App.css` to adjust:
   - Background opacity and blur effects
   - Hover scale factors
   - Color schemes and transparency levels

2. **Component Backgrounds**: Each major component uses CSS custom properties that can be easily overridden for different MR environments.

3. **Responsive Behavior**: The application automatically adapts to different screen sizes and input methods.

## Technologies Used

- **React 18**: Component framework
- **Vite**: Build tool and development server
- **React Router DOM**: Client-side routing
- **CSS3**: Modern styling with custom properties
- **Glass Morphism**: Modern UI design trend

## Browser Support

- Chrome/Chromium-based browsers (recommended)
- Firefox
- Safari
- Edge

Mixed reality features work best in browsers with full backdrop-filter support.
