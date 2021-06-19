let faker = require('faker');

// randomly 500 email
for(let i = 0; i <= 500; i++){
    let randomEmail = faker.internet.email();
    let randomDate = faker.date.past();
    console.log(randomEmail);
    console.log(randomDate);
}