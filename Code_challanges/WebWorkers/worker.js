// Function to handle messages from the main thread
self.onmessage = (event) => {
  console.log(event.data);
  // Get the message sent from the main thread
  const message = event.data;
  // Perform some time-consuming task
  const result = doTimeConsumingTask(message);
  // Send the result back to the main thread
  self.postMessage(result);
};

function doTimeConsumingTask(msg) {
  // Simulate a time-consuming task by delaying for a few seconds
  // In reality, you might perform complex calculations, data processing, etc.
  const startTime = new Date().getTime();
  while (new Date().getTime() - startTime < 3000);

  return "Result: " + msg.toUpperCase();
}
