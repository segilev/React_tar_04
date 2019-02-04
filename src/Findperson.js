import React from 'react';
import RouteButton from './RouteButton.js';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing.unit * 3,
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: 'auto',
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  bootstrapFormLabel: {
    fontSize: 18,
  },
});



class Findperson extends React.Component{
    constructor(props){
      super(props);   
      
      this.handleChange1 = this.handleChange1.bind(this);
      this.handleChange2 = this.handleChange2.bind(this);
      this.handleChange3 = this.handleChange3.bind(this); 
      this.state = {min:0} ;
      this.state = {max:0} ;
      this.state = {gender:''} ;
      this.state = {arr:[]}; 
   
    
   
    }
    
   
    handleChange1(evt) {
      this.setState({min:evt.target.value});
      
  }
  handleChange2(evt1) {
    this.setState({max:evt1.target.value});
  }
  handleChange3(evt2) {
    this.setState({gender:evt2.target.value});
  } 

  componentDidMount(){
    fetch('http://proj.ruppin.ac.il/bgroup68/test1/tar5/api/person/datatable').then(response => response.json()).then(arr => this.setState({
      arr:arr
      
    }))
    
    .catch(error => console.log('parsing failed', error))
  }
    render(){
      const { classes } = this.props;

      
     
  
      return(
      <div>

 
        <div>
            <div id="ha">
 <h1 id='ko'>Tinder</h1>
            </div>
          <p>choose partner gender: </p>
          
          <form>
          
          <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
          Gender
          </InputLabel>
          <Select
            value={this.state.gender}
            onChange={this.handleChange3}
            input={<BootstrapInput name="age" id="age-customized-select" />}
          >
       
            <MenuItem value='Male'>Male</MenuItem>
            <MenuItem value='Female'>Female</MenuItem>
        
          </Select>
        </FormControl>
        
    <p>choose parthner Age: </p>
    <p>Between:</p>
    <label>
     
      <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            Min Age
          </InputLabel>
          <BootstrapInput onChange={this.handleChange1}   />
          
        </FormControl>
    </label><br></br>
    <label>
     
      <FormControl className={classes.margin}>
          <InputLabel htmlFor="age-customized-select" className={classes.bootstrapFormLabel}>
            Max Age
          </InputLabel>
          <BootstrapInput onChange={this.handleChange2}   />
          
        </FormControl>
    </label><br></br>
  
   
      
  
    
  
    <RouteButton personDB={this.state.arr.map((d)=>{return d})} value="Find" pathname="/Show" data={this.state} />
  
  
     </form>
     
     <div id="butt">
<h2 id='bu'>designed by Bgroup68</h2>
        </div>
        
        </div> 
        


       
     
      


        </div> 
         
      
      );
    }
  }


export default withStyles(styles)(Findperson);