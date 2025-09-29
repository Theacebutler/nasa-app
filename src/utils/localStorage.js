

export function setItem(key, value) {
    try {
        window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
        console.log(err);
    }
}

export function getItem(key) {
    try {
        const data = window.localStorage.getItem(key)
        return data ? JSON.parse(data) : null;
    } catch (err) {
        console.log(err)
    }
}