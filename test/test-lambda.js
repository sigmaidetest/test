let AWS = require('aws-sdk');
let connectionManager = require('./ConnectionManager');
const rds = new SL.RDS(connectionManager);
let SL = require('slappforge-aws');
const sqs = new SL.AWS.SQS();
exports.handler = function (event, context, callback) {
	sqs.receiveMessage({
		QueueUrl: 'https://sqs.us-east-1.amazonaws.com/480964559519/Hiru_Test1201',
		AttributeNames: ['All'],
		MaxNumberOfMessages: '1',
		VisibilityTimeout: '30',
		WaitTimeSeconds: '0'
	}, function (receivedMessages) {
		receivedMessages.forEach(message => {
			// your logic to access each message through out the loop. Each message is available under variable message 
			// within this block
		})
	}, function (error) {
		// implement error handling logic here
	});



	// Replace the query with the actual query
	rds.query({
		identifier: 'test3',
		query: '<query>',
		transactional: false
	}, function (error, results, fields) {
		if (error) {
			console.log("Error occurred");
			throw error;
		} else {
			console.log("Success")
			console.log(results);
		}
	});
	callback(null, 'Successfully executed');
}