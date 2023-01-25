import React from 'react'
import { useDispatch, useSelector, useStore } from 'react-redux';
import { useForm } from 'react-hook-form';
import { chooseDistiller, chooseVariety, chooseYear, chooseTastingNotes } from '../../redux/slices/RootSlice';
import { Input } from '../SharedComponents/Input'
import { Button } from '@material-ui/core';
import { server_calls } from '../../api';



interface WhiskeyFormProps {
    id?: string;
    data?: {}
};

interface WhiskeyState{
    distiller: string;
    variety: string;
    year: string;
    tasting_notes: string;
}

export const WhiskeyForm = (props:WhiskeyFormProps) => {

    const dispatch = useDispatch(); 
    const store = useStore();
    const name = useSelector<WhiskeyState>(state => state.distiller);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            console.log(data.distiller)
            console.log(data.variety)
            console.log(data.year)
            console.log(data.tasting_notes)
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            console.log(data.distiller)
            console.log(data.variety)
            console.log(data.year)
            console.log(data.tasting_notes)
            dispatch(chooseDistiller(data.distiller));
            dispatch(chooseVariety(data.variety));
            dispatch(chooseYear(data.year));
            dispatch(chooseTastingNotes(data.tasting_notes));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="Distiller">Whiskey Distiller</label>
                    <Input {...register('distiller')} name="distiller" placeholder='distiller'/>
                </div>
                <div>
                    <label htmlFor="Variety">variety</label>
                    <Input {...register('variety')} name="variety" placeholder='variety'/>
                </div>
                <div>
                    <label htmlFor="Year">Year</label>
                    <Input {...register('year')} name="year" placeholder='year'/>
                </div>
                <div>
                    <label htmlFor="tasting_notes">Tasting Notes</label>
                    <Input {...register('tasting_notes')} name="tasting_notes" placeholder='tasting notes'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
