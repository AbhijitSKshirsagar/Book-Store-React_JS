import React, {useState, useEffect} from 'react'
import cx from 'clsx';
import  {makeStyles} from '@material-ui/core/styles';
import {Card} from "@mui/material";
import {CardMedia} from "@mui/material";
import {Typography} from "@mui/material";
import {CardContent} from "@mui/material";
import {Button} from "@mui/material";
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Header from '../Header/Header'
import Image from '../../assets/RDPD.jpeg'
import './Carts.css'
import CartServices from '../Service/CartService'



const useStyles = makeStyles(({ breakpoints, spacing }) => ({   

  root: {
    margin: "7rem",
    borderRadius: spacing(2), // 16px
    transition: '0.3s',
    boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
    position: 'relative',
    width: 800,
    marginLeft: "17rem",
    overflow: 'initial',
    background: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      flexDirection: 'row',
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '40%',
    height: 0,
    paddingBottom: '48%',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    marginRight:"5rem",
  },
  content: {
    padding: 50,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

export const BlogCardDemo = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();


  const [qty, setQty] = useState(0);

  function handleDecrement() {
    if(qty==0){
      return
    }
    else{
    setQty(qty - 1);
    }
  }

  function handleIncrement() {
    setQty(qty + 1);
  }
  
//Fetching Data
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    fetchCartDetails();
  },[]);

  const fetchCartDetails = () => {
    CartServices.get().then((response) => {
        setCartDetails(response.data.data);
      })
  };
  console.log(cartDetails);

return(<>
 <Header/>
  <Typography style={{ }}>Cart Count:{cartDetails.length}</Typography>
  {cartDetails.map((cartItem, i) => {
  return (<>
    <Card className={cx(styles.root, shadowStyles.root)}>
      
      <CardMedia
        className={styles.media}
        image={Image}
      />
      <CardContent>
       <h2>Vahana Masterclass</h2>
       <h5>by Alfredo Covelli</h5>
        <h4>Rs.250</h4>
        <h5>Quantity</h5>
        <div class="wrapper">
            <span class="minus" onClick={handleDecrement}>-</span>
            <span class="num" id="root" >{1+ qty}</span>
            <span class="plus" onClick={handleIncrement}>+</span>
        </div>
        <p>Total Price <br/>{250+250 *qty }</p>
        <Button className={buttonStyles}>Continue</Button>
      </CardContent>
    </Card>
    </>
  );})}
  </>)
});

export default BlogCardDemo