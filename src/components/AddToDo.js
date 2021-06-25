import React from 'react';
import { withStyles, Card, CardActions, CardContent, Button, Typography, Box, Paper, IconButton, InputBase, Divider } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Add } from '@material-ui/icons';
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const styles = theme => ({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  box: {
    margin: '100px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '50px'
  },
  paper: {
    margin: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paperList: {
    margin: '30px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class AddToDo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: "" };
  }
  
  updateInput = input => {
    this.setState({ input });
  };

  handleAddTodo = () => {
    this.props.addTodo(this.state.input);
    this.setState({ input: "" });
  };

  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;
    return (
      <div>
          <Box border={1} className={classes.box}>
        
          <Card className={classes.root}>
          <Paper component="form" className={classes.paper}>
      <InputBase
        className={classes.input}
        placeholder="Add a task..."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton color="primary" className={classes.iconButton} aria-label="directions">
        <Add />
      </IconButton>
    </Paper>
    <CardContent>

    <Paper component="form" elevation={3} className={classes.paperList}/>
    </CardContent>
    </Card>
    </Box>
        <input
          onChange={e => this.updateInput(e.target.value)}
          value={this.state.input}
        />
        <button className="add-todo" onClick={this.handleAddTodo}>
          Add ToDo
        </button>
      </div>
    );
  }
}

export default connect(
  null,
  { addTodo }
)(withStyles(styles)(AddToDo));
// export default AddToDo;
