import { constanse } from "../Constanse/Constanse"

export const addContact = (user) => {
    return{
        type: constanse.ADD_CONTACT,
        payload: user
    }
}

export const updateContact = (user) => {
    return{
        type: constanse.UPDATE_CONTACT,
        payload: user
    }
}
export const deletContact = (id) => {
    return{
        type: constanse.DELET_CONTACT,
        payload: id
    }
}