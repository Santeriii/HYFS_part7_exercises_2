const noteReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_NOTE':
            return state.concat(action.data)
        case 'INIT_NOTES':
            return action.data
        default:
            return state
    }
}

const generateId = () => Number((Math.random() * 100000).toFixed(0))

const date = () => new Date()

export const createNote = (content) => {
    return {
        type: 'NEW_NOTE',
        data: {
            content,
            important: false,
            id: generateId(),
            date: date()
        }
    }
}

export const initializeNotes = (notes) => {
    return {
        type: 'INIT_NOTES',
        data: notes,
    }
}

export default noteReducer