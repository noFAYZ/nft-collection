import React from 'react';

interface Props {
	progressPercentage: number;
  }
  
  interface State {
  }
  
  const defaultState: State = {
  };
  

export default class ProgressBar extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.state = defaultState;
  }

  render() {
	return (
		<>
	
		<div className='h-3 w-full bg-neutral-300 rounded overflow-hidden mt-4'>
			
			<div className='h-full bg-blue-500 rounded-full' style={{ width: `${this.props.progressPercentage}%` }} />
			<div
				style={{ width: `${this.props.progressPercentage}%` }}
				className={`h-full ${
					this.props.progressPercentage < 70 ? 'bg-blue-500' : 'bg-yellow-300'
				}`}
			></div>
		</div>
		</>
	)
  }
}
