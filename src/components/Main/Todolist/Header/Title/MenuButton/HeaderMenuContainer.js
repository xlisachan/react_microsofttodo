import React, { useState } from 'react';
import { connect } from 'react-redux';
import { changeBgColor, changeOrder, toggleHide } from '../../../../../../actions/listsActions';
import { Icon, ListItemText, Menu, MenuItem } from '@material-ui/core';
import { FaCaretRight } from 'react-icons/fa';
import MenuTemplate from '../../../../../common/MenuTemplate';
import headerMenu from './todoMenu';

const HeaderMenuContainer = ({anchorEl, open, onClose, lists, selectedListId, onToggleHide=f=>f, onChangeBgColor=f=>f, onChangeOrder=f=>f}) => {
    const [subAnchorEl, setAnchor] = useState(null);
    const [subMenuOpen, setMenu] = useState(false);
    const [value, setValue] = useState(null);

    const handleSubItemClick = (e, item) => {
        setAnchor(e.currentTarget);
        setMenu(!subMenuOpen);
        setValue(item.id);
    }

    const handleSubMenuClose = () => {
        setMenu(false);
    }

    const formatColor = color => {
        return color ?
            'rgb(' + color.join(',') + ')' : null
    }

    const handleSort = item => {
        item.id === 'hideTasks' || item.id === 'showTasks' ?
            onToggleHide(selectedListId)
            :
            item.icon === 'lens' ?
                onChangeBgColor(item.color, selectedListId)
                :
                onChangeOrder(item.id, selectedListId);
                setMenu(false);
                onClose();
    }

    const renderMenuItems = children => {
        const selectedList = lists.filter(list => list.id === selectedListId),
              name = selectedList[0].name,
              hideCompleted = selectedList[0].hideCompleted,
              defaultList = selectedList[0].defaultList;

        return children.map(item => {
            if (item.children) {
                return (name !== 'Planned' || item.id !== "sortTasks") ?
                    <div key={ item.id }>
                        <MenuItem
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between'
                            }}
                            onClick={e => handleSubItemClick(e, item)}>
                        
                            <Icon style={{marginRight: '.5rem', fontSize: item.size}}>
                                { item.icon }
                            </Icon>

                            <ListItemText primary={ item.caption } />

                            <FaCaretRight />
                        </MenuItem>

                        { 
                            value === item.id &&
                            <Menu
                                anchorEl={ subAnchorEl }
                                open={ subMenuOpen }
                                onClose={ handleSubMenuClose }
                                anchorOrigin={{ vertical: "top", horizontal: "right" }}
                                transformOrigin={{ vertical: "top", horizontal: "left" }}>

                                { renderMenuItems(item.children) }
                            </Menu>
                        }
                    </div>
                    :
                    null
            }

            return (
                (
                    ((name === 'My Day' && item.id !== 'my_day') && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (name === 'Important' && (item.id !== 'importantStatus' && item.id !== 'completedStatus') && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (name === 'Planned' && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (name === 'Tasks' && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks'))) ||
                    (!defaultList && ((hideCompleted && item.id !== 'hideTasks') || (!hideCompleted && item.id !== 'showTasks')))
                ) ?
                    <MenuItem
                        key={item.id}
                        style={{
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}
                        onClick={() => handleSort(item)}>
                            <Icon style={{color: formatColor(item.color), marginRight: '.5rem', fontSize: item.size}}>
                                { item.icon }
                            </Icon>
                    
                            <ListItemText 
                                primary={item.caption} 
                            />
                    </MenuItem>
                    :
                    null
            )
        });
    };

    return (
        <MenuTemplate 
            anchorEl={ anchorEl }
            menuArr={ headerMenu }
            open={ open }
            onClose={ onClose }
            renderMenuItems={ renderMenuItems }
        />
    )
};

const mapStateToProps = state => ({
    lists: state.lists,
    selectedListId: state.current.list["id"]
});

const mapDispatchToProps = dispatch => ({

    onChangeBgColor(color, id) {
        dispatch(
            changeBgColor(color, id)
        )
    },

    onChangeOrder(order, id) {
        dispatch(
            changeOrder(order, id)
        )
    },

    onToggleHide(id) {
        dispatch(
            toggleHide(id)
        )
    }

});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderMenuContainer);