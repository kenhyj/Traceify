import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
    typography: {
        fontFamily: [
            'Open Sans',
            'san-serif',
        ].join(','),
    },
});

export default theme;