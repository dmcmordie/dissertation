import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import NotificationImportant from '@material-ui/icons/NotificationImportant';

class ProfileListComponent extends React.Component {

  render() {

    const { classes } = this.props;
    if (this.props.profileList.length > 0 ) {
      return (
        <div className={classes.root}>
          <Button variant="contained"
            fullWidth
            color='primary'
            onClick={this.newProfile}
            className={classes.newProfileBtn}> 
            New Profile
            </Button>
          <List>
            {
              this.props.profileList.map((_profiles, _index) => {
                return (
                  <div key={_profiles.name}>
                    <ListItem onClick={() => this.selectProfile(_profiles.name)}
                      className={classes.listItem}
                      selected={this.props.selectedProfileIndex === _profiles.name}
                      alignItems="flex-start">
                      <ListItemAvatar>
                        <Avatar alt="Remy Sharp">{_profiles.name.split('')[0]}</Avatar>
                      </ListItemAvatar>


                      <ListItemText
                        primary={_profiles.name} />

                      {/* {

                             _profiles.name !== this.props.chat[0].messages[this.props.chat[0].messages.length - 1].sender
                            &&  _profiles.name !== this.props.selectedProfile ? 
                            <ListItemIcon><NotificationImportant className={classes.unreadMessage}></NotificationImportant></ListItemIcon> :
                            null
                          }  
 */}

                    </ListItem>
                    <Divider />
                  </div>
                )
              })
            }
          </List>
        </div>
      );
    } else {
      return (
        <div className={classes.root}>
          <Button variant="contained"
            fullWidth
            color='primary'
            onClick={this.newProfile}
            className={classes.newProfileBtn}>
            New Profile
          </Button>
          <List></List>
        </div>
      );
    }
  }
  newProfile = () => this.props.newProfileBtnFn();
  selectProfile = (index) => this.props.selectProfileFn(index);
  selectName = (name) => this.props.selectNameFn(name);
}

export default withStyles(styles)(ProfileListComponent);