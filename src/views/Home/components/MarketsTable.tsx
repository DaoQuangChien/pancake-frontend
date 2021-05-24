import React from 'react'
import styled from 'styled-components'
import { useTable } from '@pancakeswap/uikit'
import Row from './Row'

const Container = styled.div`
  filter: ${({ theme }) => theme.card.dropShadow};
  width: 100%;
  background: ${({ theme }) => theme.card.background};
  border-radius: 16px;
  margin: 16px 0px;
`
const TableWrapper = styled.div`
  overflow: visible;

  &::-webkit-scrollbar {
    display: none;
  }
`
const StyledTable = styled.table`
  border-collapse: collapse;
  font-size: 14px;
  border-radius: 4px;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
`
const TableBody = styled.tbody`
  & tr {
    td {
      font-size: 16px;
      vertical-align: middle;
    }
  }
`
const TableContainer = styled.div`
  position: relative;
`

const MarketsTable = (props) => {
  const { data, columns } = props
  const { rows } = useTable(columns, data, { sortable: true, sortColumn: 'farm' })

  return (
    <Container>
      <TableContainer>
        <TableWrapper>
          <StyledTable>
            <TableBody>
              {rows.map((row) => {
                return <Row data={row.original} key={`table-row-${row.id}`} />
              })}
            </TableBody>
          </StyledTable>
        </TableWrapper>
      </TableContainer>
    </Container>
  )
}

export default MarketsTable
