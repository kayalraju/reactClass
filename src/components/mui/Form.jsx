import { FormControl, FormGroup, InputLabel, Typography, Input, Button, makeStyles } from '@material-ui/core'
import React, { useState } from 'react'

const useStyle = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 27%',
        '& > *': {
            marginTop: 20
        }
    }
})
const initialvalue = {
    name: '',
    email: '',
    phone: '',
    city: ''
}
export const Form = () => {
    const classes = useStyle()
    const [user, setUser] = useState(initialvalue)
    const { name, email, phone, city } = user
    const onValuechange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
        console.log(user);
    }
    const addUserDetails = () => {

    }
    return (
        <div>

            <FormGroup className={classes.container} >
                <Typography variant='h4'>Add User Data</Typography>
                <FormControl>
                    <InputLabel htmlFor='my-input'>Name</InputLabel>
                    <Input name='name' onChange={(e) => onValuechange(e)} value={name} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='my-input'>Email</InputLabel>
                    <Input name='email' onChange={(e) => onValuechange(e)} value={email} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='my-input'>Phone</InputLabel>
                    <Input name='phone' onChange={(e) => onValuechange(e)} value={phone} />
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor='my-input'>City</InputLabel>
                    <Input name='city' onChange={(e) => onValuechange(e)} value={city} />
                </FormControl>
                <FormControl>
                    <Button variant='contained' color='secondary' onClick={() => addUserDetails()}>Add User</Button>
                </FormControl>

            </FormGroup>

        </div>
    )
}
