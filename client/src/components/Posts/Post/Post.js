import React from 'react'
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import useStyles from './Styles'


const Post = ({post, setCurrentId}) => {
    const classes = useStyles()
    return (
        <Card className={classes.card}>
            <CardMedia image={post.selectedFile} className={classes.media} title={post.title} />

            <div className={classes.overlay}>
                <Typography  variant="h6">{post.creator}</Typography>

                <Typography  variant="body2"> {moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.overlay2}>
               <Button size="small" onClick={() => { setCurrentId(post._id) }} style={{color: 'white'}}>
                   <MoreHorizIcon fontSize="default" />
               </Button>
            </div>

            <div className={classes.details}>
                <Typography  variant="body2" color="textSecondary">{post.tags.map(tag => `#${tag} `)}</Typography>
            </div>

            <CardContent>
                <Typography  variant="h5" className={classes.title} gutterBottom>{post.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" onClick={() => {}} color="primary">
                    <ThumbUpAltIcon fontSize="small" />
                    Like
                    {post.likeCount}
                </Button>

                <Button size="small" onClick={() => {}} color="primary">
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
