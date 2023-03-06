import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import {Global, css} from "@emotion/react"
import styled from '@emotion/styled'

type InfoPageProps ={
    data:{
        site:{
            siteMetadata:{
                title : string 
                description : string 
                author : string
            }
        }
    }
}


const InfoPage: FunctionComponent<InfoPageProps> = function({
    data:{
        site:{
            siteMetadata:{ title, description, author },
        },
    },
}) {
    return(
        <div>
            {/* <Global styles={ globalStyle }/>
            <div css={ TextStyle }> { title } </div>
            <Text1 disable={true}> { description } </Text1>
            <Text2 disable={true}> { author } </Text2>  */}
            
            <Global styles={globalStyle}/>
            <div css={TextStyle}> {title} </div> 
            <Text1 disable={true}> {description} </Text1>
            <Text2 disable={true}> {author} </Text2>
        </div>
    )
}

export default InfoPage

export const metadataQuery = graphql
`{
    site{
        siteMetadata{
            title 
            description 
            author
        }
    }
}`;

//global style 정의 방법 
/* const globalStyle = css`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

    font-size:20px;
}`

//tagged template literal 방식의 css 적용 방법
const TextStyle = css`
font-size:18px;
font-weight:700;
color:gray;`

// tagged template literal 방식의 style components 생성방법
const Text1 = styled.div<{disable:boolean}>`
font-size:20px;
font-weight:700;
text-decoration: ${({ disable }) => (disable ? 'line-through' : 'none')};
`

// 객체를 통한 styled components 방식
const Text2 = styled('div')<{disable:boolean}>(({ disable }) => ({
    fontSize: '15px',
    color:'blue',
    textDecoration: disable ? 'line-through' : "none",
})) */


// 

const globalStyle = css`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;

    font-size:20px;
}`

const TextStyle = css`
    font-size:20px;
    font-weight:700;
    color:gray;
`

const Text1 = styled.div<{disable:boolean}>`
    font-size:20px;
    font-weight:700;
    text-decoration: ${({disable}) => (disable ? 'line-through' : 'none')}
`

const Text2 = styled('div')<{disalbe:boolean}>(({disable})=>({
    fontSize: "15px",
    color:"blue",
    textDecoration:disable ? 'line-through' : 'none',
}))
