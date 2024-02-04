import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import '../App.css'
import picture from "../resources/cute anime girl.webp"
import Activity from "../interfaces/Activity";

export default function ActivityCard({ id, title, overview, body, image, manpower_needed, location, time_start, time_end, created_at, updated_at }:Activity) {
    return (
        <div>
            <Card sx={{
                maxWidth: 300
            }}>
                <CardMedia
                    sx={{ height: 200 }}
                    image={picture}
                    component="img"
                    title={title}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {overview}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {time_start} to {time_end}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        manpower: {manpower_needed}
                    </Typography>
                </CardContent>
                <CardActions>
                    <a href="">{location}</a>
                    <Button size="small">Apply</Button>
                </CardActions>
            </Card>
        </div>
    );
}