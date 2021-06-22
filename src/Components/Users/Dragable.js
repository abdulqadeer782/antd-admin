
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import UserTable from './userTable';


const tableDragable = [{
    title: 'Id',
    dataIndex: 'id',
},
{
    title: 'Post Id',
    dataIndex: 'postId',
},
{
    title: 'Name',
    dataIndex: 'name',
},
{
    title: 'Email',
    dataIndex: 'email',
},
{
    title: 'Body',
    dataIndex: 'body'
}]


const Abc = data =>{
    console.log('ea',data)
}

function Dragable() {
    const [characters, updateCharacters] = useState(tableDragable);

    function handleOnDragEnd(result) {
        if (!result.destination) return;

        const items = Array.from(characters);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        updateCharacters(items);

    }


    console.log('dragable',characters);
    

    return (
        <>
            <header>
                <DragDropContext onDragEnd={handleOnDragEnd}>
                    <Droppable droppableId="characters">
                        {(provided) => (
                            <ul className="characters" {...provided.droppableProps} ref={provided.innerRef}>
                                {characters.map((record, index) => {
                                    return (
                                        <Draggable key={record.dataIndex} draggableId={record.title} index={index}>
                                            {(provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                                    <h2 style={{backgroundColor:'darkgray',height:'50px',width:"100%",textAlign:'center',margin:'10px auto'}}>{record.title}</h2>
                                                </div>
                                            )}
                                        </Draggable>
                                    );
                                })}
                                {provided.placeholder}
                            </ul>
                        )}
                    </Droppable>
                </DragDropContext>
            </header>
        </>
    );
}

export default Dragable;