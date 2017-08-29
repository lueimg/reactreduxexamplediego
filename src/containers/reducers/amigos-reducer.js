
const defaultValues = [
    'jose',
    'carlos',
    'miguel',
    'isaac',
    'diego'
]

export default function amigosReducer (state = defaultValues , action ) {
    switch (action.type) {
        default:
            return state;
    }
}