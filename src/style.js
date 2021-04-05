import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme)=> ({
        container: {
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            padding: '30px 30px',
        },

        icon: {
            marginRight: "20px",
        },

        button: {
            marginTop: "40px",
        },
        cardGrid: {
            padding: "30px 0"
        },
        card: {
            height: "100%",
            display: "flex",
            flexDirection: "column"
            
        },
        cardMedia: {
            paddingTop: "56.25%"
        },
        cardContainer: {
            flexGrow: 1
        }
}))

export default useStyles;