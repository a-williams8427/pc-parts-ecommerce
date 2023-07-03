import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(() => ({
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },

    cardImage: {
        paddingTop: "56.25%",
        margin: "5%",
    },

    cardContent: {
        flexGrow: 1,
    },
}));

export default useStyles;
