import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        distiller: 'Distiller',
        variety: 'Variety',
        year: 'Year',
        tastingNotes: 'Color',
    },
    reducers: {
        chooseDistiller: (state, action) => { state.distiller = action.payload},
        chooseVariety: (state, action) => { state.variety = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseTastingNotes: (state, action) => { state.tastingNotes = action.payload }

    }
})

//Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseDistiller, chooseVariety, chooseYear, chooseTastingNotes } = rootSlice.actions;