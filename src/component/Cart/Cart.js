import React, { useState, useEffect } from "react";
import Image from '../../assets/vahana.jpg'
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import './Cart.css';
import { Card } from "@mui/material";
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import CartService from '../../component/Service/CartService';
import { Button, CardMedia } from "@mui/material";
import { Link, withRouter } from 'react-router-dom';
import ImageListItem from '@mui/material/ImageListItem';
import Header from '../../component/Header/Header'


const useStyles = makeStyles(({ breakpoints, spacing }) => ({

  root: {
    margin: "1rem",
    borderRadius: spacing(2), 
    transition: '0.3s',
    boxShadow: '0px 10px 20px #1687d933',
    position: 'relative',
    width: 700,
    marginLeft: "17rem",
    overflow: 'initial',
    background: '#ffffff',
    alignItems: 'center',
    paddingBottom: spacing(2),
    [breakpoints.up('md')]: {
      paddingTop: spacing(2),
    },
  },
  media: {
    width: '40%',
    height: 0,
    paddingBottom: '48%',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: spacing(2),
    backgroundColor: '#fff',
    position: 'relative',
    marginRight: "5rem",
    [breakpoints.up('md')]: {
      width: '90%',
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: 'translateX(-8px)',
    },
  },
  content: {
    padding: 50,
  },
  cta: {
    marginTop: 24,
    textTransform: 'initial',
  },
}));

function Item(props) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}


Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};

export default function FlexDirection() {
  const styles = useStyles();
  const {
    button: buttonStyles,
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();

  const [qty, setQty] = useState(0);

  // Fetching Data
  const [cartDetails, setCartDetails] = useState([]);

  useEffect(() => {
    fetchCartDetails();
  }, []);

  const fetchCartDetails = () => {
    CartService.getAll().then((response) => {
      setCartDetails(response.data.data);
    })
  };
  console.log(cartDetails);

  const deleteCartItem = (bookId) => {
    console.log(bookId);
    CartService.deleteCartItem(bookId);
    window.location.reload();
  };
  // const updateQuantity = (qty) => {
    // let quantity = qty
  // }
  // const getOrder = (cartId) => {
    // this.props.history.push(`Order/${cartId}`);
    // console.log(cartId);
  // }

  return (
    
    <div className="Body" style={{ width: '100%' }}>
       <Header/>
      <Card className={cx(styles.root, shadowStyles.root)}>
        {cartDetails.map((cartItem, index) => {
          return (
            <Box
              sx={{
                display: 'flex',
                marginRight: '50px',
                marginLeft: '10rem',
                alignContent: 'center',
                flexDirection: 'row',
                // flex-wrap: nowrap;
                paddingLeft: '50px',
                p: 1,
                m: 1,
                bgcolor: 'background.paper',
                borderRadius: 1,
              }}
            > <div className="Images">
                <Item>
                  <ImageListItem>
                    <img
                      src={cartItem.book.bookImage}
                    />
                  </ImageListItem>
                </Item>
              </div>
              <div className="info-calss">
                <h2>{cartItem.book.bookName}</h2>
                <h5>by {cartItem.book.authorName}</h5>
                <h5>Rs.{cartItem.book.price}</h5>
                <h5>Quantity</h5>
                <h4>Total Price <br />{cartItem.book.price + cartItem.book.price * qty}</h4>
                <>
                  <div class="wrapper">
                    <Button onClick={() => deleteCartItem(cartItem.cartId)} variant="contained"
                      color="secondary">Delete Item</Button>
                  </div>
                </>
              </div>
            </Box>
          )
        })}
        <div className="Continue-button">
          <Link to="/customer">
            <Button variant="contained" colore='warning' >Continue</Button>
          </Link>
        </div>
      </Card>

    </div>
  );
}