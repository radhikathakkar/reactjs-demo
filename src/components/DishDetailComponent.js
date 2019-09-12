import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText} from 'reactstrap';

function RenderDish({dish}) {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <Card className="col-md-5 dish-card">
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardBody>
                                <CardTitle>{dish.name}</CardTitle>
                                <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
                    <div className="col-md-5 comment-card">
                    <h4> Comments </h4>
                        <RenderComments comments={dish.comments}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

function RenderComments({comments}) {
    const content = comments.map((com) => {
        return  (
            <ul className="list-unstyled">
                <li>{com.comment}</li><br />
                <li>--{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</li>
            </ul>
        );
    });

    return (
        <div className="row">
            {content}
        </div>
    );
}

const DishDetail = (props) => {
    if(props.dish != null) {
        return  (
            <div className="container">
                <div className="row">
                    < RenderDish dish={props.dish} />
                </div>
                
            </div>
        );
    } else {
        return(
            <div></div>
        )
    }
}
export default DishDetail;