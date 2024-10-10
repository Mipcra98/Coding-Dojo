import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";




const UserPage = () => {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await axios.get('api/users')
        const data = response.data
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <Typography variant="h2">
                User Page
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                {
                    users.map((item, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Link to={`/users/${item._id}`}>
                                        <Avatar>
                                            {item.email[0].toUpperCase()}
                                        </Avatar>
                                    </Link>
                                </ListItemAvatar>
                                <ListItemText primary={item.email} secondary={item.password} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default UserPage;