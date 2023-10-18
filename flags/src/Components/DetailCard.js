import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PaidIcon from '@mui/icons-material/Paid';
import PublicIcon from '@mui/icons-material/Public';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
export default function DetailCard({detail}) {
  return (
    <Card sx={{ maxWidth: 360, bgcolor: 'background.paper'}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="210"
          image={detail.flags?.png}
          alt="green iguana"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" sx={{fontWeight: 'bold', textTransform: 'uppercase'}}>
                <div>{detail.name}</div>
            </Typography>
          
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar sx={{bgcolor: 'blue'}}>
                        <AccountBalanceIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Capital" secondary={detail.capital} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar sx={{bgcolor: 'orange'}}>
                        <PaidIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Currency" secondary={detail.currencies && detail.currencies.map(currency => currency.name).join(', ')} />
                </ListItem>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar sx={{bgcolor: 'green'}}>
                        <PublicIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Language" secondary={detail.languages  && detail.languages.map(language => language.name).join(', ')} />
                </ListItem>

                <ListItem>
                    <ListItemAvatar>
                    <Avatar sx={{ bgcolor: 'red'}}>
                        <PeopleAltIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Population" secondary={detail.population} />
                </ListItem>
            </List>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

