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
    tastingNotes: string;
}

export const WhiskeyForm = (props:WhiskeyFormProps) => {

    const dispatch = useDispatch(); 
    const store = useStore();
    const name = useSelector<WhiskeyState>(state => state.distiller);
    const { register, handleSubmit } = useForm({ })

    const onSubmit = (data:any, event:any) => {
        console.log(props.id)
        if(props.id!){
            server_calls.update(props.id!, data);
            console.log(`Updated:${data} ${props.id}`);
            console.log(data);
            setTimeout( () => {window.location.reload()}, 1000);
            event.target.reset();
        } else {
            dispatch(chooseDistiller(data.distiller));
            dispatch(chooseVariety(data.variety));
            dispatch(chooseYear(data.year));
            dispatch(chooseTastingNotes(data.TaschooseTastingNotes));
            server_calls.create(store.getState());
            setTimeout( () => {window.location.reload()}, 1000)
        }
    }

    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="make">Whiskey Distiller</label>
                    <Input {...register('make')} name="make" placeholder='distiller'/>
                </div>
                <div>
                    <label htmlFor="variety">variety</label>
                    <Input {...register('variety')} name="variety" placeholder='variety'/>
                </div>
                <div>
                    <label htmlFor="Year">Year</label>
                    <Input {...register('year')} name="Year" placeholder='year'/>
                </div>
                <div>
                    <label htmlFor="tastingNotes">Tasting Notes</label>
                    <Input {...register('Tasting Notes')} name="Tasting Notes" placeholder='tasting notes'/>
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}
