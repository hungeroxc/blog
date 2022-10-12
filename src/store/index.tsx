import { createContext, useContext } from 'react'
import numStore from './numStore'

const createStores = () => {
    return {
        numStore,
    }
}

const stores = createStores()

const StoresContext = createContext(stores)

const useStores = () => useContext(StoresContext)

const getStores = () => {
    const { numStore } = useStores()
    return {
        numStore,
    }
}

export { stores, getStores, StoresContext }
