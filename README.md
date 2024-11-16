# tw-styled

**tw-styled** is a simple utility for styling React components using Tailwind CSS in a structured and reusable way. This library integrates Tailwind CSS with a styled-components-like approach, making it easy to apply consistent styles to your components.

## Features

- Tailwind CSS integration with styled-components-like approach
- Easy to use with Next.js and React
- No dependencies other than Tailwind CSS
- Supports dynamic class merging with `tailwind-merge`

## Installation

To install **tw-styled**, you can use npm or yarn:

```bash
npm install react-tw-styled
```

Usage

```

const buttonClasses = styled(
  `
    bg-white
    text-red-300
    hover:bg-black
    p-4
    rounded-lg
  `
);

<Button className={buttonClasses()}>Show more</Button>
<Button className={buttonClasses('bg-green-300')}>Show more</Button>
```
