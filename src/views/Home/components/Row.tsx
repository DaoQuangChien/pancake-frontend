import React from 'react'
import styled from 'styled-components'
import CellLayout from './CellLayout'
import { TableSchema } from '../types'

const CellInner = styled.div`
  padding: 24px 8px;
  display: flex;
  width: 100%;
  align-items: center;

  ${({ theme }) => theme.mediaQueries.xl} {
    padding: 24px 32px;
  }
`

const StyledTr = styled.tr`
  cursor: pointer;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
`

const Row = (props) => {
  const { data } = props;

  const columnNames = TableSchema.map((column) => column.name)
  const handleRenderRow = () => {
      return (
        <StyledTr>
          {Object.keys(data).map((key) => {
            const columnIndex = columnNames.indexOf(key)
            if (columnIndex === -1) {
              return null
            }
            return (
              <td key={key}>
                <CellInner>
                  <CellLayout label={TableSchema[columnIndex].label}>
                    {data[key]}
                  </CellLayout>
                </CellInner>
              </td>
            )
          })}
        </StyledTr>
      )
  }

  return (
    <>
      {handleRenderRow()}
    </>
  )
}

export default Row
