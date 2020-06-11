console.log("This is tutorial 39 on promise");

function func1() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            const error = true;
            if (!error) {
                console.log("function:your request have been resolved");
                resolve();
            } else {
                console.log("function:your request has not been resolved");
                reject("request is not fulfilled");
            }

        }, 2000);

    });


}
func1().then(function() {
    console.log(" Sumit:Thanks for resolving request");
}).catch(function(err) {
    console.log("Sorry, very bad.Reason: " + err);
});