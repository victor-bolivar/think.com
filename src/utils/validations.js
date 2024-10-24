export function validatePassword(password) {
    const errors = [];

    if (password.length < 8) {
        errors.push("Password must be at least 8 characters long.");
    }
    if (password.length > 32) {
        errors.push("Password must not exceed 32 characters.");
    }
    if (!/[A-Z]/.test(password)) {
        errors.push("Password must contain at least one uppercase letter.");
    }
    if (!/[a-z]/.test(password)) {
        errors.push("Password must contain at least one lowercase letter.");
    }
    if (!/[0-9]/.test(password)) {
        errors.push("Password must contain at least one number.");
    }
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push("Password must contain at least one special character.");
    }

    return errors.length > 0 ? errors : null;
}

export function validateUsername(username) {
    const errors = [];

    if (username.length < 3) {
        errors.push("Username must be at least 3 characters long.");
    }
    if (username.length > 20) {
        errors.push("Username must not exceed 20 characters.");
    }
    if (!/^[a-zA-Z0-9_]+$/.test(username)) {
        errors.push("Username can only contain letters, numbers, and underscores.");
    }

    return errors.length > 0 ? errors : null;
}
