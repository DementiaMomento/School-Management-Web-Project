import React from 'react'
import Board from 'react-trello'

const data = {
  lanes: [
    {
      id: 'lane1',
      title: 'Types of Pills',
      label: '2/2',
      cards: [
        {id: 'Card1', title: 'Normal', description: '電話無法1', label: '30 mins', draggable: true},
        {id: 'Card2', title: '(Ab)Normal', description: 'Transfer via NEFT', label: '5 mins', metadata: {sha: 'be312a1'}}
      ]
    },
    {
      id: 'lane2',
      title: 'Completed',
      label: '0/0',
      cards: []
    }
  ]
}

const NotePage = () => {

  return (
    <>
    <Board data={data} />
    </>
  )
}

export default NotePage