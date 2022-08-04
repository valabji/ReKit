import { configureStore, createAction, createReducer } from '@reduxjs/toolkit'
const change = createAction('change')
const changeReducer = createReducer(
  { obj: { lang: 'en' } },
  {
    [change]: (state, action) => {
      state.obj = action.obj
      return state
    },
  },
)
export const mystore = configureStore({ reducer: changeReducer })
