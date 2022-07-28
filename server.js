const { query } = require('express');
const express = require('express');
const app = express();
const port = 3000;

// app.use('/verify/:token', secure);

// app.get('/', (req, res) => {
// 	console.log('token');
// });
app.get('/verify/:token', secure, (req, res) => {
	console.log('token');
	res.send('Hallo world!');
});

function secure(req, res, next) {
	if (req.params.token && req.params.token.length > 3) {
		next();
		return;
	} else {
		res.status(403).send('the token hasn’t any value or doesn’t exist');
	}
}

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
