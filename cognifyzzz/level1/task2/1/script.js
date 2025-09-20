function changeColor() {
    const button = document.getElementById("colorButton");

    // List of colors to choose from
    const colors = ["#e74c3c", "#3498db", "#f1c40f", "#9b59b6", "#1abc9c"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Change button background color
    button.style.backgroundColor = randomColor;
}
