/* 63f1a1dc0f1ac8d1c5edcc2ca6a18c0d
 */


/* console.log("HI");

setTimeout(() => {
    console.log("Asynchronous result")
}, 5000);

console.log("Synchronous result") */





/* var url = '"https://jsonplaceholder.typicode.com/posts"'

function get(url) {



    return new Promise(function (resolve, reject) {
        let url = "https://jsonplaceholder.typicode.com/posts";
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.status)
            }
        }

        xhr.send()

    })
}
//console.log(get(url))
get(url).then(function (result) {
    console.log(result)
}).catch(function (error) {
    console.log(Error(error.message))
}).finally(function () {
    console.log(false)
}) */









/*
var url = '"https://jsonplaceholder.typicode.com/posts"'

function get(url) {



    return new Promise(function (resolve, reject) {
        let url = "https://jsonplaceholder.typicode.com/posts";
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);

        xhr.onload = function () {
            if (xhr.status === 200) {
                resolve(xhr.responseText)
            } else {
                reject(xhr.status)
            }
        }
        xhr.send()

    })
}

(async function () {

    try {
        let responses = [];

        responses.push(await get(url[0]));

        let literals = responses.map(function (response) {
            return response
        });

        console.log(JSON.parse(literals))
    } catch (status) {
        return status
    }
    finally {
        console.log("Finally")
    }


})();
 */



//console.log(get(url))
/* get(url).then(function (result) {
    console.log(result)
}).catch(function (error) {
    console.log(Error(error.message))
}).finally(function () {
    console.log(false)
}) */













