console.log("This is tutorial 51.js");

//Iterators

function fruitsIterator(values) {

    let nextIndex = 0;
    // we will return an Object
    return {

        next: function() {

            if (nextIndex < values.length) {
                // it will return below object
                return {
                    // it will return below object with only done.
                    value: values[nextIndex++],
                    done: false

                }
            } else {

                return {
                    done: true

                }
            }

        }

    }
}
const myArray = ['Apples', 'Oranges', 'Mango', 'Bhindi'];
console.log("My Array is = ", myArray);

// Using Iterator

const fruitsArray = fruitsIterator(myArray);
console.log(fruitsArray.next().value);
console.log(fruitsArray.next().value);
console.log(fruitsArray.next().value);
console.log(fruitsArray.next().value);