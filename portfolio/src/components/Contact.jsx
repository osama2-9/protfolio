import { useRef, useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const sendEmail = (e) => {
        e.preventDefault();

        if (!formData.user_name || !formData.email || !formData.message) {
            toast.error('Please fill all fields');
            return;
        }

        emailjs
            .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
            .then(
                () => {
                    toast.success('Email Sent Successfully');
                    setFormData({
                        user_name: '',
                        email: '',
                        message: ''
                    });
                },
                (error) => {
                    toast.error('Error While Sending Email');
                    console.log(error);
                }
            );
    };

    return (
        <div className='contact' id='contact'>
            <h1>
                Contact <span style={{ color: 'rgb(109, 224, 246)', textDecoration: 'underline pink' }}> ME</span>
            </h1>
            <div className='form'>
                <form ref={form} noValidate autoComplete='off' onSubmit={sendEmail}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id='outlined-required'
                                label='Name'
                                variant='outlined'
                                fullWidth
                                name='user_name'
                                value={formData.user_name}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                id='outlined-required'
                                label='Email'
                                variant='outlined'
                                fullWidth
                                name='email'
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id='outlined-multiline-static'
                                label='Message'
                                multiline
                                rows={4}
                                variant='outlined'
                                fullWidth
                                name='message'
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button type='submit' variant='contained' size='large' style={{ marginBottom: '40px' }}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </div>
        </div>
    );
};

export default Contact;
