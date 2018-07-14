import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import Navbar from "./Navbar";
import { Grid, Hidden, Paper, Typography, Divider, List, ListItem, ListItemAvatar, Avatar, ListItemText, Button, Card, CardContent, CardMedia, CardActions } from "@material-ui/core";
import Today from '@material-ui/icons/Today';
import LocalDining from '@material-ui/icons/LocalDining';
const styles = {
  containerStyles: {
    width: "100%"
  },
  nutritionHistoryMealLi: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  nutritionHistoryHeader: {
    padding: "5px 0"
  },
  generateMealBtn: {
    margin: "15px 0"
  },
  nutritionHistoryListWrapper: {
    borderLeft: "1px solid #ddd",
    paddingLeft: "10px"
  },
  dateSpan: {
    position: "absolute",
    left: "0",
    bottom: "0"
  }
}

class Home extends Component {
  state = {
    currentMeal: (<div></div>),
    appId: "a786114b",
    appKey: "ca4c571bb2354b8a544e8321bf4e7cc3",
    qParam: "chicken",
    apiUrl: "https://api.edamam.com/search?",
    calories: "500-850"
  }

  componentWillMount = () =>{
    let loggedUsername = localStorage.getItem('username');
    let loggedPassword = localStorage.getItem('password');
    if(loggedUsername[0] === undefined || loggedPassword === undefined)
      window.location = "/login";
    
    let appId = this.state.appId;
    let appKey = this.state.appKey;
    let qParam = this.state.qParam;
    let apiUrl = this.state.apiUrl;
    let calories = this.state.calories;
    let generatedMeal;
    fetch(`${apiUrl}q=${qParam}&app_id=${appId}&app_key=${appKey}&calories=${calories}`,{
      method: "GET",
      headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
      }
    }).then(
      response => {
        response.json().then(
          data => {
            let randomIndex = Math.floor(Math.random() * 9 + 1);
            let randomMeal = data.hits[randomIndex];
            let ingredients = [];
            randomMeal.recipe.ingredientLines.forEach((ingredient, index) => {
              let ingredientListItem = 
                <ListItem key={index}>
                  {ingredient}
                </ListItem>
              ;
              ingredients.push(ingredientListItem);
            });
            console.log(randomMeal);
            generatedMeal = (
              <Grid 
                container 
                style={{
                  padding:"0 15px"
                }}>
                <Grid item sm={12}>

                  <Card>
                    <CardMedia
                      image= {randomMeal.recipe.image}
                      style={{
                        height: 0,
                        paddingTop: '56.25%'
                      }}
                      title= {randomMeal.recipe.label}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                        {randomMeal.recipe.label}
                      </Typography>
                      <Typography component="h3" variant="title" align="left">
                        Ingredients
                      </Typography>
                      <List>
                        {ingredients}
                      </List>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" href={randomMeal.recipe.url} target="_blank">
                        Recipe
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            );
            this.setState({
              currentMeal: generatedMeal
            });
          },
          error => {
            console.log(error);
          }
        )
      },
      error => {
        console.log(error)
      }
    );
  }

  generateRandomMealClickHandler = () => {
    let appId = this.state.appId;
    let appKey = this.state.appKey;
    let qParam = this.state.qParam;
    let apiUrl = this.state.apiUrl;
    let calories = this.state.calories;
    let generatedMeal;
    fetch(`${apiUrl}q=${qParam}&app_id=${appId}&app_key=${appKey}&calories=${calories}`,{
      method: "GET",
      headers: {
        "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8",
        "Accept-Encoding": "gzip, deflate, br",
        "Accept-Language": "en-US,en;q=0.9",
        "Cache-Control": "no-cache",
        "Connection": "keep-alive"
      }
    }).then(
      response => {
        response.json().then(
          data => {
            let randomIndex = Math.floor(Math.random() * 9 + 1);
            let randomMeal = data.hits[randomIndex];
            let ingredients = [];
            randomMeal.recipe.ingredientLines.forEach((ingredient, index) => {
              let ingredientListItem = 
                <ListItem key={index}>
                  {ingredient}
                </ListItem>
              ;
              ingredients.push(ingredientListItem);
            });
            console.log(randomMeal);
            generatedMeal = (
              <Grid 
                container 
                style={{
                  padding:"0 15px"
                }}>
                <Grid item sm={12}>

                  <Card>
                    <CardMedia
                      image= {randomMeal.recipe.image}
                      style={{
                        height: 0,
                        paddingTop: '56.25%'
                      }}
                      title= {randomMeal.recipe.label}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="headline" component="h2">
                        {randomMeal.recipe.label}
                      </Typography>
                      <Typography component="h3" variant="title" align="left">
                        Ingredients
                      </Typography>
                      <List>
                        {ingredients}
                      </List>
                    </CardContent>
                    <CardActions>
                      <Button size="small" color="primary" href={randomMeal.recipe.url} target="_blank">
                        Recipe
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            );
            this.setState({
              currentMeal: generatedMeal
            });
          },
          error => {
            console.log(error);
          }
        )
      },
      error => {
        console.log(error)
      }
    );
  }

  render() {
    const { classes } = this.props;
    const primaryListItem1Text = (
      <div className={classes.nutritionHistoryListWrapper}>
        <List>
          <ListItem className={classes.nutritionHistoryMealLi}>
            Meal One (300kcal)
          </ListItem>
          <ListItem className={classes.nutritionHistoryMealLi}>
            Meal Two (500kcal)
          </ListItem>
          <ListItem className={classes.nutritionHistoryMealLi}>
            Meal Three (600kcal)
          </ListItem>
        </List>
        <span><strong>Total kcal</strong>: 1400(400 deficit)</span>
      </div>
    );

    const primaryListItem2Text = (
      <div className={classes.nutritionHistoryListWrapper}>
        <List>
          <ListItem className={classes.nutritionHistoryMealLi}>
            Meal One (400kcal)
          </ListItem>
          <ListItem className={classes.nutritionHistoryMealLi}>
            Meal Two (600kcal)
          </ListItem>
          <ListItem className={classes.nutritionHistoryMealLi}>
            Meal Three (600kcal)
          </ListItem>
        </List>
        <span><strong>Total kcal</strong>: 1600(200 deficit)</span>
      </div>
    );

    const primaryListItem3Text = (
      <div className={classes.nutritionHistoryListWrapper}>
        <List>
          <ListItem className={classes.nutritionHistoryMealLi}>
            Meal One (500kcal)
          </ListItem>
          <ListItem className={classes.nutritionHistoryMealLi}>
            Meal Two (500kcal)
          </ListItem>
          <ListItem className={classes.nutritionHistoryMealLi}>
            Meal Three (350kcal)
          </ListItem>
        </List>
        <span><strong>Total kcal</strong>: 1350(450 deficit)</span>
      </div>
    );

    return (
      <div>
        <Navbar />
        <Grid container spacing={8} className={classes.containerStyles}>
          <Hidden smDown>
            <Grid item lg={3} md={3}>
              <Paper elevation={1}>
                <Typography variant="headline"
                  component='h3' align='center'
                  className={classes.nutritionHistoryHeader}>
                  Nutrition History
                </Typography>
                <Divider />
                <div className={classes.demo}>
                  <List>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Today />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={primaryListItem1Text}
                        secondary={(<span className={classes.dateSpan}>13.07.2018</span>)}
                      />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Today />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={primaryListItem2Text}
                        secondary={(<span className={classes.dateSpan}>13.06.2018</span>)}                        
                      />
                    </ListItem>
                    <Divider/>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar>
                          <Today />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={primaryListItem3Text}
                        secondary={(<span className={classes.dateSpan}>13.05.2018</span>)}                        
                      />
                    </ListItem>
                  </List>
                </div>
              </Paper>
            </Grid>
          </Hidden>

          <Grid item lg={6} md={6} sm={12}>
            <Paper elevation={1}>
              <Typography variant="display2" component="h1" align="center">
                Remaning calories for today: <strong style={{color: "rgba(0,0,0,.7)"}}>850kcal</strong>
              </Typography>

              <Divider/>

              <Button size="large" color="primary"
                variant="contained"
                fullWidth className={classes.generateMealBtn}
                onClick={this.generateRandomMealClickHandler}>
                <LocalDining/>
                <span>Generate another random meal</span>
              </Button>

              {this.state.currentMeal}

            </Paper>
          </Grid>

          <Hidden smDown>
            <Grid item lg={3} md={3}>
              No time to add fancy content here :(
            </Grid>
          </Hidden>
        </Grid>
      </div>
    )
  }

}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Home);