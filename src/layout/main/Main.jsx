import React from 'react'
import { useTheme } from '../../utils/providers/CustomThemeProvider';
import { Box } from '@mui/material';

export default function Main({ children }) {
    const { isDark } = useTheme();
    return (
        <>
            <Box
                sx={{
                    minHeight: "85vh",
                    backgroundColor: isDark ? "#333333" : "#e3f2fd",
                }}
            >
                {children}
            </Box>
        </>
    );
}

