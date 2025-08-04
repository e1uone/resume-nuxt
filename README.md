# Small Questionnaire App for [KCG.market](https://kcg.market)

## Key Features

**Form Validation:** Robust form validation using Zod and vee-validate
**Field Masking:** Masking for phone numbers and other fields
**PDF Generation:** Export questionnaires as PDF with html2pdf.js
**Responsive Design:** Built with Tailwind CSS for all device sizes
**Dark Mode:** Native dark mode support via Nuxt Color Mode
**Form Persistence:** Auto-saves form data to localStorage

## Technical Highlights

🛡️ **Type Safety**

- Full TypeScript support with strict type checking
- Comprehensive type definitions for all components and utilities

🚀 **Modern Vue 3**

- Composition API with `<script setup>` syntax
- Reactive state management with ref and computed
- Custom composables for reusable logic

🎨 **UI Components**

- Shadcn Vue for accessible, unstyled components
- Radix Vue primitives for building design systems
- Tailwind CSS for utility-first styling
- Lucide for beautiful, consistent icons

📝 **Form Management**

- Zod for schema validation
- vee-validate for form state management
- Custom form components with Radix Form
- Real-time validation and error handling

🛠️ **Build & Tooling**

- Nuxt 4 with Vite for fast development
- ESLint + Prettier for code consistency
- Husky + lint-staged for pre-commit hooks
- TypeScript integration out of the box

🔄 **Development Workflow**

- Hot Module Replacement (HMR)
- Git hooks for code quality
- Automated code formatting on commit

## Technologies Used

**Nuxt 4:** The Intuitive Web Framework
**Vue 3:** Progressive JavaScript Framework
**TypeScript:** Type-Safe JavaScript
**Tailwind CSS:** Utility-First CSS Framework
**Shadcn Vue:** Beautifully Designed Components
**VeeValidate:** Form Validation
**Zod:** TypeScript-First Schema Validation
**html2pdf.js:** Client-side PDF Generation

## Project Structure

resume-nuxt/
├── app/
│   ├── assets/           # Static assets (images, fonts, global CSS)
│   ├── components/       # Reusable Vue components
│   │   └── ui/           # Shadcn Vue components
│   ├── composables/      # Vue composables
│   ├── constants/        # Application constants
│   ├── plugins/          # Vue plugins
│   ├── types/            # TypeScript type definitions
│   └── utils/            # Utility functions
│       └── validators/   # Custom form validators
├── server/               # API routes and server utilities
└── public/               # Publicly accessible files

## How to use

### Install dependencies

```bash
yarn install
```

### Start development server

```bash
yarn dev
```

### Build for production

```bash
yarn build
```

### Typechecking Linting and formatting

```bash
yarn typecheck
yarn lint
yarn format
```
