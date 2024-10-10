import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";




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
                    users.map((user, index) => {
                        return (
                            <ListItem key={index}>
                                <ListItemAvatar>
                                    <Avatar>
                                        {user.email[0].toUpperCase()}
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={user.email} secondary={user.password} />
                            </ListItem>
                        )
                    })
                }
            </List>
        </div>
    )
}

export default UserPage;