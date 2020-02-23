import React from 'react'
import useRooms from '../../hooks/useRooms'
import Room from './room'
import styled from '@emotion/styled'

const Content = styled.div `
width:100%;
min-height:500px;
padding:50px 0;
.rooms {
    max-width: 1200px;
    margin: 0 auto;
    width:90%;
     display:block;
}
@media(min-width:768px){
.rooms {
    width:90%;
      display: flex;
    justify-content: space-between;
}
    
}
`

export default function ListRooms() {
    const rooms = useRooms()
    console.log(rooms)
    return (
        <Content>
            <div className="rooms">
                {rooms.map(room=>{
                   return <Room key={room.id} room={room} />
                })}
            </div>
        </Content>
    )

}
