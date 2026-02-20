
const fs = require('fs');

/**
 * async processes
 */
const getProductByName = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./../data/products.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                const product = json.find(product => product.name === name);

                if (product) {
                    resolve(product);
                } else {
                    err = {message: "Not found", code: 404};
                    reject(err);
                }
            }
        });
    })
}

const getStoreById = (id) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./../data/stores.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                const store = json.find(store => store.id === id);

                if (store) {
                    resolve(store);
                } else {
                    err = {message: "Not found", code: 404};
                    reject(err);
                }
            }
        });
    })
}

const getCityByName = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./../data/cities.json', 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                const json = JSON.parse(data);
                const city = json.find(city => city.name === name);

                if (city) {
                    resolve(city);
                } else {
                    err = {message: "Not found", code: 404};
                    reject(err);
                }
            }
        });
    })
}

const getCityByProductName = async (productName) => {
    getProductByName(productName)
        .then(product => {
            return getStoreById(product.store_id); // تصحيح هنا
        })
        .then(store => {
            return getCityByName(store.city);
        })
        .then(city => {
            console.log(city);
        })
        .catch(err => {
            console.log(err.message);
        });
};

getCityByProductName('Tea Ahmad');

