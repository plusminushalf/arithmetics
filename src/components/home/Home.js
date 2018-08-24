import React from 'react';
import Button from '@material-ui/core/Button';
import { withRouter } from 'react-router-dom';
import { ROOT_PATH } from 'utils/config';
import style from './home.css';

function Home(props) {
  return (
    <div
        className={style.home}
    >
      <Button
        onClick={() => props.history.push(`${ROOT_PATH}/additions`)}
        style={{margin: "5px", flexGrow: "1"}}
        color="secondary"
        variant="contained"
        size="small">
        Additions
      </Button>
      <Button
        onClick={() => props.history.push(`${ROOT_PATH}/subtraction`)}
        style={{margin: "5px", flexGrow: "1"}}
        color="secondary"
        variant="contained"
        size="small">
        Subtraction
      </Button>
      <Button
        onClick={() => props.history.push(`${ROOT_PATH}/multiplication`)}
        style={{margin: "5px", flexGrow: "1"}}
        color="secondary"
        variant="contained"
        size="small">
        Multiplication
      </Button>
      <Button
        onClick={() => props.history.push(`${ROOT_PATH}/squares`)}
        style={{margin: "5px", flexGrow: "1"}}
        color="secondary"
        variant="contained"
        size="small">
        squares
      </Button>
      {/*<Button
        onClick={() => props.history.push('/division')}
        style={{margin: "5px", flexGrow: "1"}}
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
