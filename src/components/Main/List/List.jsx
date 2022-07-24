import React, {useContext} from 'react'
import {List as MUIList, ListItem, ListItemAvatar, ListItemText, Avatar, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core'
import {Delete, MoneyOff, Translate} from '@material-ui/icons'
import { ExpenseTrackerContext } from '../../../context/context'

import useStyles from './styles';


const List = () => {
    const classes = useStyles();
    const {deleteTransaction, transactions} = useContext(ExpenseTrackerContext);
    
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
                <ListItemSecondaryAction edge="end" aria-label="delete" onClick={()=> deleteTransaction(transaction.id)}>
                    <Delete />
                </ListItemSecondaryAction>
            </ListItem>
        </Slide>
        ))}
    </MUIList>
  )
}

export default List