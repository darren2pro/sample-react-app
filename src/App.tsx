import Home from './pages/Home';
import StyledPage from './pages/StyledPage';
import SearchPage from './pages/SearchPage';
import TodoApp from './pages/TodoApp';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@material-ui/core';
import { blue, orange } from '@material-ui/core/colors';

const DATA = [
    { id: 'todo-0', name: 'Eat', isCompleted: true },
    { id: 'todo-1', name: 'Sleep', isCompleted: false },
    { id: 'todo-2', name: 'Code', isCompleted: false },
];

const theme = createTheme({
    palette: {
        primary: blue,
        secondary: orange,
    },
});

const App: React.FC = () => {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/todoApp"
                            element={<TodoApp tasks={DATA} />}
                        />
                        <Route path="/searchPage" element={<SearchPage />} />
                        <Route path="/styled" element={<StyledPage />} />
                        <Route path="/" element={<Home />} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </div>
    );
};

export default App;
