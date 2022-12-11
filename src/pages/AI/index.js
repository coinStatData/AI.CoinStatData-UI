import React from 'react';
import ChatV2 from '../../containers/chatV2';
import ImageGen from '../../containers/imageGen';
import Divider from '@mui/material/Divider';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';

import './styles.css';

function AIPage({ screenWidth }) {
	return (
		<>
			<div className="">
				<ChatV2 />
				<div className="diver-cont">
					<Divider>
						<AllInclusiveIcon sx={{ width: "30px"}} />
					</Divider>
				</div>
				<ImageGen screenWidth={screenWidth} />
			</div>
		</>
	);
}

export default AIPage;