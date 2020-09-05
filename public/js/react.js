const {
  colors,
  CssBaseline,
  ThemeProvider,
  Typography,
  Container,
  Box,
  SvgIcon,
  Link,
  AppBar,
  Toolbar,
  MenuIcon,
  IconButton,
  Button,
  Grid,
  Card,
  CardContent,
  CardActions,
  CardHeader,
} = MaterialUI;

function CardApp(props) {
		var colour = '{backgroundColor: "red"}'
	if (props.isclosed == false){
		colour = '{backgroundColor: "red"}'
	} else {
		colour = '{backgroundColor: "red"}'
	}
	
  return (
      <div style={{colour}}>
		<Card variant="outlined">
			<CardHeader title={"Order: " +props.orderid} subheader={props.time}>
			</CardHeader>
			<CardContent>
				<OrderItems itemNames={props.itemNames} order={props.order} />
			</CardContent>
			<CardActions>
        		<Button size="small">Kitchen</Button>
				<Button size="small">Bar</Button>
			</CardActions>
		</Card>
    </div>
  );
}

function ButtonAppBar() {

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
			<Button color="inherit">Login</Button>
			<Typography variant="h4" component="h1" gutterBottom>
		    	iOrders
			</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


function Copyright() {
  return (
    <Typography variant="h6" color="textSecondary" align="center">
		Item 1
    </Typography>
  );
}

function OrderItem(props) {
  return (
   <div>
    <Typography variant="h5" align="center">
		{props.itemName}
    </Typography>
	    <Typography variant="h6" color="textSecondary" align="center">
		Qty: {props.qty}
		</Typography>
	</div>
  );
}

function OrderItems(props) {
	var order = props.order;
	console.log(order);
	var rows = [];
	for (var i = 0; i < order.products.length; i++) {
    	rows.push(<OrderItem itemName={order.products[i].name} qty={order.products[i].quantity} />);
	}
  return (
    <div>
		{rows}
	</div>
  );
}

function App() {
var aOrder = {"order_id":6900,"isnew":true,"products":[{"quantity":"1","productUuid":"c2658640-3f6d-11ea-bd77-77bec6607986","variantUuid":"c2675b00-3f6d-11ea-83b1-27700d29e89d","vatPercentage":0,"unitPrice":210,"rowTaxableAmount":210,"name":"Matt B Decaf Oat Latte","variantName":"","barcode":"","fromLocationUuid":"d7d1c49a-36c0-11ea-ac06-dbc3974b77ca","toLocationUuid":"d7d1c4ae-36c0-11ea-b8ca-c41d80aae161","autoGenerated":false,"id":"0","type":"PRODUCT","details":{},"libraryProduct":true}],"istable":false,"isprocessing":true,"isclosed":true,"assignee":null,"assignee2":null,"time":"1599037923125","closetime":"1599038969780"}
	
  return (
      <div style={{ margin: 0, }}>
		<Container maxWidth="lg">
			<Grid container spacing={3}>
		        <Grid item xs={12}>
					<ButtonAppBar/>
		        </Grid>
		        <Grid item xs={6} spacing={3}>
		        	<Typography variant="h4" component="h1" gutterBottom>
		          		Left
			  		</Typography>
		        </Grid>
		        <Grid item xs={6} spacing={3}>
		        	<Typography variant="h4" component="h1" gutterBottom>
		          		Right
			  		</Typography>
					<CardApp 
						orderid={aOrder.order_id}
						order={aOrder} 
						time={aOrder.closetime}
						isprocessing={aOrder.isprocessing}
						istable={aOrder.istable}
						isnew={aOrder.isnew}
						isclosed={aOrder.isclosed}
					/>
		        </Grid>
				<Grid item xs={12}>
			  	</Grid>
			</Grid>
  </Container>
</div>
  );}

ReactDOM.render(<App />, document.querySelector('#root'));