"use client"

import {AppBar, Tabs, Tab, Box} from "@mui/material/";
import * as React from "react";
import {RefObject, useEffect, useRef, useState} from "react";
import {Planet} from "@/type/planets";
import {planetsApi} from "@/api/planets";
import Link from "next/link";
import {Button, TextField} from "@mui/material";

interface TabPanelProps {
    children?: React.ReactNode;
    dir?: string;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role={`tabpanel-${index}`}
            hidden={value !== index}
            {...other}
        >
            {value === index && (
                <Box>
                    {children}
                </Box>
            )}
        </div>
    );
}

export default function Home() {
    const [value, setValue] = React.useState<number>(0);
    const [toDoList, setToDoList] = useState<string[]>([]);

    const inputRef = useRef<HTMLInputElement>(HTMLInputElement.prototype);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    const [planets, setPlanets] = useState<Planet[]>([]);

    const getPlanets = async () => {
        const response = await planetsApi.getPlanets();
        setPlanets(response.results);
    }

    useEffect(() => {
        getPlanets();
    }, [])

    return (
        <main>
            <Box
                sx={{
                    backgroundColor: '#1c1e21',
                    width: '100%',
                    color: '#fff',
                    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
                }}
            >
                <AppBar
                    position="static"
                    sx={{
                        backgroundColor: '#444950'
                    }}
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="inherit"
                        variant="fullWidth"
                        TabIndicatorProps={{
                        }}
                        sx={{
                            ".MuiButtonBase-root": {
                                fontWeight: 700
                            },
                            ".MuiTabs-indicator": {
                                backgroundColor: 'white',
                            }
                        }}
                    >
                        <Tab label="ToDo" />
                        <Tab label="Planets" />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <Box
                        sx={{
                            p: 3
                        }}
                    >
                        <Box
                            sx={{
                                display: 'flex'
                            }}
                        >
                            <TextField
                                inputRef={inputRef}
                                fullWidth
                                placeholder='Add new ToDo...'
                                sx={{
                                    backgroundColor: '#b7b9ba',
                                    mr: 3,
                                    borderRadius: 2
                                }}
                            />
                            <Button
                                variant="contained"
                                onClick={() => {
                                    setToDoList([...toDoList, inputRef.current.value.toString()]);
                                    inputRef.current.value = '';
                                    console.log(toDoList)
                                }}
                                sx={{
                                    textTransform: 'none',
                                    fontWeight: 700,
                                    fontSize: 18,
                                }}
                            >
                                Add
                            </Button>
                        </Box>
                        <Box>
                            <h2>ToDo List:</h2>
                            {toDoList.length > 0 && (
                                toDoList.map((todo, index) => (
                                    <p
                                        key={index}
                                        style={{
                                            textTransform: 'capitalize',
                                            fontSize: 18
                                        }}
                                    >
                                        {++index}: {todo}
                                    </p>
                                ))
                            )}
                        </Box>
                    </Box>
                </TabPanel>
                <TabPanel
                    value={value}
                    index={1}
                >
                    {planets.length > 0 && (
                        planets.map((planet, index) => (
                            <Box
                                key={index}
                                sx={{
                                    borderBottom: 1,
                                    p: 2,
                                    fontSize: 24,
                                    fontWeight: 700,
                                    "a": {
                                        color: 'white',
                                        textDecoration: 'none',
                                    }
                                }}
                            >
                                <Link
                                    href={`/planets/${planet.uid}/`}
                                >
                                    {planet.name}
                                </Link><br/>
                            </Box>
                        ))
                    )}
                </TabPanel>
            </Box>
        </main>
    );
}
