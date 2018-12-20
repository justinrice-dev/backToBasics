### Fundamentals

This is a project that will help you define testing and fundamentals. THere is a JSON document that contains 36 random people and their profile information.

### Setup

For this exercise to work to its fullest extent you will need to have the following installed:

- Node
- NPM
- Some form of IDE (preferrably VSCODE)
- Mocha
- Chai

If you want a challenge, set up a function that goes and gets the results from this api:

```
https://my.api.mockaroo.com/people.json?key=f656cb80
```

### Working with this project
1. Fork this repository.
2. Clone it to your computer
3. Open this folder and its contents within your favorite editor.
4. Within the terminal run the following command

```
npm install -g mocha chai
```

The above command will install thew two packages mocha and chai to your computer so you can test your functions going forward.

Test it out by running:

```
npm test
```

This runs all the tests within the test folder. Go ahead and open the arrays.text.js
This currently just takes an array and returns the first index of the array using the getOne method on the arrays.js document.
