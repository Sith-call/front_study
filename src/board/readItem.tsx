import React from 'react';
import Box from '@mui/material/Box';
import {ReadInterface} from './board';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

function ReadItem({ read, isModify, onModify }:ReadInterface) {
    return (
        <>
        <Box>
        <Box >제목</Box>
            <Box id="standard-disabled">{read.subject}</Box>
            <Box>내용</Box>
            <Box id="standard-disabled">{read.content}</Box>
            <Button onClick={onModify}>수정하기</Button>
            <br />
            { isModify && null}
        </Box>
        </>
    );
}

export {ReadItem};