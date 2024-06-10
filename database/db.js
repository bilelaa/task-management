const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://bilel:1234@cluster0.jo4ohw0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';


mongoose
	.connect(mongoURI)
	.then(() => {
		console.log('Connected to MongoDB');
		// Start your application or perform additional operations
	})
	.catch((error) => {
		console.error('Error connecting to MongoDB:', error);
	});
