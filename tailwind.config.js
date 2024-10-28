module.exports = {
    theme: {
      colors: {
        // Create a custom color that uses a CSS custom value
        primary: "rgb(var(--color-values) / <alpha-value>)",
      },
    },
    plugins: [
      // Set a default value on the `:root` element
      ({ addBase }) => addBase({
          ":root": {
            "--color-values": "255 0 0",
            "--color-rgb": "rgb(255 0 0)"
          }
      }),
    ],
};


