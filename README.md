`GET /api/prime-number/sumandcheck`
 - Takes parameter `numbers` which can be in format of `?numbers=1,2,3` or `?numbers[]=1&numbers[]=2&numbers[]=3`

`GET /api/prime-number/checkprime`
- Takes single number paramater ex. `?number=12`

### Azure
- Currently hosted on azure https://prime-number.azurewebsites.net using [App Services](https://azure.microsoft.com/en-us/services/app-service/). This seems to be the best option.
- Other possibility could be to dockerize the app and use [Kubernets Service](https://azure.microsoft.com/en-us/services/kubernetes-service/)

# Coding assignment

Using NodeJS, implement a backend REST API which:

1. Takes multiple integers as input, calculates the sum, and returns the sum including information whether the sum is a prime number or not.

2. Takes one integer as input, and returns information whether the sum is a prime number or not.

3. How would you host this in Azure?

Using React / your favorite UI stack implement also a frontend UI page to test the API. User should be able to enter 1-n integers that are sent to API endpoint 1, and single integer that is sent to API endpoint 2.

Endpoint 1 could for example (but not necessarily) look like this:

GET http://localhost/myapi/?action=sumandcheck&numbers=1,2,3

-> {"result": 6, "isPrime": false}

Endpoint 2 could for example (but not necessarily) look like this:

GET http://localhost/myapi/?action=checkprime&number=89

-> {"isPrime": true}

Clear and compact code is appreciated.
