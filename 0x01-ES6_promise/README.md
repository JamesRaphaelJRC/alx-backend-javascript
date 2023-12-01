# ES6 Promise

![Promise ](https://cdn.programiz.com/sites/tutorial2program/files/javascript-promise-chaining.png)

## Excercises covered

### Task 0: [0-promise.js](https://github.com/JamesRaphaelJRC/alx-backend-javascript/blob/main/0x01-ES6_promise/0-promise.js)
Returns a Promise using this prototype `function getResponseFromAPI()`

### Task 1: [1-promise.js](https://github.com/JamesRaphaelJRC/alx-backend-javascript/blob/main/0x01-ES6_promise/1-promise.js)
Returns a promise using the prototype

`getFullResponseFromAPI(success)` \\ The parameter is a boolean.

When the argument is:

    true
        resolve the promise by passing an object with 2 attributes:
           `status: 200
            body: 'Success'`
    false
        reject the promise with an error object with the message `The fake API is not working currently`


### Task 2: [2-then.js](https://github.com/JamesRaphaelJRC/alx-backend-javascript/blob/main/0x01-ES6_promise/2-then.js)
Using the function prototype below

`function handleResponseFromAPI(promise)`

Append three handlers to the function:

    When the Promise resolves, return an object with the following attributes
       `status: 200
        body: success`
    When the Promise rejects, return an empty Error object
    For every resolution, log `Got a response from the API to the console`

### Task 3: [3-all.js](https://github.com/JamesRaphaelJRC/alx-backend-javascript/blob/main/0x01-ES6_promise/3-all.js)
In this file, import `uploadPhoto` and `createUser` from `utils.js`

Knowing that the functions in `utils.js` return promises, use the prototype below to collectively resolve all promises and log `body firstName lastName` to the console.

    function handleProfileSignup()

In the event of an error, log `Signup system offline to the console`

### Task 4: [4-user-promise.js](https://github.com/JamesRaphaelJRC/alx-backend-javascript/blob/main/0x01-ES6_promise/4-user-promise.js)
Using the following prototype

    function signUpUser(firstName, lastName) {
    }

Return a resolved promise with this object:

{
  firstName: value,
  lastName: value,
}
