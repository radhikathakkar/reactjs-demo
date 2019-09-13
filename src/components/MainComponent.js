import React, { Component } from 'react';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import { Route, Switch, Redirect} from 'react-router-dom';
import Contact from './ContactComponent';
import { PROMOTIONS } from '../shared/promotions';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import DishDetail from './DishDetailComponent';
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,
        promotions: PROMOTIONS,
        comments: COMMENTS,
        leaders: LEADERS
    };
  }
  getData ()  {
      console.log(this.state.comments);
  }

  render() {
    const HomePage = () => {
        return(
            <Home dish = {this.state.dishes.filter((dish) => dish.featured)[0]}
            promotion = {this.state.promotions.filter((promo) => promo.featured)[0]}
            leader = {this.state.leaders.filter(lead => lead.featured)[0]}
             />
        );
    }
    const MenuPage = () => {
        return(
            <Menu dishes={this.state.dishes} />
        );
    }
    const DishWithId = ({match}) => {
        return (
            <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
            comments = {this.state.comments.filter((comment) => comment.id === parseInt(match.params.dishId, 10))[0]}
            />
        )
    }
    return (
      <div>
        <Header />
        {this.getData}
        <Switch>
            <Route path='/home' component={HomePage} />
            <Route exact path="/menu" component={MenuPage} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;