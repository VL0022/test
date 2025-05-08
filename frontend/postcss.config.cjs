module.exports = {
  plugins: {
    // Process Tailwind directives first
    tailwindcss: {},
    autoprefixer: {},
    // Existing Mantine and variable support
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
  },
}; 