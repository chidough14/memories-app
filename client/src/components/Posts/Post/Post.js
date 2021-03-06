import React from 'react'
import { Card, CardActions, CardMedia, CardContent, Button, Typography } from '@material-ui/core'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import DeleteIcon from '@material-ui/icons/Delete'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import moment from 'moment'
import useStyles from './Styles'
import {useDispatch} from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts'


const Post = ({post, setCurrentId}) => {
    const classes = useStyles()
    const dispatch = useDispatch()

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
            <Typography  variant="h5" className={classes.title} gutterBottom>{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" onClick={() => dispatch(likePost(post._id))} color="primary">
                    <ThumbUpAltIcon fontSize="small" />
                    &nbsp; Like &nbsp;
                    {post.likeCount}
                </Button>

                <Button size="small" onClick={() => dispatch(deletePost(post._id))} color="primary">
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    )
}

export default Post
