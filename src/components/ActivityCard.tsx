import * as React from 'react';
import ShareIcon from '@mui/icons-material/Share';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css'
import Activity from "../interfaces/Activity";
import {CardHeader, Collapse, IconButton, Stack} from "@mui/material";
import {Link} from "react-router-dom";
import {useState} from "react";
import {More} from "@mui/icons-material";
// import picture from "../resources/cute anime girl.webp"


export default function ActivityCard(props: {
    activity: Activity
}) {
    const activity = props.activity;
    const id = activity.id;
    const image = activity.image == null ? undefined : activity.image;
    const [bodyVisible, setBodyVisible] = useState(false);

    const toggleBody = () => {
        setBodyVisible(!bodyVisible);
    };
    return (
        <div id={id.toString()}>
            <Card sx={{minWidth: 280, maxWidth: 280, minHeight: 500, maxHeight: 530}}>
                <CardHeader
                    subheader={
                        <Typography variant="body2" sx={{ fontSize: '0.8rem' }}>
                            Created: {activity.created_at} <br/>
                            Updated: {activity.updated_at - activity.created_at} ago
                        </Typography>
                    }
                />
                <CardMedia
                    sx={{ height: 200 }}
                    image={image}
                    component="img"
                    alt={activity.title}
                />
                <CardContent>
                    <CardActions title={activity.title}>
                        <Typography variant="h6" component="div">
                            {activity.title}
                        </Typography>
                        <IconButton sx={{right: 1}} onClick={toggleBody}><More /></IconButton>
                    </CardActions>
                    <Collapse in={bodyVisible} timeout="auto" unmountOnExit>
                        <CardContent style={{maxHeight: 85, overflow: 'auto'}}>
                            <Typography>
                                {activity.body}
                            </Typography>
                        </CardContent>
                    </Collapse>
                    {!bodyVisible &&
                        <div>
                            <Typography variant="body1" color="text.secondary">
                                {activity.overview}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                From {activity.time_start} to {activity.time_end}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Volunteers needed: {activity.manpower_needed}
                            </Typography>
                            <Typography variant="body2">
                                <a href="">{activity.location}</a>
                            </Typography>
                        </div>
                    }
                </CardContent>
                <CardActions sx={{ justifyContent: 'center' }}>
                    <Stack direction="row" spacing={2}>
                        <Link to={`/activities/${activity.id}`}>
                            <Button variant="contained" size="small">Learn more</Button>
                        </Link>
                        <Button variant="contained" size="small" startIcon={<ShareIcon />}>Share</Button>
                    </Stack>
                </CardActions>
            </Card>
        </div>
    );
}