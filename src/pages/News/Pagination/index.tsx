import React, { useMemo } from 'react'
import styled from 'styled-components'
import { LeftArrow, RightArrow } from 'styled-icons/boxicons-regular'

import { Button } from '../../../components'

interface Props {
  changePage: (numberOfPages: number) => void
  currentPage: number
  pageCount: number
}

const Pagination: React.FC<Props> = ({
  changePage,
  currentPage,
  pageCount
}) => {
  const paginateLeft = () => changePage(-1)
  const paginateRight = () => changePage(1)

  const pages = useMemo(
    () => Array.from({ length: pageCount }, (value, index) => index + 1),
    [pageCount]
  )

  return (
    <FlexWrapper>
      <Button onClick={paginateLeft}>
        <LeftArrow />
      </Button>
      <PageNumberWrapper>
        {pages.map(pageNumber => (
          <PageNumber
            className={currentPage === pageNumber && 'active'}
            key={'pagination' + pageNumber}
          >
            {pageNumber}
          </PageNumber>
        ))}
      </PageNumberWrapper>
      <Button onClick={paginateRight}>
        <RightArrow />
      </Button>
    </FlexWrapper>
  )
}

export default Pagination

const FlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const PageNumberWrapper = styled(FlexWrapper)`
  flex-wrap: wrap;
`

const PageNumber = styled.div`
  padding: 4px;
  line-height: 10px;
  border-bottom: 2px solid transparent;

  &.active {
    border-bottom: ${({ theme }) => `2px solid ${theme.colors.primary}`};
    border-radius: 2px;
  }
`
