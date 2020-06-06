// excerise 1
const somethingWillHappen = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            resolve('Success 1');
        } else {
            reject('Error 1');
        }
    });
};
somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.error(error));

// exercise 2
const somethingWillHappen2 = () => {
    return new Promise((resolve, reject) => {
        if (true) {
            setTimeout(() => {
                resolve('Success 2');
            }, 3000);
        } else {
            const error = new Error('Error 2');
            reject(error);
        }
    });
};
somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('test'))
    .catch(error => console.error(error));

//excercise 3
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(res => {
        console.log('Array of results', res);

    })
    .catch(err => {
        console.error(err);

    })
