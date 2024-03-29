<!-- names in .env will be in uppercase and separated by _ -->
<!-- any var name will be written in camelCase -->
<!-- prefer to import any core or 3rd module before internal ones -->
<!-- don't forget it's a must to confirm the global Errors middle ware before listening directly
just to make sure that the result message will appear in a string json form -->

# Naming Conventions and Module Imports

## Environment Variables in .env File

- Names in the `.env` file should be in uppercase and separated by underscores.

# Important Reminder

It is crucial to confirm the presence of the global error middleware before directly starting the server. This ensures that any resulting error messages appear in a JSON string format.

## Why?

In the context of a Node.js or Express.js application, the global error middleware is a function responsible for handling errors that may occur during the processing of requests. It is typically added using `app.use` and should be defined before initiating the server to listen for incoming requests.

## How to Confirm

Ensure that you have a global error middleware set up in your code, similar to the following example:

#   P E R S O N A L - S Y S T E M - T A S K - M A N A G E M E N T 
 
 #   P E R S O N A L - S Y S T E M - T A S K - M A N A G E M E N T 
 
 