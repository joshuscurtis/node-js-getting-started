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

function CardApp() {

  return (
      <div style={{ margin: 5, }}>
		<Card variant="outlined">
			<CardHeader title="Order: 99" subheader="10 mins 23 secs" >
			</CardHeader>
			<CardContent>
				<Copyright />
				<Copyright />
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


function App() {
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
					<CardApp/>
					<CardApp/>				
					<CardApp/>					
		        </Grid>
		        <Grid item xs={6} spacing={3}>
		        	<Typography variant="h4" component="h1" gutterBottom>
		          		Right
			  		</Typography>
					<CardApp/>
		        </Grid>
				<Grid item xs={12}>
			  	</Grid>
			</Grid>
  </Container>
</div>
  );}

ReactDOM.render(<App />, document.querySelector('#root'));