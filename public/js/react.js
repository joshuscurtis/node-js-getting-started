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
	var cardTitle = "Order: " + props.orderid;
	if (props.tablenum != null) {
		cardTitle = props.tablenum + " (Order: "+props.orderid+")";
	}
	var kitCol = "secondary"
	var barCol = "secondary"
	
	if(props.assignee == false) kitCol = "primary"
	if(props.assignee2 == false) barCol = "primary"
	
  return (
      <div style={{margin: 5,}}>
		<Card style={{backgroundColor: props.isprocessing ? '#f0ad4e' : '#5cb85c',}} variant="outlined">
			<CardHeader	title={cardTitle} subheader={props.time}>
			</CardHeader>
			<CardContent>
				<OrderItems itemNames={props.itemNames} order={props.order} />
			</CardContent>
			<CardActions>
        		<Button  variant="contained" color={kitCol} size="small">Kitchen</Button>
				<Button variant="contained" color={barCol} size="small">Bar</Button>
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
			<Typography align="center" variant="h4" component="h1" gutterBottom>
		    	iOrders
			</Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


function TableStream(props) {
	var orders = props.orders;
	for (var i = 0; i < orders.length; i++) {
    		rows.push(<CardApp 
						orderid={orders[i].order_id}
						order={orders[i]} 
						time={orders[i].closetime}
						isprocessing={orders[i].isprocessing}
						istable={orders[i].istable}
						isnew={orders[i].isnew}
						isclosed={orders[i].isclosed}
						tablenum={orders[i].tablenum}
						assignee={orders[i].assignee}
						assignee2={orders[i].assignee2}/>);
	}
  return (
    <div>
		{rows}
	</div>
  );
}

function OrderItem(props) {
  return (
   <div>
    <Typography variant="h5" align="center">
		{props.itemName}
    </Typography>
	<Typography variant="h6" align="center">
		{props.varientName}
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
		if (order.products[i].name.substring(0,5) != "Table") {
    		rows.push(<OrderItem variantName={order.products[i].variantName} itemName={order.products[i].name} qty={order.products[i].quantity} />);
		}
	}
  return (
    <div>
		{rows}
	</div>
  );
}

function App() {
var aOrder = {"order_id":6900,"isnew":true,"products":[{"quantity":"1","productUuid":"c2658640-3f6d-11ea-bd77-77bec6607986","variantUuid":"c2675b00-3f6d-11ea-83b1-27700d29e89d","vatPercentage":0,"unitPrice":210,"rowTaxableAmount":210,"name":"Matt B Decaf Oat Latte","variantName":"","barcode":"","fromLocationUuid":"d7d1c49a-36c0-11ea-ac06-dbc3974b77ca","toLocationUuid":"d7d1c4ae-36c0-11ea-b8ca-c41d80aae161","autoGenerated":false,"id":"0","type":"PRODUCT","details":{},"libraryProduct":true}],"istable":false,"isprocessing":true,"isclosed":false,"assignee":null,"assignee2":null,"time":"1599037923125","closetime":"1599038969780"}

var bOrder = {"order_id":6902,"isnew":true,"products":[{"quantity":"1","productUuid":"a02b6920-bc70-11ea-b0b8-40811413df78","variantUuid":"a02c0560-bc70-11ea-ace3-322370f92477","vatPercentage":0,"unitPrice":0,"rowTaxableAmount":0,"name":"Table 7","description":"","barcode":"","autoGenerated":false,"id":"0","type":"PRODUCT","libraryProduct":true},{"quantity":"1","productUuid":"5b3518e0-3c53-11ea-aeb9-9304bbabbcff","variantUuid":"29559f40-3f67-11ea-b68e-d872fe59a498","vatPercentage":0,"unitPrice":180,"rowTaxableAmount":180,"name":"Latte","description":"","variantName":"","autoGenerated":false,"id":"1","type":"PRODUCT","libraryProduct":true},{"quantity":"2","productUuid":"e744ec40-48d1-11ea-b8e4-0c63221cd81e","variantUuid":"ff446aa0-48d1-11ea-85dd-c20c3cd3a2af","vatPercentage":0,"unitPrice":100,"rowTaxableAmount":200,"name":"Evelyn","description":"","variantName":"Black Am","autoGenerated":false,"id":"2","type":"PRODUCT","libraryProduct":true},{"quantity":"1","productUuid":"60fec560-3df6-11ea-b5c5-79a84ae64878","variantUuid":"73ed34f0-3e2c-11ea-beef-ffe40caae107","vatPercentage":0,"unitPrice":180,"rowTaxableAmount":180,"name":"Decaf Cappuccino","description":"","variantName":"None, Standard, 1 Shot","autoGenerated":false,"id":"3","type":"PRODUCT","libraryProduct":true}],"istable":true,"isprocessing":true,"isclosed":true,"assignee":null,"assignee2":false,"time":"1599038518505","closetime":"1599038992953","tablenum":"Table 10"}
var mOrders = [{"order_id":6663,"isnew":true,"products":[{"quantity":"1","productUuid":"a97ad560-bc70-11ea-8e84-e8e9c3aef28a","variantUuid":"a97be6d0-bc70-11ea-850c-4b3145c016e7","vatPercentage":0,"unitPrice":0,"rowTaxableAmount":0,"name":"Table 9","description":"","barcode":"","autoGenerated":false,"id":"0","type":"PRODUCT","libraryProduct":true},{"quantity":"1","productUuid":"28c09844-36c1-11ea-8227-e32937f459dc","variantUuid":"b4ee6140-3936-11ea-a02a-fccf98b089d3","vatPercentage":0,"unitPrice":260,"costPrice":168,"rowTaxableAmount":130,"name":"Toastie/Sandwich","description":"","variantName":"Cheddar Cheese, Not toasted","autoGenerated":false,"id":"1","type":"PRODUCT","libraryProduct":true},{"quantity":"1","productUuid":"28c09844-36c1-11ea-8227-e32937f459dc","variantUuid":"b4ee6140-3936-11ea-8553-387666ef0e2d","vatPercentage":0,"unitPrice":280,"costPrice":168,"rowTaxableAmount":140,"name":"Toastie/Sandwich","description":"","variantName":"Tuna, Cucumber, Not toasted","autoGenerated":false,"id":"2","type":"PRODUCT","libraryProduct":true},{"quantity":"1","productUuid":"43e9aea0-3c5b-11ea-83c5-12eaef15e4d4","variantUuid":"43eac010-3c5b-11ea-9b79-b367ad74cc1b","vatPercentage":0,"unitPrice":130,"rowTaxableAmount":65,"name":"Tea","description":"","barcode":"","autoGenerated":false,"id":"3","type":"PRODUCT","libraryProduct":true},{"quantity":"1","productUuid":"28bd63fa-36c1-11ea-8227-e32937f459dc","variantUuid":"85570fa0-39e9-11ea-9d6f-3c9ab26afc27","vatPercentage":0,"unitPrice":160,"costPrice":96,"rowTaxableAmount":80,"name":"J2O","description":"","variantName":"Orange & Passionfruit","barcode":"50412037","autoGenerated":false,"id":"4","type":"PRODUCT","libraryProduct":true}],"istable":true,"isprocessing":true,"isclosed":true,"assignee":"false","assignee2":"false","time":"1598440747969","closetime":"1598441721685","tablenum":null},{"order_id":6661,"isnew":true,"products":[{"quantity":"2","productUuid":"725c2fca-bd29-11ea-87e2-951dee1275ad","variantUuid":"725c30ba-bd29-11ea-87e2-951dee1275ad","vatPercentage":0,"unitPrice":160,"rowTaxableAmount":160,"name":"Sausage Roll","description":"","variantName":"","autoGenerated":false,"id":"0","type":"PRODUCT","libraryProduct":true},{"quantity":"1","productUuid":"28bc2b7b-36c1-11ea-8227-e32937f459dc","variantUuid":"83092d40-3df5-11ea-9d7d-c270552b4ea0","vatPercentage":0,"unitPrice":130,"costPrice":78,"rowTaxableAmount":65,"name":"Crumpets with butter","description":"","variantName":"Two","comment":"With cheese And marmite","autoGenerated":false,"id":"1","type":"PRODUCT","libraryProduct":true},{"quantity":"1","productUuid":"66503216-d193-11ea-8ab8-b7ce88bfe09b","variantUuid":"665032f2-d193-11ea-8ab8-b7ce88bfe09b","vatPercentage":0,"unitPrice":160,"rowTaxableAmount":80,"name":"Cheddar & Bacon Turnover","description":"","variantName":"","autoGenerated":false,"id":"2","type":"PRODUCT","libraryProduct":true},{"quantity":"1","productUuid":"e2887288-d33e-11ea-8ab8-b7ce88bfe09b","variantUuid":"40e80adc-d33f-11ea-8ab8-b7ce88bfe09b","vatPercentage":0,"unitPrice":380,"costPrice":120,"rowTaxableAmount":190,"name":"Jacket Potato","description":"","variantName":"Cheesy beans","autoGenerated":false,"id":"3","type":"PRODUCT","libraryProduct":true},{"quantity":"2","productUuid":"8a9a46a0-3c53-11ea-af63-a35e7b7f997a","variantUuid":"8a9b5810-3c53-11ea-8ecd-4580a25ffbac","vatPercentage":0,"unitPrice":150,"rowTaxableAmount":150,"name":"Americano ","description":"","variantName":"","autoGenerated":false,"id":"4","type":"PRODUCT","libraryProduct":true},{"quantity":"1","productUuid":"b72e10f0-bc70-11ea-a335-f0c7289eea1f","variantUuid":"b72ead30-bc70-11ea-8c43-57da261984e4","vatPercentage":0,"unitPrice":0,"rowTaxableAmount":0,"name":"Table 11","description":"","barcode":"","comment":"4ppl","autoGenerated":false,"id":"5","type":"PRODUCT","libraryProduct":true}],"istable":true,"isprocessing":true,"isclosed":true,"assignee":"false","assignee2":"false","time":"1598440618726","closetime":"1598441235286","tablenum":null},{"order_id":1,"isnew":true,"products":[{"quantity":"1","productUuid":"28be2740-36c1-11ea-8227-e32937f459dc","variantUuid":"28be2741-36c1-11ea-8227-e32937f459dc","vatPercentage":0,"unitPrice":0,"rowTaxableAmount":0,"name":"Misc Drink","description":"","variantName":"","autoGenerated":false,"id":"0","type":"PRODUCT","libraryProduct":true}],"istable":false,"isprocessing":true,"isclosed":true,"assignee":"false","assignee2":"false","time":null,"closetime":null,"tablenum":null}];



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
					<TableStream orders={mOrder}/>
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
					<CardApp 
						orderid={bOrder.order_id}
						order={bOrder} 
						time={bOrder.closetime}
						isprocessing={bOrder.isprocessing}
						istable={bOrder.istable}
						isnew={bOrder.isnew}
						isclosed={bOrder.isclosed}
						tablenum={bOrder.tablenum}
						assignee={bOrder.assignee}
						assignee2={bOrder.assignee2}
					/>
		        </Grid>
				<Grid item xs={12}>
			  	</Grid>
			</Grid>
  </Container>
</div>
  );}

ReactDOM.render(<App />, document.querySelector('#root'));