import React, { useCallback } from 'react'

import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const content = [{
	question: 'What is a DAO',
	answer: 'DAO is an acronym for `decentralised autonomous organisation`'
},{
	question: 'What is a DAO',
	answer: 'DAO is an acronym for `decentralised autonomous organisation`'
},{
	question: 'What is a DAO',
	answer: 'DAO is an acronym for `decentralised autonomous organisation`'
},{
	question: 'What is a DAO',
	answer: 'DAO is an acronym for `decentralised autonomous organisation`'
},{
	question: 'What is a DAO',
	answer: 'DAO is an acronym for `decentralised autonomous organisation`'
}]


export const Questions = () => {
	return (
		<>
			{ content.map( ( item, index ) => (
				<Accordion key={index}>
					<AccordionSummary
						expandIcon={<ExpandMoreIcon />}
						aria-controls={'panel'+index+'-content'}
						id={'panel'+index+'-header'}
					>
						<Typography>{item.question}</Typography>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>{item.answer}
						</Typography>
					</AccordionDetails>
				</Accordion>
			))}
		</>
	)
}
