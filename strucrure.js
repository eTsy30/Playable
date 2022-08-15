export class IndexKeyCollection {
    constructor() {
        this.arr = []
        this.obj = {}
    }
    getIndex(index) {
        const key = this.arr[index]
        return this.obj[key]
    }

    getKey(key) {
        return this.obj[key]
    }

    set(key, value) {
        this.obj[key] = value
        this.arr.push({ key, value })
    }

    has(key) {
        return this.obj[key] !== undefined
    }
    removeIndex(index) {
        const key = this.arr[index]

        delete this.obj[key]
        this.arr.splice(index, 1)

        return this.arr
    }
    removeKey(key) {
        const localKey = this.arr[index]
        const index = this.arr.indexOf(key)

        delete this.obj[localKey]
        this.arr.splice(index, 1)

        return this.arr
    }
}


