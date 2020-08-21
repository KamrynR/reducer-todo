export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_COMPLETED = 'TOGGLE_COMPLETED';
export const CLEAR_COMPLETED = 'CLEAR_COMPLETED';
export const initialState = {
    todoListInitial: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        },
        {
            item: 'Clean room',
            completed: false,
            id: 3892987590
        }
    ]
};
export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return {...state,todoListInitial: [...state.todoListInitial,{
                item: action.payload,
                id: new Date()
            }]};
        case 'TOGGLE_COMPLETED':
            return {
                todoListInitial: state.todoListInitial.map((x) => {
                    // console.log(x.id);
                    // console.log(action.payload);
                    if (x.id === action.payload) {
                        return { ...x, completed: !x.completed};
                    } else {return x;}
                })
            };
        case 'CLEAR_COMPLETED':
            return {
                todoListInitial: state.todoListInitial.filter((x) => x.completed !== true)
            };
        default:
            return state;
    }
}
