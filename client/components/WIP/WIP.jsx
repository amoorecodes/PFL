import React from 'react'
import { BigTitle, Title, Details, Text } from '../../styles/globals.jsx'

import { PageWrapper, Picture, TextWrapper } from './WIPUI.jsx'

const NotFound = () => {
  return (
    <PageWrapper>
      <Picture src='/self-medium.png' />
      <TextWrapper>
        <BigTitle>Arthur Ryabtsev</BigTitle>
        <Title>Software Engineer</Title>
        <Details>
          This website is currently under construction.
          Check back later to see an updated result.
          In the meanwhile, you can get in contact with me through:
        </Details>
        <Text>
          Phone: 917-755-4685
          Email: ryabtsev.art@gmail.com
        </Text>
      </TextWrapper>
    </PageWrapper>
  )
}

export default NotFound
