// export  const setCurrenUser = user => ({
//     type: 'SET_CURRENT_USER',
//     payload:user
// });

import {userActionTypes} from './user.types'

export const setCurrenUser = user => ({
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
})