import { Avatar, Button, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";




const UserPage = () => {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await axios.get('/api/users')
        const data = response.data
        setUsers(data)
    }

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div>
            <Container spacing={2}>
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
                <Button variant="contained" color="primary" onClick={() => { navigate("/") }}>Crear Usuario</Button>
            </Container>
        </div>
    )
}

export default UserPage;