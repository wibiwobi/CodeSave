const res = await fetch('https://prior.ngrok.app/web/patatas_/db/codesave/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'x-api-key': 'pwdb_rw_b8fefb8ecb8da45f2833228aec32382a70bace1cf7c79785'
    },
    body: JSON.stringify({
        name: 'Alice',
        age: 25
    })
});

const doc = await res.json();
console.log(doc); // contains _id