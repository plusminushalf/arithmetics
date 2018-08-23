import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';

function Home(props) {
  return (
    <div
      style={{margin: "auto", width: "50%", marginTop: "50px", display: "flex"}}
    >
      <Button
        onClick={() => props.history.push('/additions')}
        style={{margin: "0px 5px", flexGrow: "1"}}
        color="secondary"
        variant="contained"
        size="small">
        Additions
      </Button>
      <Button
        onClick={() => props.history.push('/subtraction')}
        style={{margin: "0px 5px", flexGrow: "1"}}
        color="secondary"
        variant="contained"
        size="small">
        Subtraction
      </Button>
      <Button
        onClick={() => props.history.push('/multiplication')}
        style={{margin: "0px 5px", flexGrow: "1"}}
        color="secondary"
        variant="contained"
        size="small">
        Multiplication
      </Button>
      {/*<Button
        onClick={() => props.history.push('/division')}
        style={{margin: "0px 5px", flexGrow: "1"}}
        color="secondary"
        variant="contained"
        size="small">
        Division
    </Button>*/}
    </div>
    );
}

const HomeWithRouter = withRouter(Home);
export default  HomeWithRouter;
