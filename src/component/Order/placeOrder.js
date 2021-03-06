import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useBlogTextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/blog';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './PlaceOrder.css';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import TextField from '@mui/material/TextField';
import CustomerServices from '../../component/Service/CostomerServices'
import CartServices from '../../component/Service/CartService';
import Button from '@material-ui/core/Button';
import cx from 'clsx';
import Box from '@mui/material/Box';
import { Card } from '@mui/material';
import { CardContent, CardMedia} from "@mui/material";
import { CardActionArea, FormControl } from "@mui/material";
import Header from '../../component/Header/Header'
import { Link, useHistory } from 'react-router-dom';
import OrderService from '../../component/Service/OrderService'

const useStyles = makeStyles(({ breakpoints, spacing }) => ({

	root: {
		marginTop: "2rem",
		borderRadius: spacing(2), 
		transition: '0.3s',
		position: 'relative',
		width: 535,
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

function Order() {
	const [customerDetails, setCustomerDetails] = useState([]);
	console.log(customerDetails);
	const fetchCustomerDetails = () => {
		CustomerServices.getUserById().then((response) => {
			setCustomerDetails(response.data.data);
			console.log(response.data.data);
		})
	};
	console.log(customerDetails);

	const [cartDetails, setCartDetails] = useState([]);

	useEffect(() => {
		fetchCartDetails();
		fetchCustomerDetails();
	}, []);

	const fetchCartDetails = () => {
		CartServices.getAll().then((response) => {
			setCartDetails(response.data.data);
			console.log(response.data.data)
		})
	};
	console.log(cartDetails);

	const [expanded, setExpanded] = React.useState(false);

	const handleChange = (panel) => (event, isExpanded) => {
		setExpanded(isExpanded ? panel : false);
	};

	const styles = useStyles();
	const {
		button: buttonStyles,
		...contentStyles
	} = useBlogTextInfoContentStyles();
	const shadowStyles = useOverShadowStyles();

	const order = () => {	
		console.log("Hello")
		const custId = localStorage.getItem('CusomerId')
		const customerId = JSON.parse(custId);
		console.log("CustomerId", customerId)
		let object = {
			customerId: customerId,
		}
		console.log(object);
		OrderService.addOrderedItems(object).then((response) => {
			console.log(response);
			CartServices.deleteCartItems().then((response) => {
				console.log(response);
			})
			// 	window.location.reload();
		});
		//history.push("/ordersuccess");
	}

	return (<>
		
		<Header/>
		<div className="form-content">
			
			<form className="form" action="#" onSubmit="">
				<div className="form-head">
					<h1>Order Summary</h1>
				</div>

				<Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls="panel1bh-content"
						id="panel1bh-header">
						<Typography sx={{ width: '33%', flexShrink: 0 }}>
							Enter Customer Details
						</Typography>
					</AccordionSummary>
					<AccordionDetails>
							<div>
							<TextField
								id="name" name="name"
								marginRight="10px"
								value={customerDetails.name}
							/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<TextField
								id="contact"
								name="contact"
								value={customerDetails.contact}
							/>
						</div> <br />
						<div>
							<TextField
								id="pinCode"
								name="pinCode"
								value={customerDetails.pinCode}
							/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<TextField
								id="locality"
								name="locality"
								value={customerDetails.locality}
							/>
						</div> <br />
						<div >
							<TextareaAutosize
								id="address"
								name="address"
								aria-label="minimum height"
								placeholder="Address..."
								style={{ width: 470, height: 60 }}
								padding-bottom="10"
								value={customerDetails.address}
							/>
						</div> <br />
						<div>
							<TextField
								name="city"
								id="city"
								value={customerDetails.city}
							/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							<TextField
								id="landmark"
								name="landmark"
								value={customerDetails.landmark}
							/>
						</div>						
					</AccordionDetails>
				</Accordion>

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
									paddingLeft: '50px',
									p: 1,
									m: 1,
									bgcolor: 'background.paper',
									borderRadius: 1,
								}}
							> <FormControl>
							<CardActionArea>
							  <CardMedia component="img" height="150" padding="1rem" width="50" src ={cartItem.book.bookImage} />
							  <CardContent>

								<div className="info-calss">
									<h2>{cartItem.book.bookName}</h2>
									<h5>by {cartItem.book.authorName}</h5>
									<h5>Rs.{cartItem.book.price}</h5>
									<h5>Quantity</h5>
									<h4>Total Price <br />{cartItem.book.price + cartItem.book.price}</h4>
								</div>
								</CardContent>
                    </CardActionArea>
                      </FormControl>
							</Box>

						)
					})}
					<Link to="/success">
					<Button variant="contained" color='primary'   style={{ marginLeft: "75%" } } onClick={order} >Checkout</Button>
					</Link>
				</Card>
				
			</form>
		</div >
	</>)
}
export default Order