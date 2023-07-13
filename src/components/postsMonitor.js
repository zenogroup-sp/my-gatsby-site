import * as React from 'react'
import styled from 'styled-components'


const PostWrapper = styled.section`
  display: grid;
  grid-template-columns: ${props => `repeat(${props.columns}, 1fr)`};
`

//takes post components as arguments and displays them in a grid-like format within the widget space 
const PostsMonitor = ({columns,children,style}) => {

    return (
        <PostWrapper columns={columns} style={style}>
            {children}
        </PostWrapper>
    )
}


export default PostsMonitor