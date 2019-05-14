exports.handler = function(context, event, callback) {
    console.log(`test.js running...`);
    
    callback(null, 'hello world');
}