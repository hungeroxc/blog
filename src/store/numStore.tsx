import { makeAutoObservable } from 'mobx'

class NumStore {
    num = 1

    constructor() {
        makeAutoObservable(this)
    }

    increase() {
        this.num = this.num + 1
    }
}

export default new NumStore()
