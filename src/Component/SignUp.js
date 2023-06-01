import React, { useState } from 'react'


import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import bg from "../assets/img/movie.jpg"
import { signUpUser } from '../store/User/userAction';
import { connect, useSelector } from 'react-redux';

const SignUp = (props) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [number, setNumber] = useState("")


    const handleSubmit = () => {


        console.log("name", name)
        console.log("email", email)
        console.log("password", password)
        console.log("number", number)

        const request = {
            name,
            email,
            password,
            number
        }

        props.signUpUser(request)

        setName("");
        setEmail("");
        setPassword("");
        setNumber("");
    };

    const { user } = useSelector((state) => state.user)

    console.log("user", user)


    return (
        <>
            <div className="position-relative">

                <div className='position-absolute'>

                    <img src={bg} alt="" style={{ height: "100vh", width: "100vw", objectFit: "cover" }} />
                </div>
                <div className='d-flex justify-content-center' >

                    <div className="card" style={{ maxWidth: "fit-content", marginTop: "10vh" }}>
                        <div className="card-body ">
                            <Container component="main" maxWidth="xs">
                                <Box
                                    sx={{
                                        marginTop: 3,
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                    }}
                                >
                                    <Typography component="h1" variant="h5">
                                        Sign Up
                                    </Typography>
                                    <Box component="form" noValidate sx={{ mt: 1 }}>
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="name"
                                            label="Name"
                                            name="name"
                                            // autoComplete="email"
                                            autoFocus
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="number"
                                            label="Number"
                                            name="number"
                                            // autoComplete="email"
                                            autoFocus
                                            onChange={(e) => setNumber(e.target.value)}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            id="email"
                                            label="Email Address"
                                            name="email"
                                            // autoComplete="email"
                                            autoFocus
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="password"
                                            label="Password"
                                            type="password"
                                            id="password"
                                            autoComplete="current-password"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <Button
                                            type="button"
                                            fullWidth
                                            variant="contained"
                                            sx={{ mt: 3, mb: 2 }}
                                            onClick={handleSubmit}
                                        >
                                            Sign Up
                                        </Button>

                                    </Box>
                                </Box>
                            </Container>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default connect(null, { signUpUser })(SignUp)