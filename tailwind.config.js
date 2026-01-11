/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}"],
    theme: {
        extend: {
            colors: {
                // M3 expone variables como --mat-sys-primary
                primary: 'var(--mat-sys-primary)',
                secondary: 'var(--mat-sys-secondary)',
                surface: 'var(--mat-sys-surface)',
            }
        },
    },
    plugins: [],
}