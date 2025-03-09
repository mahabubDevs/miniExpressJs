function changeColor() {
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a8', '#a833ff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}