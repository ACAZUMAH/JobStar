
export const validateSignup = {
    name: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide your name',
        },
        isLength: {
            options: { min: 3, max: 30 },
        },
    },
    email: {
        isEmail: true,
        notEmpty: {
            errorMessage: 'please provide your email',
        },
    },
    password: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide your password',
        },
        
    },
}

export const validateLogin = {
    email: {
        isEmail: true,
        notEmpty: {
            errorMessage: 'please provide your email',
        },
    },
    password: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide your password',
        },
    },
}

export const validateJob = {
    company: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide the company name',
        },
    },
    position: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide the position',
        },
    },
    status: {
        isString: true,
        notEmpty: {
            errorMessage: 'please provide the status',
        },
    },
}
