import React from 'react';
import '../App.css'
import {TextField} from "@mui/material";

const TextInput = ({input, meta, placeholder}) => {

    return (
        <TextField
            error={!!(meta.error && meta.touched)}
            fullWidth={true}
            label={placeholder}
            variant="filled"
            helperText={meta.error && meta.touched ? meta.error : ''}
            inputProps={{...input}}
            margin="normal"
        />
    );
};

export default TextInput;