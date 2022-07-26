import React, { useRef, useState } from 'react';
import Grid from '@mui/material/Grid';
import { ArticleInterface } from './board';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ArticleItem({ article, id, onReadable, onRemove }:ArticleInterface) {
    return (
        <>
            <Grid item sx={{height:'35px', alignItems:'center'}}>
                <Grid container spacing={3}>
                    <Grid item>
                        <Box sx={{paddingTop:'6px'}}>
                            {article.id}
                        </Box>
                    </Grid>
                    <Grid item>
                        <Button id={(article.id).toString()} onClick={onReadable}>
                            {article.subject}
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button id={(article.id).toString()} onClick={onRemove}>DELETE</Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export {ArticleItem};