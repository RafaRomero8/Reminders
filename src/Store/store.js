import {configureStore} from '@reduxjs/toolkit'
import reminders from '../slice/reminders'


export const store = configureStore({
    reducer:{
        todo:reminders
    }
})