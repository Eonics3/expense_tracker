import React, {useContext} from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import {Delete, MoneyOff, Translate} from '@material-ui/icons'

import useStyles from './styles';


const List = () => {
    const classes = useStyles();

    console.log(globalState)
    const transactions = [
        {
            id:1,
            type:'Income',
            category: 'Vacation',
            amount: 100,
            date: "Thurs Dec 17"
        },
        {
            id:2,
            type:'Expense',
            category: 'Salary',
            amount: 10,
            date: "Wed Dec 16"
        },
        {
            id:3,
            type:'Income',
            category: 'Business',
            amount: 103,
            date: "Wed Dec 16"
        }
    ]
  return (
    <MUIList dense={false} className={classes.list}>
        {transactions.map((transaction) => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={Translate.id}>
            <ListItem>
                <ListItemAvatar>
                    <Avatar className={transaction.type=='Income' ? classes.avatarIncome: classes.avatarExpense}>
                        <MoneyOff />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`}/>
                <ListItemSecondaryAction edge="end" aria-label="delete" onClick="">
                    <Delete />
                </ListItemSecondaryAction>
            </ListItem>
        </Slide>
        ))}
    </MUIList>
  )
}

export default List