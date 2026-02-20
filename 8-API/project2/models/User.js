const { dbConnection } = require('../configurations');
const { userValidator, loginValidator } = require('../validators');
const { hashSync, compareSync } = require('bcryptjs');
class User
{
    constructor(userData){
        this.userData = userData;
    }

    save(cb) {
        dbConnection('users', async (collection) => {
            try {
                const hashedPassword = hashSync(this.userData.password);
                this.userData.password = hashedPassword;
                await collection.insertOne(this.userData)
                    .then(result => {
                        cb({
                            status: true,
                            _user_id: result.insertedId
                        })
                    })

                // const newUser = collection.findOne({email: this.userData.email})
                // cb({
                //     status: true
                //     _user_id: result.insertId
                // })

            } catch (err){
                cb({
                    status: false,
                    message: err.message
                });
            }
        })
    }

    isExist() {
        return new Promise((resolve, reject )=> {
            dbConnection('users', async (collection) => {
                try {
                    const user = await collection.findOne({
                        '$or': [
                            {username: this.userData.username},
                            {email: this.userData.email}
                        ]
                    })
                    if (!user) {
                        resolve ({
                            check: false
                        })
                    } else {
                        if (user.email === this.userData.email) {
                            resolve ({
                                check: true,
                                message: 'The emali is already used'
                            })
                        } else if (user.username === this.userData.username) {
                            resolve ({
                                check: true,
                                message: 'The username is already used'
                            })
                        }
                    }
                }catch (err){
                    reject(err)
                }
            })
        })
    }
    static validate(userData) {
        try {
            const validationResult = userValidator.validate(userData)
            return validationResult;
        } catch (err) {
            return false
        }
    }

    static login(loginData) {
        return new Promise((resolve, reject) => {
            const validation = loginValidator.validate(loginData)
            if (validation.error) {
                resolve({
                    status: false,
                    message: validation.error.message,
                    code: 400
                })
            }
            dbConnection('users', async (collection) => {
                try {
                     const dbResult = await collection.aggregate([
                        {
                            $lookup: {
                                from: 'reviewers',
                                localField: '_id',
                                foreignField: '_user_id',
                                as: 'reviewer'
                            }
                        },
                         {
                             $match: {
                                 username: loginData.username
                             }
                         },
                         {
                             $limit: 1
                         }
                     ]).toArray()

                     if (dbResult) {
                        const user = dbResult[0]
                         if (!user || !compareSync(loginData.password, user.password)) {
                             resolve({
                                 status: false
                             })
                         }

                         user.reviewer = (user.reviewer) ? user.reviewer[0] : null

                         resolve({
                            status: true,
                            data: user
                         })
                     }else {
                        resolve({
                            status: false
                        })
                     }
                }catch (err){
                    reject({
                        status: false,
                        message: err.message
                    })
                }
            })

        })
    }
}

module.exports = User;
// const userData ={
//     name: "Ahmed Ali",
//     email:'Ahmed@gmail.com',
//     username: 'Ahmed',
//     password: '123Ahmed'
// }
// const user = new User(userData)


// console.log(user)
// console.log(user.userData)
// console.log(user.userData.email)

// user.save()
// console.log(User.validate());

// console.log(valResult.error.message)
// console.log(valResult)

// if (valResult.error) {
//
// } else {
//
// }

// user.isExist()
//     .then(status =>{
//         console.log(status)
        // if(!status.check){
        //     // user.save()
        // }
    // })
    // .catch()