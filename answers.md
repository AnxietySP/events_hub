cat << 'EOF' >> answers.md

## Practical III

### Q1: What is the purpose of the viewport meta tag?
It ensures proper scaling and responsive rendering on mobile devices by setting the width to match the device screen (`width=device-width`) and initial zoom level to 1.0 (`initial-scale=1.0`).

### Q2: Why load Bootstrap CSS in <head> and Bootstrap JS before </body>?
Bootstrap CSS is loaded in `<head>` so styles render before page content to prevent unstyled content flashes (FOUC). Bootstrap JS is loaded before `</body>` to prevent scripts from blocking DOM rendering.

### Q3: Difference between .container and .container-fluid?
`.container` uses responsive fixed-width thresholds (`sm`, `md`, `lg`, etc.), while `.container-fluid` spans 100% of the viewport width across all screens.

### Q4: How does Bootstrap's 12-column grid system work across breakpoints?
It divides each row into 12 equal columns. Column classes (`col-sm-*`, `col-md-*`, `col-lg-*`) specify how many columns an element spans across viewport size thresholds.

### Q5: Purpose of data-bs-ride="carousel" and data-bs-target?
`data-bs-ride="carousel"` automatically starts cycling the carousel when the page loads. `data-bs-target` connects control buttons to the target carousel container ID (`#eventCarousel`).

### Q6: Why keep name attributes unchanged when adding Bootstrap classes?
`name` attributes serve as key identifiers during form data submission to backend scripts; modifying them breaks backend data collection.
EOF

git add answers.md
git commit -m "Add Practical III Quick Check Q1-Q6 answers"
git push origin practical-3

