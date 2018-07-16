import { render } from 'react-dom';
import React from 'react';
import Container from './Container/Container';
import { BrowserRouter } from 'react-router-dom';

const MOUNT_NODE = document.getElementById('root');
render(<BrowserRouter><Container/></BrowserRouter>, MOUNT_NODE);
