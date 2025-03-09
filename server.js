const miniExpress = require('./miniExpress');
const app = new miniExpress();


app.route('get', '/', (req, res) => {
    res.sendFile('./public/index.html', 'text/html');
});
app.route('get', '/style.css', (req, res) => {
    res.sendFile('./public/style.css', 'text/css');
});
app.route('get', '/script.js', (req, res) => {
    res.sendFile('./public/script.js', 'text/script');
});
app.route('post', '/loginpage', (req, res) => {
    res.json({ message: 'Login page is post method' });
});
app.route('get', '/reg', (req, res) => {
    res.json({ message: 'Registration page get method' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});