import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import TabackgroundImg from './../assets/images/moneyback.jpg';
import td1 from './../assets/images/td1.jpg';


const useStyles = makeStyles({
  root: {
    backgroundImage: `url(${TabackgroundImg})`,
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    padding: '5%',
    boxSizing: 'border-box'
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  categoryText: {
    textAlign: 'center',
  },
  table: { textAlign: 'left' },
  media: { maxWidth: 60 }
});

export default function BasicTable() {

  const [rows, setRows] = useState([]);

  useEffect(() => {
    const getinfo = async () => {
      let response = await fetch('/api/posts/all');
      let data = await response.json();
      console.log("Data found", data[3])
      setRows(data);
    };
    getinfo();
  }, []);

  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.root}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={classes.title}>Credit cards</TableCell>
            <TableCell className={classes.title}>Annual Fee</TableCell>
            <TableCell className={classes.title}>Interest: Purchases</TableCell>
            <TableCell className={classes.title}>Interest: Cash Advances</TableCell>
            <TableCell className={classes.title}>Additional Cardholder</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow>
              <TableCell><img src={td1}/></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
              <TableCell></TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}