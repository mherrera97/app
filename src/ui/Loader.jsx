import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const Loader = () => {
    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh", padding: 4 }}>
            <Grid item justifyContent="center">
                <CircularProgress />
            </Grid>
        </Grid>
    )
}
