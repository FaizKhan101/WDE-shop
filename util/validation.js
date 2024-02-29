const isEmpty = (value) => {
    return !value || value.trim() === ''
}

const userDetailsAreValid = (email, confirmEmail, password, fullname, street, postalCode, city) => {
    return (email && email.includes("@")) && (email === confirmEmail) && (password && password.trim().length >= 6) && !isEmpty(fullname) && !isEmpty(street) && !isEmpty(postalCode) && !isEmpty(city)
}

module.exports = userDetailsAreValid