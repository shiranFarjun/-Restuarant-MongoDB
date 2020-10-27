const mongoose = require('mongoose');
// const validator = require('validator')

const func = (value) => {
    if (value[0] < -90 && value[0] > 90) {
        throw new Error('Number must be a between -90 to 90')
    }
    if (value[0] < -90 && value[0] > 90) {
        throw new Error('Number must be a between -90 to 90')
    }
    return value.length == 2
}

const= mongoose.model('Rest', {
    name: {
        type: String,
        required: true
    },
    address: {
        building: {
            type: Number,
        },
        coords: {
            type: [Number],
            validate: [func, 'not a validate number']
        },
        street: {
            type: String,
        },
        zipcode: {
            type: Number,
        }
    },
    borough: {
        type: String,
    },
    cuisine: {
        type: String,
    },
    restuarant_id: {
        type: Number,
        required: true,
        validate(value) {
            if (value < 0) {
                console.log('Restuarant_id value cant by equals to zero');
            }
        }
    }
})


module.exports = Restuarant