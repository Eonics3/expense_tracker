import React from 'react'
import List from './List/List'
import { Card, CardHeader, CardContent, Typography, Grid, Divider} from '@material-ui/core';
import useStyles from './styles'
import Form from './Form/Form';


const Main = () => {
    const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardHeader title="Make it Count!" />
        <CardContent>
          <Typography align = "center" variant="h5">Start tracking your finances</Typography>
          <Typography variant="subtitle1" style={{lineHeight:'1.5em', marginTop:'20px'}}>
            {/*}info card components*/}
            {/* Try saying: Add income for $100 */}
          </Typography>
          <Divider />
           <Form />
        </CardContent>
        <CardContent className={classes.cardContent}>
          <Grid container space>
            <Grid item xs={12}>
              <List />
            </Grid>
          </Grid>
        </CardContent>
    </Card>
  )
}

export default Main