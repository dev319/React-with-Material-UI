import React, {Component} from 'react';
import Container from '@material-ui/core/Container';

class Footer extends Component{
    render(){
        return(
            <footer>
                <Container fixed>
                <p>footer goes here</p>
                </Container>
            </footer>
        );
    }
}

export default Footer