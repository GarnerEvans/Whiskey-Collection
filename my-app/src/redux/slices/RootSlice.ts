import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        distiller: 'Distiller',
        variety: 'Variety',
        year: 'Year',
        tasting_notes: 'tasting_notes',
    },
    reducers: {
        chooseDistiller: (state, action) => { state.distiller = action.payload},
        chooseVariety: (state, action) => { state.variety = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
        chooseTastingNotes: (state, action) => { state.tasting_notes = action.payload }

    }
})

//Export Reducer
export const reducer = rootSlice.reducer;
export const { chooseDistiller, chooseVariety, chooseYear, chooseTastingNotes } = rootSlice.actions;