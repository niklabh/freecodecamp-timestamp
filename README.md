# freecodecamp-timestamp
timestamp parser server for freecodecamp
##API: Timestamp microservice

##User stories:
user can pass a string as a parameter, and it will check to see whether that string
either a unix timestamp or a natural language date (example: January 1, 2016)
it does, it returns both the Unix timestamp and the natural language form of that date.
it does not contain a date or Unix timestamp, it returns null for those properties.

##Example usage:
https://timestamp-ms.herokuapp.com/December%2015,%202015
https://timestamp-ms.herokuapp.com/1450137600
