import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PageHeader from './PageHeader';
import { Button } from '@mui/material';
import ROUTES from '../../routes/routesModel';

export default function ErrorPage() {
    const navigate = useNavigate();
    return (
        <div>
            <PageHeader title="Error 404" subtitle="page not found" />

            <Button onClick={() => navigate(ROUTES.ROOT)}>Return to Home page</Button>

            <Link to={ROUTES.ROOT}>Home</Link>
        </div>
    );
}
